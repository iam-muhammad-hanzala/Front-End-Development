import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotesThunk, updateNotesThunk } from "../redux/notesThunk";

function AddNote({ editNoteData, setEditNoteData }) {
  const { loading: reduxNotesLoader } = useSelector((state) => state.notes);
  const [inputFields, setInputFields] = useState(null);

  const dispatch = useDispatch();

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

    const payload = {
      ...inputFields,
      favorite: false,
    };

    if (editNoteData) {
      const updatePayload = {
        ...editNoteData,
        ...inputFields,
      };
      dispatch(updateNotesThunk(updatePayload));
      setEditNoteData(null);
    } else {
      await dispatch(addNotesThunk(payload));
    }

    setInputFields({
      title: "",
      content: "",
    });
  };

  return (
    <div className="section form-container">
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
        <button className="btn green" type="submit" disabled={reduxNotesLoader}>
          {editNoteData ? "Update" : "Create"} Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;
