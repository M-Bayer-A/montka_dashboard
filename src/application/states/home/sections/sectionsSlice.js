import { createSlice } from "@reduxjs/toolkit";
import { getSectionsInfoUseCase } from "../../../useCases/home/sections/getSectionsInfoUseCase";

//
const initialState = {
  isLoading: false,
  searchInput: "",
  sectionsInfo: [],
};
//
export const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  // ==REDUCERS==
  reducers: {
    moveUp: (state, actions) => {
      const { id } = actions.payload;
      const index = state.sectionsInfo.findIndex((s) => s.id === id);
      if (index > 0) {
        const temp = state.sectionsInfo[index - 1];
        state.sectionsInfo[index - 1] = state.sectionsInfo[index];
        state.sectionsInfo[index] = temp;
      }
    },
    moveDown: (state, action) => {
      const { id } = action.payload;
      const index = state.sectionsInfo.findIndex(
        (section) => section.id === id
      );
      if (index < state.sectionsInfo.length - 1 && index !== -1) {
        const temp = state.sectionsInfo[index + 1];
        state.sectionsInfo[index + 1] = state.sectionsInfo[index];
        state.sectionsInfo[index] = temp;
      }
    },
  },
  // ==EXTRA REDUCERS==
  extraReducers(builder) {
    builder
      .addCase(getSectionsInfoUseCase.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSectionsInfoUseCase.fulfilled, (state, actions) => {
        state.isLoading = false;
        state.sectionsInfo = actions.payload.response;
      })
      .addCase(getSectionsInfoUseCase.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
//
export const { moveDown, moveUp } = sectionsSlice.actions;

export default sectionsSlice.reducer;
