import React from "react";

interface SwasthyaLogoProps {
  className?: string;
}

const SwasthyaLogo: React.FC<SwasthyaLogoProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      <path d="M3.34 17a10 10 0 0 0 17.32 0" />
      <path d="M6 9h12" />
    </svg>
  );
};

export default SwasthyaLogo;
