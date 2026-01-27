export const Facebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="#D1D1D1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
    >
      <path strokeDasharray={24} d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.5s"
          values="24;0"
        ></animate>
      </path>
      <path strokeDasharray={10} strokeDashoffset={10} d="M8 12h7">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.6s"
          dur="0.2s"
          to={0}
        ></animate>
      </path>
    </g>
  </svg>
);
export const Instagram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="#D1D1D1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path
        strokeDasharray={66}
        d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="66;0"
        ></animate>
      </path>
      <path
        strokeDasharray={28}
        strokeDashoffset={28}
        d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.7s"
          dur="0.6s"
          to={0}
        ></animate>
      </path>
    </g>
    <circle cx={17} cy={7} r={1.5} fill="#D1D1D1" opacity={0}>
      <animate
        fill="freeze"
        attributeName="opacity"
        begin="1.3s"
        dur="0.2s"
        to={1}
      ></animate>
    </circle>
  </svg>
);

export const Github = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      stroke="#D1D1D1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path
        strokeDasharray={32}
        d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="32;0"
        ></animate>
      </path>
      <path
        strokeDasharray={10}
        strokeDashoffset={10}
        d="M9 19c-1.41 0 -2.84 -0.56 -3.69 -1.19c-0.84 -0.63 -1.09 -1.66 -2.31 -2.31"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.7s"
          dur="0.2s"
          to={0}
        ></animate>
      </path>
    </g>
  </svg>
);
