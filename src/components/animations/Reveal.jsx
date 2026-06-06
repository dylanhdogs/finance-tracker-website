import { motion } from "motion/react";

const directionVariants = {
  up: { y: 50 },
  down: { y: -50 },
  left: { x: -50 },
  right: { x: 50 },
  scale: { scale: 0.9 },
  fade: {},
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  as = "div",
  once = true,
  margin = "-60px",
}) {
  const MotionTag = motion[as] || motion.div;
  const hidden = {
    opacity: 0,
    filter: "blur(6px)",
    ...directionVariants[direction],
  };
  const visible = {
    opacity: 1,
    filter: "blur(0px)",
    x: 0,
    y: 0,
    scale: 1,
  };

  return (
    <MotionTag
      initial={hidden}
      whileInView={visible}
      viewport={{ once, margin }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
