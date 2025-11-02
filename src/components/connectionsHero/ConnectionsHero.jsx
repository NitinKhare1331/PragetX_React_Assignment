import React from "react";

export default function ConnectionsHero({ leftIcons = [], rightIcons = [] }) {
    const [width, setWidth] = React.useState(typeof window !== "undefined" ? window.innerWidth : 1200);

    React.useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const W = 1000;
    const H = 320;
    const centerX = W / 2;
    const centerY = H / 2;

    const isSmall = width < 768;
    const isMedium = width >= 768 && width < 1024;

    // X offsets for all screens
    const leftXBase = isSmall 
        ? W * 0.12 
        : isMedium 
        ? W * 0.20 
        : W * 0.16;

    const rightXBase = isSmall 
        ? W * 0.88 
        : isMedium 
        ? W * 0.80 
        : W * 0.84;

    const centerSize = isSmall ? 64 : 88;
    const centerOffset = centerSize / 2;
    const badgeR = isSmall ? 22 : 26;

    function distributeArc(count, center, spread = isSmall ? 200 : 150) {
        if (count === 0) return [];
        if (count === 1) return [center];
        const step = spread / (count - 1);
        const start = center - spread / 2;

        return Array.from({ length: count }).map((_, i) => {
            const y = start + i * step;
            const curve = Math.abs(i - (count - 1) / 2);
            return y + curve * (isSmall ? 4 : 8);
        });
    }

    const leftYs = distributeArc(leftIcons.length, centerY);
    const rightYs = distributeArc(rightIcons.length, centerY);

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-7xl mx-auto py-14 md:py-24 px-4">
                <svg
                    viewBox={`0 0 ${W} ${H}`}
                    className="w-full h-auto"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ minHeight: '300px' }}
                >
                    {leftYs.map((y, i) => (
                        <line
                            key={`L-${i}`}
                            x1={leftXBase}
                            y1={y}
                            x2={centerX}
                            y2={centerY}
                            stroke="#cbd5e1"
                            strokeWidth={2}
                            strokeDasharray="4 8"
                            strokeLinecap="round"
                            opacity="0.8"
                        />
                    ))}

                    {rightYs.map((y, i) => (
                        <line
                            key={`R-${i}`}
                            x1={rightXBase}
                            y1={y}
                            x2={centerX}
                            y2={centerY}
                            stroke="#cbd5e1"
                            strokeWidth={2}
                            strokeDasharray="4 8"
                            strokeLinecap="round"
                            opacity="0.8"
                        />
                    ))}

                    <g
                        transform={`translate(${centerX - centerOffset}, ${centerY - centerOffset})`}
                        style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.1))" }}
                    >
                        <rect
                            width={centerSize}
                            height={centerSize}
                            rx={isSmall ? 14 : 20}
                            fill="#fff"
                            stroke="#e2e8f0"
                            strokeWidth="1"
                        />
                        <image
                            href="/icons/X.png"
                            x={centerSize / 2 - 16}
                            y={centerSize / 2 - 16}
                            width="32"
                            height="32"
                        />
                    </g>

                    {leftYs.map((y, i) => (
                        leftIcons[i] && (
                            <g
                                key={`li-${i}`}
                                transform={`translate(${leftXBase - badgeR}, ${y - badgeR})`}
                                style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))" }}
                            >
                                <circle 
                                    cx={badgeR} 
                                    cy={badgeR} 
                                    r={badgeR} 
                                    fill="#fff"
                                    stroke="#e2e8f0"
                                    strokeWidth="1"
                                />
                                <image
                                    href={leftIcons[i]}
                                    x={badgeR - (isSmall ? 11 : 13)}
                                    y={badgeR - (isSmall ? 11 : 13)}
                                    width={isSmall ? 22 : 26}
                                    height={isSmall ? 22 : 26}
                                />
                            </g>
                        )
                    ))}

                    {rightYs.map((y, i) => (
                        rightIcons[i] && (
                            <g
                                key={`ri-${i}`}
                                transform={`translate(${rightXBase - badgeR}, ${y - badgeR})`}
                                style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))" }}
                            >
                                <circle 
                                    cx={badgeR} 
                                    cy={badgeR} 
                                    r={badgeR} 
                                    fill="#fff"
                                    stroke="#e2e8f0"
                                    strokeWidth="1"
                                />
                                <image
                                    href={rightIcons[i]}
                                    x={badgeR - (isSmall ? 11 : 13)}
                                    y={badgeR - (isSmall ? 11 : 13)}
                                    width={isSmall ? 22 : 26}
                                    height={isSmall ? 22 : 26}
                                />
                            </g>
                        )
                    ))}
                </svg>
            </div>
        </div>
    );
}