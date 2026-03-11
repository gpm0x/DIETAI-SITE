import React from "react";

interface FlippingCardProps {
    // Adding key to the interface to satisfy strict TypeScript checking when the component is used in a .map() loop
    key?: React.Key;
    className?: string;
    height?: number;
    width?: string | number;
    frontContent?: React.ReactNode;
    backContent?: React.ReactNode;
}

export function FlippingCard({
    className = "",
    frontContent,
    backContent,
    height = 500,
    width = "100%",
}: FlippingCardProps) {
    return (
        <div
            className={`group/flipping-card [perspective:1000px] ${className}`}
            style={{
                height: typeof height === 'number' ? `${height}px` : height,
                width: typeof width === 'number' ? `${width}px` : width,
            }}
        >
            <div
                className={`relative h-full w-full rounded-[48px] transition-all duration-700 [transform-style:preserve-3d] group-hover/flipping-card:[transform:rotateY(180deg)]`}
            >
                {/* Front Face */}
                <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-white/[0.02] border border-white/5 text-white [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(0deg)] overflow-hidden">
                    <div className="[transform:translateZ(50px)] h-full w-full">
                        {frontContent}
                    </div>
                </div>
                {/* Back Face */}
                <div className="absolute inset-0 h-full w-full rounded-[inherit] bg-[#080810] border border-purple-500/30 text-white [transform-style:preserve-3d] [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden">
                    <div className="[transform:translateZ(50px)] h-full w-full">
                        {backContent}
                    </div>
                </div>
            </div>
        </div>
    );
}