import { createAppSlice } from "../../app/createAppSlice";

export interface SearchModalSliceState {
  isOpen: boolean;
}

const initialState: SearchModalSliceState = {
  isOpen: false,
};

export const searchModalSlice = createAppSlice({
  name: "searchModal",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
  selectors: {
    selectSearchModalStatus: (modal) => modal.isOpen,
  },
});

export const { selectSearchModalStatus } = searchModalSlice.selectors;
export const {
  open: openSearchModal,
  close: closeSearchModal,
  toggle: toggleSearchModal,
} = searchModalSlice.actions;
