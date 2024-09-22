import { cn } from "@/lib/utils";
import { Slider } from "@/registry/default/ui/slider";
import React from "react";

type SliderProps = React.ComponentProps<typeof Slider> & {
  backgroundColor?: string;
  trackColor?: string;
  thumbColor?: string;
  size?: "small" | "medium" | "large";
};

export default function SliderDemo({
  className,
  backgroundColor = "bg-gray-200", // Default Tailwind background color
  trackColor = "bg-blue-500", // Default Tailwind track color
  thumbColor = "bg-red-500", // Default Tailwind thumb color
  size = "medium", // Default size
  ...props
}: SliderProps) {

  // Determine size based on the size prop (adjusting the height and thumb size)
  let sliderSizeClass;
  switch (size) {
    case "small":
      sliderSizeClass = "h-1"; // Small size class
      break;
    case "large":
      sliderSizeClass = "h-4"; // Large size class
      break;
    default:
      sliderSizeClass = "h-2"; // Medium size class
      break;
  }

  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn(
        "relative", // To ensure proper positioning
        sliderSizeClass, // Dynamically apply size class
        className,
        backgroundColor // Apply background color dynamically
      )}
      {...props}
    >
      <div className={cn("absolute w-full", trackColor)} />
      <div className={cn("absolute w-4 h-4 rounded-full", thumbColor)} />
    </Slider>
  );
}
