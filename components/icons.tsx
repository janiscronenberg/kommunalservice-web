import type { IconName } from "../lib/content";

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 24, className }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "route":
      return (
        <svg {...common}>
          <circle cx="6" cy="18" r="2.5" />
          <circle cx="18" cy="6" r="2.5" />
          <path d="M8.4 17.2c4.9-1 7.2-3.4 7.7-8.7" />
          <path d="M6 4v6M3 7h6" />
        </svg>
      );
    case "rain":
      return (
        <svg {...common}>
          <path d="M7 16.5H6a4 4 0 0 1-.6-7.9A6.5 6.5 0 0 1 18 10.5a3 3 0 0 1 0 6h-1" />
          <path d="m9 15-1.5 4M13 15l-1.5 4M17 15l-1.5 4" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M20 4C11 4 5 8 5 14c0 3 2 5 5 5 6 0 10-6 10-15Z" />
          <path d="M4 21c3-6 7-9 12-12" />
        </svg>
      );
    case "inbox":
      return (
        <svg {...common}>
          <path d="M4 5h16v14H4z" />
          <path d="M4 13h4l2 3h4l2-3h4M8 9h8" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v5c0 4.8 2.8 8.2 7 10 4.2-1.8 7-5.2 7-10V6z" />
          <path d="m9 12 2 2 4-5" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <path d="M4 8h4l1.5-2h5L16 8h4v11H4z" />
          <circle cx="12" cy="13.5" r="3.2" />
        </svg>
      );
    case "bench":
      return (
        <svg {...common}>
          <path d="M5 6h14v5H5zM4 14h16M6 11v9M18 11v9" />
        </svg>
      );
    case "notice":
      return (
        <svg {...common}>
          <path d="M5 4h14v14H5zM8 8h8M8 12h6M9 18v3M15 18v3" />
        </svg>
      );
    case "bike":
      return (
        <svg {...common}>
          <circle cx="6" cy="17" r="3" />
          <circle cx="18" cy="17" r="3" />
          <path d="m6 17 4-7 3 7h-7ZM13 17l3-7M9 7h4" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5.5" rx="7" ry="3" />
          <path d="M5 5.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6M5 11.5v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );
  }
}

export function ArrowIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="8" fill="currentColor" opacity=".12" />
      <path d="m5.4 9.1 2.2 2.2 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
