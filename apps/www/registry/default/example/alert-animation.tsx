import * as React from "react"
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  RocketIcon,
} from "@radix-ui/react-icons"
import { motion } from "framer-motion"

import { Alert } from "@/registry/sydney/ui/alert"

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
}

export default function AlertAnimation() {
  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.default}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
      >
        <Alert className="flex items-center p-4 bg-blue-100 text-blue-800 rounded-lg">
          <RocketIcon className="h-5 w-5 mr-2" />
          <span className="font-medium">Heads up!</span>
        </Alert>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.success}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
      >
        <Alert className="flex items-center p-4 bg-green-100 text-green-800 rounded-lg">
          <CheckCircledIcon className="h-5 w-5 mr-2" />
          <span className="font-medium">Successful alert</span>
        </Alert>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.information}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
      >
        <Alert className="flex items-center p-4 bg-blue-50 text-blue-700 rounded-lg">
          <InfoCircledIcon className="h-5 w-5 mr-2" />
          <span className="font-medium">Information alert</span>
        </Alert>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.warning}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
      >
        <Alert className="flex items-center p-4 bg-yellow-100 text-yellow-800 rounded-lg">
          <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
          <span className="font-medium">Warning alert</span>
        </Alert>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        variants={variantAnimations.destructive}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 2 }}
      >
        <Alert className="flex items-center p-4 bg-red-100 text-red-800 rounded-lg">
          <CrossCircledIcon className="h-5 w-5 mr-2" />
          <span className="font-medium">Error alert</span>
        </Alert>
      </motion.div>
    </div>
  )
}
