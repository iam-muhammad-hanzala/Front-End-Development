import { createSlice } from "@reduxjs/toolkit";
import {
  addFavoriteNoteById,
  addNotesThunk,
  deleteNoteById,
  getNotesThunkMethod,
  updateNotesThunk,
} from "./notesThunk";

const initialState = {
  notes: [],
  loading: false,
};

const notesSlice = createSlice({
  name: "NotesSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getNotesThunkMethod.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNotesThunkMethod.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.notes = payload;
      })
      .addCase(getNotesThunkMethod.rejected, (state) => {
        state.loading = false;
      })

      //Favorite Thunk Method
      .addCase(addFavoriteNoteById.pending, (state) => {
        state.loading = true;
      })
      .addCase(addFavoriteNoteById.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addFavoriteNoteById.rejected, (state) => {
        state.loading = false;
      })

      //Delete Thunk Method
      .addCase(deleteNoteById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteNoteById.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(deleteNoteById.rejected, (state) => {
        state.loading = false;
      })

      //Add Note Thunk Method
      .addCase(addNotesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNotesThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(addNotesThunk.rejected, (state) => {
        state.loading = false;
      })

      //Update Note Thunk Method
      .addCase(updateNotesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateNotesThunk.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(updateNotesThunk.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default notesSlice.reducer;
