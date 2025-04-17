import { Button } from "@/components/Buttons/Button";
import { Svg } from "@/components/Optimizing/Svg";

export function Header() {
  return (
    <header
      aria-labelledby="website-header"
      className="mx-auto w-full max-w-2xl bg-transparent pt-16 px-3 pb-5"
    >
      <span id="website-header" className="sr-only">
        Website Header
      </span>
      <div className="relative flex justify-center items-center gap-x-2 mt-8 mb-6 w-max mx-auto bg-pink-600/10 dark:bg-pink-500/10 px-3 py-1 text-sm/6 font-medium text-pink-600 dark:text-pink-400 ring-1 ring-pink-600/10 hover:ring-pink-600/20 dark:ring-pink-500/20 dark:hover:ring-pink-500/30 ring-inset rounded-full">
        <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Open Source code is only available on GitHub.
        </div>
        <Button
          variant="default"
          href="https://github.com/exeriz/ryzdev"
          className="font-medium text-pink-500 dark:text-violet-500"
        >
          <span aria-hidden="true" className="absolute inset-0" />
          <Svg
            variant="outline"
            width={12}
            height={12}
            draw={[
              "M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25",
            ]}
            className="text-violet-500"
          />
        </Button>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight text-balance bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent py-1 sm:text-6xl">
          Send any Message here Anonymously
        </h1>
        <p className="mt-4 font-medium text-pretty text-gray-700 dark:text-gray-300 sm:text-base/8">
          Leave any message here. It can be anything like appreciation, jokes,
          information, quotes and others anonymously or with your name.
        </p>
      </div>
    </header>
  );
}
