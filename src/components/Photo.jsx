import { motion } from "framer-motion";

export const Photo = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <div className="relative w-[350px] h-[350px] xl:w-[498px] xl:h-[498px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeIn" }}
          className="relative w-full h-full"
        >
          {/* Image */}
          <img
            src="/assets/shanu1.png"
            alt="Profile"
            className="absolute z-10 object-contain w-full h-full"
          />

          {/* Animated Circle */}
          <motion.svg
            className="absolute top-0 left-0 z-20 w-full h-full"
            fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#00ff99"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: [
                  "15 120 25 25",
                  "16 25 92 72",
                  "4 250 22 22",
                ],
                rotate: [120, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.svg>
        </motion.div>
      </div>
    </div>
  );
};
