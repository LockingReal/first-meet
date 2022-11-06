import type { JSX } from "solid-js/jsx-runtime";

export function Skill(props: { name: number | boolean | Node | JSX.ArrayElement | JSX.FunctionElement | (string & {}) | null | undefined; }) {
  return (
    <span class="mr-2 my-1 rounded-full border px-4 text-sm py-2 font-medium bg-gray-200">
      {props.name}
    </span>
  );
}
