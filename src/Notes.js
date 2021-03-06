import React, { useState } from "react";
import { v4 } from "uuid";
import "./styles.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const Notes = () => {
  const data = [
    {
      id: v4(),
      title: "Coding",
      description: "Solve React Excersises",
      tags: "Coding",
      pin: true
    },
    {
      id: v4(),
      title: "Reading",
      description: "Read EJS",
      tags: "Coding",
      pin: false
    }
  ];

  const [notes, setNotes] = useState(data);
  const [color, setColor] = useState("");
  const [pin, setPin] = useState(false);

  function addNoteHandler(event) {
    let tag = document.querySelector("#tags").value;

    event.preventDefault();
    var title1 = event.target[0].value;
    var description1 = event.target[1].value;

    if (title1 !== "" && description1 !== "") {
      setNotes([
        ...notes,
        {
          id: v4(),
          title: title1,
          description: description1,
          tags: tag,
          pin: pin
        }
      ]);
    }
  }

  const deleteNote = (taskID) => {
    setNotes(
      notes.filter((note) => {
        return note.id !== taskID;
      })
    );
  };

  function pinHandler() {
    setPin(!pin);
  }

  return (
    <div>
      <form
        onSubmit={addNoteHandler}
        style={{ marginTop: "40px", backgroundColor: color }}
      >
        <input
          style={{ backgroundColor: color }}
          type="text"
          placeholder="Title: "
        ></input>
        <textarea
          style={{ backgroundColor: color }}
          rows="5"
          placeholder="Description.."
        ></textarea>
        <div>
          <div>
            <select id="tags">
              <option value="Important">Important</option>
              <option value="Coding">Coding</option>
              <option value="Shopping List">Shopping List</option>
              <option value="Random">Others</option>
            </select>
            <div style={{ display: "flex", float: "left", marginLeft: "20px" }}>
              <div
                onClick={() => setColor("white")}
                style={{
                  border: "1px solid black",
                  width: "15px",
                  marginRight: "0.3rem",
                  height: "15px",
                  backgroundColor: "white",
                  cursor: "pointer",
                  borderRadius: "2rem"
                }}
              ></div>
              <div
                onClick={() => setColor("#F87171")}
                style={{
                  border: "1px solid black",
                  width: "15px",
                  marginRight: "0.3rem",
                  height: "15px",
                  backgroundColor: "#F87171",
                  cursor: "pointer",
                  borderRadius: "2rem"
                }}
              ></div>
              <div
                onClick={() => setColor("#34D399")}
                style={{
                  border: "1px solid black",
                  width: "15px",
                  height: "15px",
                  marginRight: "0.3rem",
                  backgroundColor: "#34D399",
                  cursor: "pointer",
                  borderRadius: "2rem"
                }}
              ></div>
              <div
                onClick={() => setColor("#F472B6")}
                style={{
                  width: "15px",
                  outline: "none",
                  border: "1px solid black",
                  height: "15px",
                  marginRight: "0.3rem",
                  backgroundColor: "#F472B6",
                  cursor: "pointer",
                  borderRadius: "2rem"
                }}
              ></div>
              <div
                onClick={() => setColor("#60A5FA")}
                style={{
                  width: "15px",
                  border: "1px solid black",
                  height: "15px",
                  backgroundColor: "#60A5FA",
                  cursor: "pointer",
                  borderRadius: "2rem"
                }}
              ></div>
            </div>
            <button className="btn">Add</button>
            <button type="button" className="btn" onClick={pinHandler}>
              {pin === true ? "Pinned" : "Pin"}
            </button>
          </div>
        </div>
      </form>

      <div>
        <div>
          <h2 style={{ marginTop: "50px" }}>Pinned Notes</h2>

          <div classNam="binding">
            {notes
              .filter((item) => item.pin === true)
              .map(({ title, description, id, tags }) => {
                return (
                  <div className="notesCard">
                    <h3>{title}</h3>
                    <em>Tag: {tags}</em>
                    <hr />
                    <p>{description}</p>
                    <IconButton>
                      <DeleteIcon onClick={() => deleteNote(id)} />
                    </IconButton>
                  </div>
                );
              })}
          </div>

          <h2>UnPinned Notes</h2>
          <div classNam="binding">
            {notes
              .filter((item) => item.pin === false)
              .map(({ title, description, id, tags }) => {
                return (
                  <div className="notesCard">
                    <h3>{title}</h3>
                    <em>Tag: {tags}</em>
                    <hr />
                    <p>{description}</p>
                    <IconButton>
                      <DeleteIcon onClick={() => deleteNote(id)} />
                    </IconButton>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notes;
