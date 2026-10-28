import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
const reveal: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(7px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
export default function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }} transition={{ delay }}>{children}</motion.div>;
}
