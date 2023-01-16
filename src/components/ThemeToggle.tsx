import { createEffect, createSignal } from "solid-js";
import clsx from "clsx";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

type theme = "light" | "dark";
const themes: theme[] = ["light", "dark"];

/** @jsxImportSource solid-js */
export default function ThemeToggle() {
  const [theme, setTheme] = createSignal(
    (function () {
      if (import.meta.env.SSR) {
        return undefined;
      }
      if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
        return localStorage.getItem("theme");
      }
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    })()
  );

  const toggleTheme = () => {
    const t = theme() === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  createEffect(() => {
    const root = document.documentElement;
    if (theme() === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  });

  return (
    <div className="inline-flex items-center p-[1px] rounded-3xl bg-orange-300 dark:bg-zinc-600">
      {themes.map((t) => {
        const checked = t === theme();
        return (
          <button
            key={t}
            className={clsx("cursor-pointer rounded-3xl p-2 text-black", checked ? "bg-white" : "")}
            onClick={toggleTheme}
          >
            {t === "light" ? (
              <Sun
                className="h-4 w-4"
                primaryClass="fill-amber-400 dark:fill-slate-800"
                secondaryClass="fill-orange-400 dark:fill-slate-800"
              />
            ) : (
              <Moon
                className="h-4 w-4"
                primaryClass="fill-slate-100 dark:fill-indigo-500"
                secondaryClass="fill-slate-100 dark:fill-blue-800"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
