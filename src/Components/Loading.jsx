"use client";

import { motion } from "motion/react";

function LoadingThreeDotsPulse({ anime = "" }) {
  const dotVariants = {
    pulse: {
      scale: [1, 1.5, 1],
      transition: {
        duration: 1.0,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      animate="pulse"
      transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
      className={`containerLoading ${anime || ""}`}
    >
      <motion.div className="dot" variants={dotVariants} />
      <motion.div className="dot" variants={dotVariants} />
      <motion.div className="dot" variants={dotVariants} />
      <StyleSheet />
    </motion.div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>
      {`
            .containerLoading {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
                align-self: center;
                max-height: fit-content;
            }

            .dot {
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #04C1FB;
                will-change: transform;
            }
            `}
    </style>
  );
}

export default LoadingThreeDotsPulse;
