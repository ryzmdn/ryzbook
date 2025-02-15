export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-labelledby="website-footer"
      className="border-t border-zinc-300 py-8 text-center text-sm text-gray-600 sm:text-left"
    >
      <span id="website-footer" className="sr-only">
        Website footer
      </span>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="block sm:inline text-shadow-2">
          &copy; {currentYear} Ryzmdn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
