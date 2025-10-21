export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="h-7 w-7 text-primary"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M36.6667 60.8333V39.1667H42.5V60.8333H36.6667ZM48.3333 60.8333V45H54.1667V60.8333H48.3333ZM60 60.8333V50.8333H65.8333V60.8333H60Z"
          fill="currentColor"
        />
        <path
          d="M14.1583 43.3333C11.3333 46.1583 9.16667 50 9.16667 50C9.16667 50 11.3333 53.8417 14.1583 56.6667L43.3333 85.8417C46.1583 88.6667 50 90.8333 50 90.8333C50 90.8333 53.8417 88.6667 56.6667 85.8417L65.525 77L69.475 73.05L73.425 69.1L77 65.525V65.525L56.6667 45C53.8417 42.175 50 40 50 40C50 40 46.1583 42.175 43.3333 45L14.1583 43.3333Z"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M65.8333 30.8333L90.8333 55.8333M90.8333 55.8333V35M90.8333 55.8333H70"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xl font-bold tracking-tight text-foreground">
        Visual BI
      </span>
    </div>
  );
}