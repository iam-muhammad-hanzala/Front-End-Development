import NotesListing from "../components/NotesListing";
import AddNote from "../components/AddNote";
import { useState } from "react";
import CustomSpinner from "../components/CustomSpinner/CustomSpinner";
import { useSelector } from "react-redux";

function HomePage() {
  const [editNoteData, setEditNoteData] = useState(null);
  const { loading: reduxNotesLoader } = useSelector((state) => state.notes);
  return (
    <div className="container">
      <CustomSpinner loading={reduxNotesLoader} />
      <div className="row center-align">
        <div className="col s7">
          <AddNote
            editNoteData={editNoteData}
            setEditNoteData={setEditNoteData}
          />
        </div>
        <div className="col s5">
          <NotesListing setEditNoteData={setEditNoteData} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
