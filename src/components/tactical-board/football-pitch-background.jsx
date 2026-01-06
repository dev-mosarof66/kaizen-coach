const FootballPitchBackground = () => {
  return (
    <div className="relative w-full aspect-2/1 rounded-lg bg-gray-900">
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#9ca3af"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Pitch Lines */}
      <svg
        className="absolute inset-0 w-full h-full overflow-hidden"
        viewBox="0 0 100 50"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Outer boundary */}
        <rect
          x="0"
          y="0"
          width="100"
          height="50"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="0.2"
        />

        {/* Center line */}
        <line
          x1="50"
          y1="0"
          x2="50"
          y2="50"
          stroke="#9ca3af"
          strokeWidth="0.2"
        />

        {/* Center circle */}
        <circle
          cx="50"
          cy="25"
          r="9.15"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="0.2"
        />

        {/* Left penalty box */}
        <rect
          x="0"
          y="10.25"
          width="16.5"
          height="29.5"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="0.3"
        />
        <rect
          x="0"
          y="18.25"
          width="5.5"
          height="13.5"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="0.3"
        />

        {/* Right penalty box */}
        <rect
          x="83.5"
          y="10.25"
          width="16.5"
          height="29.5"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="0.3"
        />
        <rect
          x="94.5"
          y="18.25"
          width="5.5"
          height="13.5"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="0.3"
        />
      </svg>

    </div>
  );
};

export default FootballPitchBackground;
