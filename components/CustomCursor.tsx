"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const dotX = useSpring(cursorX, { damping: 50, stiffness: 1200 });
  const dotY = useSpring(cursorY, { damping: 50, stiffness: 1200 });
  const ringX = useSpring(cursorX, { damping: 30, stiffness: 300 });
  const ringY = useSpring(cursorY, { damping: 30, stiffness: 300 });

  useEffect(() => {
    setIsMounted(true);
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const checkPointer = () => {
      const el = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, label, [onclick]'
      );
      const handleEnter = () => setIsPointer(true);
      const handleLeave = () => setIsPointer(false);
      el.forEach((node) => {
        node.addEventListener("mouseenter", handleEnter);
        node.addEventListener("mouseleave", handleLeave);
      });
    };

    window.addEventListener("mousemove", moveCursor);
    checkPointer();
    document.addEventListener("mouseover", () => {
      if ((document.activeElement as HTMLElement)?.style?.cursor === "pointer") {
        setIsPointer(true);
      }
    });

    // detect cursor style
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const style = window.getComputedStyle(target).cursor;
      setIsPointer(style === "pointer");
    };
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isMounted) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998] top-0 left-0"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="rounded-full border border-purple-500/60"
          animate={{
            width: isPointer ? 48 : 36,
            height: isPointer ? 48 : 36,
            borderColor: isPointer ? "rgba(34,211,238,0.7)" : "rgba(168,85,247,0.6)",
          }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] top-0 left-0"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: isPointer ? 6 : 8,
            height: isPointer ? 6 : 8,
            backgroundColor: isPointer ? "#22d3ee" : "#a855f7",
          }}
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
        />
      </motion.div>
    </>
  );
}
