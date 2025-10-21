export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        className="h-8 w-8"
        viewBox="0 0 200 125"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <g fill="#FFFFFF">
          {/* Bar Chart */}
          <path d="M85 50 H 95 V 75 H 85 Z" />
          <path d="M100 42 H 110 V 75 H 100 Z" />
          <path d="M115 30 H 125 V 75 H 115 Z" />
          {/* Outer Shape with Arrow */}
          <path 
            d="M 60,75 
               C 30,75 20,40 50,30 
               L 90,5 
               C 100,0 110,0 120,5 
               L 150,30 
               C 180,40 170,75 140,75 
               L 165,60 
               L 190,75 
               L 165,90 
               L 140,75 
               L 60,75 Z" 
            stroke="#FFFFFF" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </svg>
      <span className="text-xl font-bold tracking-tight text-foreground">
        Visual BI
      </span>
    </div>
  );
}
