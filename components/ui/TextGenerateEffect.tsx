"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  color,
  extraStyles,
}: {
  words: string;
  className?: string;
  color?: string;
  extraStyles?:string
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2.4,
        delay: stagger(0.5),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
            return (
            <motion.span
              key={word + idx}
              className={`${color === 'white' ? 'text-white dark:text-white' : 'text-orange-600 dark:text-orange-600'} opacity-0`}
            >
              {word}{" "}
            </motion.span>
            );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold text-3xl md:text-6xl", className)}>
        <div className={`mt-0 ${extraStyles}`}>
        <div className="dark:text-orange-600 text-orange-600 leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
