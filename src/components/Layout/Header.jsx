import { Button } from "@/components/Button/Button";

export function Header() {
  return (
    <header aria-labelledby="website-header" className="mx-auto w-full max-w-2xl bg-transparent px-3 py-16">
      <span id="website-header" className="sr-only">Website Header</span>
      <div className="mb-8 flex justify-center">
        <div className="relative rounded-full px-3.5 py-1 text-sm/6 inline-flex items-center bg-pink-50 dark:bg-pink-400/10 font-medium text-pink-700 dark:text-pink-400 ring-1 ring-pink-700/10 dark:ring-pink-400/20 ring-inset">
          This guestbook is open source only on GitHub.{" "}
          <Button href="https://github.com/ryzmdn/ryzbook" variant="text" aria-label="Visit github repository" defaultStyle={false} shadow={false} className="text-pink-900 dark:text-pink-600 font-semibold">
            <span aria-hidden="true" className="absolute inset-0" /> Visit now <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-balance bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent sm:text-6xl">
          Send any message here anonymously
        </h1>
        <p className="mt-8 font-medium text-pretty text-gray-700 dark:text-gray-300 sm:text-base/8">
          Leave any message here. It can be anything like appreciation, jokes, information, quotes and others anonymously or with your name.
        </p>
      </div>
    </header>
  );
}
