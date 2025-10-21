export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="h-7 w-7 text-primary"
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M150 300C232.843 300 300 232.843 300 150C300 67.1573 232.843 0 150 0C67.1573 0 0 67.1573 0 150C0 232.843 67.1573 300 150 300Z"
          fill="currentColor"
        />
        <path
          d="M99.9999 186.667V133.333H118.333V186.667H99.9999ZM146.667 186.667V146.667H165V186.667H146.667ZM193.333 186.667V166.667H211.667V186.667H193.333Z"
          fill="white"
        />
      </svg>
      <span className="text-xl font-bold tracking-tight text-foreground">
        Visual BI
      </span>
    </div>
  );
}
