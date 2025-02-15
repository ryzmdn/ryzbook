import { Button } from "@/components/Button/Button";

export function Header() {
  return (
    <header aria-labelledby="website-header" className="mx-auto w-full max-w-2xl bg-transparent px-3 py-16">
      <span id="website-header" className="sr-only">Website Header</span>
      <div className="mb-8 flex justify-center">
        <div className="box-shadow-1 relative bg-zinc-200 dark:bg-zinc-800 rounded-full px-3.5 py-1.5 text-xs/6 text-gray-600 text-shadow-2 sm:text-sm/6">
          This guestbook is open source only on GitHub.{" "}
          <Button href="https://github.com/ryzmdn/ryzbook" variant="text" aria-label="Visit github repository" defaultStyle={false} shadow={false} className="font-semibold">
            <span aria-hidden="true" className="absolute inset-0" /> Visit now <span aria-hidden="true">&rarr;</span>
          </Button>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-shadow-3 text-5xl font-bold tracking-tight text-balance text-gray-800 dark:text-gray-200 sm:text-6xl">
          Send any message here anonymously
        </h1>
        <p className="text-shadow-2 mt-8 font-medium text-pretty text-gray-600 sm:text-lg/8">
          Leave any message here. It can be anything like appreciation, jokes, information, quotes and others anonymously or with your name.
        </p>
      </div>
    </header>
  );
}
