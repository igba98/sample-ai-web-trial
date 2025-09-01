import React from 'react';

export const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className || "h-5 w-5"}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

export const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className || "h-6 w-6"}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

export const LogoIcon = ({ className }: { className?: string }) => (
    <svg
      className={className || "w-8 h-8"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.5 12.5C17.5 15.26 15.26 17.5 12.5 17.5C9.74 17.5 7.5 15.26 7.5 12.5C7.5 9.74 9.74 7.5 12.5 7.5C13.88 7.5 15.13 8.06 16.03 8.97L9 16.01C8.07 15.1 7.5 13.86 7.5 12.5C7.5 9.74 9.74 7.5 12.5 7.5C15.26 7.5 17.5 9.74 17.5 12.5Z"
        fill="#bef264"
      />
    </svg>
  );