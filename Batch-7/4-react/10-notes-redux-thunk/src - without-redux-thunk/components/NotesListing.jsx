import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebaseConfig";
import CustomSpinner from "./CustomSpinner/CustomSpinner";

function NotesListing({ notesData, getNotes, setEditNoteData }) {
  const [dropdownState, setDropdownState] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getNotes();
  }, []);

  const favoriteClickHandler = async (singleNote) => {
    // console.log(singleNote, "singleNote");
    setLoader(true);
    const documentReference = await doc(db, "notes", singleNote?.id);

    await updateDoc(documentReference, {
      ...singleNote,
      favorite: !singleNote?.favorite,
    });

    await getNotes();

    setLoader(false);
  };

  const deleteNoteHandler = async (singleNote) => {
    setLoader(true);
    const documentReference = await doc(db, "notes", singleNote?.id);

    await deleteDoc(documentReference);

    await getNotes();

    setLoader(false);
  };

  const onChangeDropdown = (event) => {
    setDropdownState(event.target.value);
  };

  const filterNotesData =
    dropdownState === "true"
      ? notesData?.filter((singleNote) => singleNote.favorite === true)
      : notesData;

  return (
    <>
      <select class="browser-default mt-60" onChange={onChangeDropdown}>
        <option value="" disabled selected>
          Select Favorite Notes
        </option>
        <option value="false">Show All Notes</option>
        <option value="true">Only Favorite Notes</option>
      </select>

      <div className="notesList">
        <CustomSpinner loading={loader} />
        {filterNotesData?.map((singleNote) => {
          return (
            <div className="note  white">
              <div className="right-align">
                <i
                  className="material-icons red-text"
                  style={{ cursor: "pointer" }}
                  onClick={() => favoriteClickHandler(singleNote)}
                >
                  {/* favorite */}
                  {singleNote?.favorite ? "favorite" : "favorite_border"}
                </i>
                <i
                  className="material-icons"
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteNoteHandler(singleNote)}
                >
                  delete
                </i>
              </div>
              <Link to="">
                <h5 className="black-text"> {singleNote?.title}</h5>
              </Link>
              <p className="truncate">{singleNote?.content}</p>
              <div className="right-align">
                <Link to="">
                  <i
                    className="material-icons black-text"
                    style={{ cursor: "pointer" }}
                    onClick={() => setEditNoteData(singleNote)}
                  >
                    edit
                  </i>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NotesListing;
