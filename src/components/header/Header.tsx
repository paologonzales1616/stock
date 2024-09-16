import clsx from "clsx";
import companyLogo from "../../assets/company-logo.png";
import styles from "./Header.module.scss";
import { useAppDispatch } from "../../app/hooks";
import { openSearchModal } from "../searchModal/searchModalSlice";
import { useEffect } from "react";

function Header() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault(); // Prevent the default browser behavior
        dispatch(openSearchModal());
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header
      className={clsx(
        styles.header,
        "flex items-center justify-between px-4 py-3"
      )}
    >
      <div>
        <img className="h-8" src={companyLogo} alt="company-logo" />
      </div>
      <div>
        <div className="w-full lg:px-12 xl:px-12">
          <div className="relative">
            <button
              onClick={() => dispatch(openSearchModal())}
              type="button"
              className="transition-colors duration-100 ease-in-out text-white/40 py-2 pr-24 pl-10 block w-full appearance-none leading-normal border border-white/40 rounded-lg text-left select-none truncate font-medium ring-4 hover:text-white hover:border-white ring-transparent hover:ring-orange-500 hover:ring-opacity-25"
            >
              Search <span className="hidden sm:inline">Stocks</span>
            </button>
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center">
              <svg
                className="fill-current pointer-events-none hover:text-white text-white/40  w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 pr-4 flex items-center">
              <div className="flex items-center bg-violet-800 rounded px-2 py-1">
                <svg className="text-white inline-block" width="15" height="15">
                  <path
                    d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953"
                    stroke-width="1.2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="square"
                  />
                </svg>
                <span className="text-white text-xs ml-1">K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="block text-gray-400 hover:text-white focus:text-white focus:outline-none"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
