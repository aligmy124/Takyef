function FixedCallButton() {
  return (
    <a
      href="tel:+966566789423"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a2 2 0 011.79 1.11l1.2 2.39a2 2 0 01-.45 2.39L9.27 10.6a11.042 11.042 0 005.13 5.13l1.31-1.35a2 2 0 012.39-.45l2.39 1.2A2 2 0 0119 18.72V22a2 2 0 01-2 2h-1C8.28 24 0 15.72 0 5a2 2 0 012-2h1z"
        />
      </svg>
      <span className="font-bold">اتصل الآن: 0566789423</span>
    </a>
  );
}

export default FixedCallButton;
