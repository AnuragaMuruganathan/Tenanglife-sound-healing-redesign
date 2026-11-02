type Props = { className?: string; style?: React.CSSProperties };

/** Calligraphic underline that sweeps under a heading word and rises into a curl. */
export function Swash({ className = "", style }: Props) {
  return (
    <svg aria-hidden viewBox="0 0 252 60" className={className} style={style}>
      <path
        d="M4 52C60 40 120 34 176 36C212 37 238 30 246 18C252 8 244 1 236 4C229 7 230 16 237 17"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
