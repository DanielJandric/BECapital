import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export type ContainerProps = HTMLAttributes<HTMLDivElement>;

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full max-w-[var(--container-max)] px-[clamp(1.5rem,4vw,3.5rem)]",
          className,
        )}
        {...props}
      />
    );
  },
);

Container.displayName = "Container";
