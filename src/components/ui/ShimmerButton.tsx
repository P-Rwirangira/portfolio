import React, { CSSProperties, ComponentPropsWithoutRef } from "react";
import { cn } from "@lib/utils";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.1em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgb(31 41 55)",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          className,
        )}
        ref={ref}
        {...props}
      >
        {/* Shimmer container */}
        <div
          className={cn(
            "absolute inset-0 -z-30 overflow-hidden [container-type:size]",
            "[border-radius:var(--radius)]"
          )}
        >
          {/* Rotating shimmer effect */}
          <div 
            className="absolute inset-0 animate-[spin_var(--speed)_linear_infinite]"
            style={{
              background: `conic-gradient(from 0deg at 50% 50%,
                transparent 0,
                var(--shimmer-color) var(--spread),
                transparent calc(var(--spread) + 20deg)
              )`,
            }}
          />
        </div>

        {children}

        {/* Highlight */}
        <div
          className={cn(
            "absolute inset-0",
            "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
            "transform-gpu transition-all duration-300 ease-in-out",
            "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
            "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
          )}
        />

        {/* Inner background */}
        <div
          className={cn(
            "absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]",
          )}
        />
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";