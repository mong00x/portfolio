import { useEffect, useRef } from "react";
import { useDomEvent, MotionValue, useSpring  } from "framer-motion";
import { animate } from "popmotion";
import { mix } from '@popmotion/popcorn';
import { debounce } from "lodash";

interface Constraints {
  top: number;
  bottom: number;
}

// Absolute distance a wheel scroll event can travel outside of
// the defined constraints before we fire a "snap back" animation
const deltaThreshold = 5;

// If wheel event fires beyond constraints, multiple the delta by this amount
const elasticFactor = 0.2;



function springTo(value: MotionValue<number>, to: number) {
  const animation = animate({
    from: value.get(),
    to,
    type: 'spring',
    stiffness: 400,
    damping: 40,
    velocity: value.getVelocity(),
    onUpdate: (v: number) => value.set(v),
    onComplete: () => {
      animation.stop();
    },
  });

  return animation;
}

const debouncedSpringTo = debounce(springTo, 100)

/**
 * Re-implements wheel scroll for overflow: hidden elements.
 *
 * Adds Apple Watch crown-style constraints, where the user
 * must continue to input wheel events of a certain delta at a certain
 * speed or the scrollable container will spring back to the nearest
 * constraint.
 *
 * @param ref - Ref of the Element to attach listener to
 * @param y - MotionValue for the scrollable element - might be different to the Element
 * @param constraints - top/bottom scroll constraints in pixels.
 * @param onWheelCallback - Optional callback to handle wheel events.
 * @param isActive - `true` if this listener should fire.
 */
export function useWheelScroll(
  ref: React.RefObject<Element>,
  y: MotionValue<number>,
  constraints: Constraints | null,
  onWheelCallback?: (e: WheelEvent) => void,
  isActive: boolean = true
): void {
  const savedOnWheelCallback = useRef(onWheelCallback);

  useEffect(() => {
    savedOnWheelCallback.current = onWheelCallback;
  }, [onWheelCallback]);

  const onWheel = (event: WheelEvent) => {
    event.preventDefault();

    const currentY = y.get();
    let newY = currentY - event.deltaY;
    let startedAnimation = false;
    const isWithinBounds =
      constraints && newY >= constraints.top && newY <= constraints.bottom;

    if (constraints && !isWithinBounds) {
      newY = mix(currentY, newY, elasticFactor);

      if (newY < constraints.top) {
        if (event.deltaY <= deltaThreshold) {
          springTo(y, constraints.top);
          startedAnimation = true;
        } else {
          debouncedSpringTo(y, constraints.top);
        }
      }
      
      if (newY > constraints.bottom) {
        if (event.deltaY >= -deltaThreshold) {
          springTo(y, constraints.bottom);
          startedAnimation = true;
        } else {
          debouncedSpringTo(y, constraints.bottom);
        }
      }
      if (!startedAnimation) {
        y.stop();
        y.set(newY);
      } else {
        debouncedSpringTo.cancel();
      }
  
      if (savedOnWheelCallback.current) {
        savedOnWheelCallback.current(event);
      }
    };
  
    useDomEvent(ref, "wheel", isActive ? (onWheel as EventListener) : undefined, { passive: false });

  }
}

