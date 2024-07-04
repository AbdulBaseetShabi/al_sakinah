"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const WelcomeContent = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Image
          src="./salam.svg"
          alt="Asalamualayikum"
          width="400"
          height="100"
          className="mx-auto"
        />
      </motion.div>
      <motion.p
        className="font-bold text-5xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ color: "white" }}
      >
        Welcome to AlSakinah Institute
      </motion.p>
      <motion.p
        className="font-extralight text-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        style={{ color: "white" }}
      >
        Where we aim to foster a community in the KW Region
      </motion.p>
    </div>
  );
};

export default WelcomeContent;
