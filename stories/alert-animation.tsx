import * as React from "react";
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Alert } from "@/registry/sydney/ui/alert";
type Variant = 'default' | 'destructive' | 'information' | 'warning' | 'success';
const variantColorMap: Record<Variant, string> = {
  default: "blue",
  destructive: "red",
  information: "blue",
  warning: "yellow",
  success: "green",
};

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

type AlertProps = {
  size: string;
  colorDepth: string;
  textColor: string;
  borderRadius: string;
  variant: 'default' | 'destructive' | 'information' | 'warning' | 'success';
};

const getClassName = (size: string, variant: string, colorDepth: string, textColor: string, borderRadius: string): string => {
  const baseColor = variantColorMap[variant as Variant];
  return `flex items-center p-4 ${size} bg-${baseColor}-${colorDepth} ${textColor} rounded-${borderRadius}`;
};

export default function AlertAnimation({ size, colorDepth, textColor, borderRadius, variant }: AlertProps) {
  const className = getClassName(size, variant, colorDepth, textColor, borderRadius);

  return (
    <div className="w-full max-w-md mx-auto space-y-4"> 
      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations[variant || 'default']}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
      >
        <Alert className={className}>
          <RocketIcon className="h-5 w-5 mr-2" />
          <span className="font-medium">Heads up!</span>
        </Alert>
      </motion.div>
    </div>
  );
}