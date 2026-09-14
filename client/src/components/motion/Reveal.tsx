import { motion } from "motion/react";
import type { Easing, Variants } from "motion/react";
import type { ReactNode } from "react";

/**
 * Convenciones de motion del proyecto.
 *
 * - Solo animamos `transform` y `opacity` (barato para el compositor).
 * - Todo respeta `prefers-reduced-motion` vía <MotionConfig reducedMotion="user">
 *   en App.tsx: los desplazamientos se vuelven instantáneos y solo queda el fade.
 * - Los reveals se disparan una sola vez, 80px antes de entrar al viewport.
 */

export const EASE_OUT: Easing = [0.22, 1, 0.36, 1];

const REVEAL_DURATION = 0.6;
const STAGGER_CHILDREN = 0.08;

const VIEWPORT = { once: true, margin: "-80px" } as const;

/** Fade + subida de 16px. `custom` = delay en segundos. */
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE_OUT, delay },
  }),
};

/** Contenedor que escalona a sus hijos. `custom` = delay inicial en segundos. */
export const staggerVariants: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: { staggerChildren: STAGGER_CHILDREN, delayChildren: delay },
  }),
};

interface RevealProps {
  children: ReactNode;
  /** Retraso en segundos antes de animar. */
  delay?: number;
  className?: string;
}

/** Bloque único que aparece al entrar en el viewport. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={revealVariants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

/** Lista de tarjetas: el grupo dispara el reveal y escalona los StaggerItem. */
export function StaggerGroup({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={staggerVariants}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

/** Hijo de StaggerGroup. Hereda `hidden`/`visible` del padre. */
export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div className={className} variants={revealVariants}>
      {children}
    </motion.div>
  );
}
