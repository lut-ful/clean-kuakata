interface CoalsLogoProps {
  variant?: "full" | "compact" | "icon";
  primaryColor?: string;
  secondaryColor?: string;
  textColor?: string;
  className?: string;
  iconSize?: number;
}

export default function CoalsLogo({
  variant = "compact",
  primaryColor = "#2D5F4F",
  secondaryColor = "#7A9E7E",
  textColor = "#2D5F4F",
  className = "",
  iconSize = 48,
}: CoalsLogoProps) {
  const icon = (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
    >
      {/* Outer ring — sage/secondary segment, upper-right ~80° arc */}
      <path
        d="M 60.9 9.4 A 42 42 0 0 1 91.8 53.7"
        stroke={secondaryColor}
        strokeWidth="11"
        fill="none"
        strokeLinecap="round"
      />
      {/* Outer ring — primary dark segment, remaining ~260° arc */}
      <path
        d="M 90.6 60.9 A 42 42 0 1 1 53.7 8.2"
        stroke={primaryColor}
        strokeWidth="11"
        fill="none"
        strokeLinecap="round"
      />
      {/* Inner C shape — opening faces right */}
      <path
        d="M 59.6 34.4 A 22 22 0 1 0 59.6 65.6"
        stroke={primaryColor}
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === "icon") {
    return <span className={className}>{icon}</span>;
  }

  if (variant === "compact") {
    return (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        {icon}
        <span className="flex flex-col leading-tight">
          <span
            style={{ color: textColor }}
            className="font-bold text-lg tracking-[0.18em] uppercase"
          >
            COALS
          </span>
          <span
            style={{ color: textColor }}
            className="text-[9px] tracking-[0.14em] uppercase opacity-60"
          >
            GLOBAL FOUNDATION
          </span>
        </span>
      </span>
    );
  }

  /* full */
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      {icon}
      <p
        style={{ color: textColor }}
        className="font-bold text-5xl tracking-[0.2em] uppercase mt-5"
      >
        COALS
      </p>
      <p
        style={{ color: textColor + "99" }}
        className="text-[11px] tracking-[0.22em] uppercase mt-2"
      >
        CIRCULAR OCEANIC AND LAND SYSTEMS
      </p>
      <div
        className="w-10 border-t mt-4 mb-4"
        style={{ borderColor: textColor + "40" }}
      />
      <p
        style={{ color: textColor }}
        className="text-xs tracking-[0.28em] uppercase font-semibold opacity-75"
      >
        GLOBAL FOUNDATION
      </p>
    </div>
  );
}
