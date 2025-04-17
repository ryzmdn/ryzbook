import { Svg } from "@/components/Optimizing/Svg";

export function NotFound() {
  return (
    <div className="col-span-full flex flex-col justify-center mt-2 rounded-lg text-center border border-dashed border-gray-400 dark:border-gray-600 px-6 py-10 box-shadow-2">
      <div className="flex justify-center items-center box-shadow-1 size-14 mx-auto rounded-full">
        <Svg
          width={36}
          height={36}
          draw={[
            "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
          ]}
          
          className="mx-auto"
        />
      </div>
      <div className="mt-4">
        <h5 className="text-lg text-gray-700 dark:text-gray-300 font-semibold text-shadow-2">
          The message will appear here
        </h5>
      </div>
    </div>
  );
}
