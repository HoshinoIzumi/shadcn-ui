import * as React from "react";
import { RocketIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Button } from '@/registry/sydney/ui/button';

type Variant = 'default' | 'destructive' | 'information' | 'warning' | 'success';

const variantAnimations = {
  default: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  destructive: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  information: {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  warning: {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
  },
  success: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  },
};

type AlertAnimationProps = {
  AnimationType: Variant;
  size: string;
  colorDepth: string;
  textColor: string;
  borderRadius: string;
};

const AlertAnimation: React.FC<AlertAnimationProps> = ({
  AnimationType,
  size,
  colorDepth,
  textColor,
  borderRadius,
}) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variantAnimations[AnimationType || 'default']}
      transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
      className={`flex items-center p-4 ${size} ${colorDepth}  rounded-${borderRadius}`}
      style={{  color:textColor }}
    >
      <RocketIcon className="h-5 w-5 mr-2" />
      <span className="font-medium">Heads up!</span>
    </motion.div>
  );
};

export default AlertAnimation;
