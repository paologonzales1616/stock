import { Dialog, DialogBackdrop, DialogPanel, Input } from "@headlessui/react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { closeSearchModal, selectSearchModalStatus } from "./searchModalSlice";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchModal() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const modalStatus = useAppSelector(selectSearchModalStatus);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault(); // Prevent the default browser behavior
        navigate(`/price/${searchTerm}`);
        setSearchTerm("");
        dispatch(closeSearchModal());
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [searchTerm]);

  return (
    <Dialog
      open={modalStatus}
      className="relative z-10"
      onClose={() => dispatch(closeSearchModal())}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-start justify-center p-4 text-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <Input
                type="text"
                placeholder="Search"
                name="search"
                autoFocus
                autoComplete="off"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={clsx(
                  "rounded w-full p-3 text-black placeholder:text-black",
                  "border-solid border-2 border-violet-800",
                  "outline-none"
                )}
              />
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6">
              <div className="flex mr-2">
                <div className="p-1 bg-gray-300 rounded">
                  <svg width="15" height="15" aria-label="Enter key" role="img">
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.2"
                    >
                      <path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path>
                    </g>
                  </svg>
                </div>
                <span className="pl-1 text-sm">to search</span>
              </div>
              <div className="flex mr-2">
                <div className="p-1 bg-gray-300 rounded">
                  <svg
                    width="15"
                    height="15"
                    aria-label="Escape key"
                    role="img"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.2"
                    >
                      <path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path>
                    </g>
                  </svg>
                </div>
                <span className="pl-1 text-sm">to close</span>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}

export default SearchModal;
