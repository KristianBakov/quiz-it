import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const FadeIn = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, translateY: "-20px" },
        hidden: { opacity: 0, translateY: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
