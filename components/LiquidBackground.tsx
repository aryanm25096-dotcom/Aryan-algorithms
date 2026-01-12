'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export default function LiquidBackground() {
    const { scrollY } = useScroll();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for mouse movement
    const springConfig = { damping: 25, stiffness: 50 };
    const mouseXSpring = useSpring(mouseX, springConfig);
    const mouseYSpring = useSpring(mouseY, springConfig);

    // Handle mouse move
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse position (-1 to 1)
            const { innerWidth, innerHeight } = window;
            const x = (e.clientX / innerWidth) * 2 - 1;
            const y = (e.clientY / innerHeight) * 2 - 1;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Transforms for different orbs (parallax effect)
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
    const y3 = useTransform(scrollY, [0, 1000], [0, 300]);

    const x1 = useTransform(mouseXSpring, [-1, 1], [-50, 50]);
    const yMouse1 = useTransform(mouseYSpring, [-1, 1], [-50, 50]);

    const x2 = useTransform(mouseXSpring, [-1, 1], [30, -30]);
    const yMouse2 = useTransform(mouseYSpring, [-1, 1], [30, -30]);

    const x3 = useTransform(mouseXSpring, [-1, 1], [-20, 20]);
    const yMouse3 = useTransform(mouseYSpring, [-1, 1], [-20, 20]);

    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 bg-[#0a0a0a]">
            {/* Deep base glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-950 to-[#0a0a0a]" />

            {/* Animated Orbs */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen filter blur-[100px]">
                {/* Orb 1 - Emerald */}
                <motion.div
                    style={{ y: y1, x: x1, translateY: yMouse1 }}
                    className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%]"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 90, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-full h-full bg-emerald-600 rounded-full opacity-30"
                    />
                </motion.div>

                {/* Orb 2 - Cyan */}
                <motion.div
                    style={{ y: y2, x: x2, translateY: yMouse2 }}
                    className="absolute top-[20%] right-[-10%] w-[40%] h-[40%]"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            rotate: [0, -60, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 2
                        }}
                        className="w-full h-full bg-cyan-600 rounded-full opacity-30"
                    />
                </motion.div>

                {/* Orb 3 - Blue Accent */}
                <motion.div
                    style={{ y: y3, x: x3, translateY: yMouse3 }}
                    className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%]"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 45, 0],
                        }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 5
                        }}
                        className="w-full h-full bg-blue-700 rounded-full opacity-20"
                    />
                </motion.div>
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-[size:50px_50px]" />
        </div>
    );
}
