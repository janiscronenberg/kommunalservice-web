export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`brand-symbol ${className}`.trim()}
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <rect width="48" height="48" rx="10" fill="currentColor" />
      <path
        d="M11.5 11.5v25M13.5 24l10-12.5M13.5 24l10 12.5"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M28.5 11.5v25M38 11.5v25M28.5 24H38"
        fill="none"
        stroke="#f2b441"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}
