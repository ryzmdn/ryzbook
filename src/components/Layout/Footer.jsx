export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-labelledby="website-footer"
      className="border-t border-gray-300 dark:border-gray-700 py-6 text-center text-sm text-gray-600 dark:text-gray-300 sm:text-left"
    >
      <span id="website-footer" className="sr-only">
        Website footer
      </span>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="block sm:inline">
          &copy; {currentYear} Ryzmdn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
