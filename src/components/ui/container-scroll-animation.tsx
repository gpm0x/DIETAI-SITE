
"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

// Define explicit interfaces for components to ensure robust type checking
interface HeaderProps {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}

// Fix: Make children optional to resolve TS error when components are used with JSX children in strict environments
interface CardProps {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children?: React.ReactNode;
}

// Fix: Make children optional to resolve TS error when components are used with JSX children in strict environments
interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Header component for the scroll animation, responsible for the moving title.
 */
// Added explicit HeaderProps interface to ensure correct prop typing
export const Header = ({ translate, titleComponent }: HeaderProps) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

/**
 * Card component that performs the 3D rotation effect.
 */
// Added missing 'translate' to destructuring and ensured 'children' is properly typed via CardProps
export const Card = ({
  rotate,
  scale,
  translate, // Included in destructuring to match the interface even if not used in styles
  children,
}: CardProps) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#333] p-2 md:p-6 bg-[#0a0a0a] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-[#050505] md:rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
};

/**
 * Main container component for the scroll-triggered 3D animation.
 */
// Added ContainerScrollProps interface to resolve 'children' property missing errors in JSX usage
export const ContainerScroll = ({
  titleComponent,
  children,
}: ContainerScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};
