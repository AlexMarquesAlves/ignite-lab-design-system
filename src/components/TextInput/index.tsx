import { clsx } from "clsx";

export type TextInputProps = {};

export const TextInput = ({}: TextInputProps) => {
  return (
    <input
      className={clsx(
        `py-4 px-3 rounded bg-gray-800 text-gray-100 text-xs placeholder:text-gray-400 w-full`,
        {},
      )}
    />
  );
};
