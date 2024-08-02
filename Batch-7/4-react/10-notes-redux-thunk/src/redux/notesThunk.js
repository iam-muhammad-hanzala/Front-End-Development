import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebaseConfig";

export const getNotesThunkMethod = createAsyncThunk("getNotes", async () => {
  try {
    let notes = null;
    await getDocs(collection(db, "notes")).then((querySnapshot) => {
      const notesDataResponse = querySnapshot.docs?.map((singleDocument) => {
        return {
          id: singleDocument.id,
          ...singleDocument.data(),
        };
      });
      notes = notesDataResponse;
    });

    return notes;
  } catch (error) {
    console.error(error);
  }
});

export const addFavoriteNoteById = createAsyncThunk(
  "favoriteNotes",
  async (singleNote, { dispatch }) => {
    try {
      const documentReference = await doc(db, "notes", singleNote?.id);

      await updateDoc(documentReference, {
        ...singleNote,
        favorite: !singleNote?.favorite,
      });

      await dispatch(getNotesThunkMethod());
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteNoteById = createAsyncThunk(
  "deleteNotes",
  async (singleNote, { dispatch }) => {
    try {
      const documentReference = await doc(db, "notes", singleNote?.id);
      await deleteDoc(documentReference);

      await dispatch(getNotesThunkMethod());
    } catch (error) {
      console.error(error);
    }
  }
);

export const addNotesThunk = createAsyncThunk(
  "addNotes",
  async (payload, { dispatch }) => {
    try {
      await addDoc(collection(db, "notes"), payload);
      await dispatch(getNotesThunkMethod());
    } catch (error) {
      console.error(error);
    }
  }
);

export const updateNotesThunk = createAsyncThunk(
  "updateNotes",
  async (updatePayload, { dispatch }) => {
    try {
      const documentReference = await doc(db, "notes", updatePayload?.id);
      await updateDoc(documentReference, updatePayload);
      await dispatch(getNotesThunkMethod());
    } catch (error) {
      console.error(error);
    }
  }
);
