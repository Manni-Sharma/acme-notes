const SocialIcons = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <a href="https://twitter.com" className="text-gray-300 hover:text-white">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M23 3a10.39 10.39 0 01-2.825.775A4.993 4.993 0 0022.3 1a9.96 9.96 0 01-3.142 1.2A4.986 4.986 0 0016.4 0a5 5 0 00-5 5.092c0 .39.046.773.133 1.144A14.19 14.19 0 011.67 3.15 5 5 0 003.297 8.5a4.932 4.932 0 01-2.267-.62v.062a5 5 0 004 4.9A4.934 4.934 0 01.96 13v.062a5 5 0 004 4.9A10 10 0 010 21a9.993 9.993 0 005.416 1.597A10.048 10.048 0 0023 3z"
          />
        </svg>
      </a>
    </div>
  );
};

export default SocialIcons;
