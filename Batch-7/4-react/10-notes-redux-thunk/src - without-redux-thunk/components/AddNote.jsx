import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import CustomSpinner from "./CustomSpinner/CustomSpinner";

function AddNote({ getNotes = () => {}, editNoteData, setEditNoteData }) {
  const [inputFields, setInputFields] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (editNoteData) {
      setInputFields({
        title: editNoteData?.title,
        content: editNoteData?.content,
      });
    }
  }, [editNoteData]);

  const onChangeCommonInputStateHandler = (event) => {
    event.preventDefault();
    const currentElement = event.target;

    //{title:"asdasdasd",content:"asdasd"}
    setInputFields({
      ...inputFields,
      [currentElement.name]: currentElement.value,
    });
  };

  const addNoteHandler = async (event) => {
    event.preventDefault();

    if (!inputFields?.title || !inputFields?.content) {
      alert("please fill the input values");
      return;
    }

    setLoader(true);

    const payload = {
      ...inputFields,
      favorite: false,
    };

    if (editNoteData) {
      const documentReference = await doc(db, "notes", editNoteData?.id);

      await updateDoc(documentReference, {
        ...editNoteData,
        ...inputFields,
      });

      setEditNoteData(null);
    } else {
      try {
        await addDoc(collection(db, "notes"), payload);
      } catch (error) {
        console.error(error);
      }
    }

    await getNotes();
    setInputFields({
      title: "",
      content: "",
    });
    setLoader(false);
  };

  return (
    <div className="section form-container">
      <CustomSpinner loading={loader} />
      <form className="white" onSubmit={addNoteHandler}>
        <h5 className="grey-text text-darken-3">
          {editNoteData ? "Update" : "Create"} Note
        </h5>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="note_title"
              type="text"
              className="validate"
              name="title"
              onChange={onChangeCommonInputStateHandler}
              value={inputFields?.title}
            />
            <label className="active">Title</label>
          </div>
        </div>

        <div className="input-field col s12">
          <textarea
            id="note_content"
            className="materialize-textarea"
            name="content"
            onChange={onChangeCommonInputStateHandler}
            value={inputFields?.content}
          ></textarea>
          <label>Content</label>
        </div>
        <button className="btn green" type="submit" disabled={loader}>
          {editNoteData ? "Update" : "Create"} Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;
