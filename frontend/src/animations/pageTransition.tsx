import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
    children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    return (
        <>
            {children}

            <motion.div
                className="slide_in"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
                className="slide_out"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
        </>
    );
}
