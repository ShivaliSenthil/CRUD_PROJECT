// import { useState, useEffect } from "react";
// import api from "../api";
// import Note from "../components/Note"
// import "../styles/Home.css"

// function Home() {
//     const [notes, setNotes] = useState([]);
//     const [content, setContent] = useState("");
//     const [title, setTitle] = useState("");

//     useEffect(() => {
//         getNotes();
//     }, []);

//     const getNotes = () => {
//         api
//             .get("/api/notes/")
//             .then((res) => res.data)
//             .then((data) => {
//                 setNotes(data);
//                 console.log(data);
//             })
//             .catch((err) => alert(err));
//     };

//     const deleteNote = (id) => {
//         api
//             .delete(`/api/notes/delete/${id}/`)
//             .then((res) => {
//                 if (res.status === 204) alert("Note deleted!");
//                 else alert("Failed to delete note.");
//                 getNotes();
//             })
//             .catch((error) => alert(error));
//     };

//     const createNote = (e) => {
//         e.preventDefault();
//         api
//             .post("/api/notes/", { content, title })
//             .then((res) => {
//                 if (res.status === 201) alert("Note created!");
//                 else alert("Failed to make note.");
//                 getNotes();
//             })
//             .catch((err) => alert(err));
//     };

//     return (
//         <div>
//             <div>
//                 <h2>Notes</h2>
//                 {notes.map((note) => (
//                     <Note note={note} onDelete={deleteNote} key={note.id} />
//                 ))}
//             </div>
//             <h2>Create a Note</h2>
//             <form onSubmit={createNote}>
//                 <label htmlFor="title">Title:</label>
//                 <br />
//                 <input
//                     type="text"
//                     id="title"
//                     name="title"
//                     required
//                     onChange={(e) => setTitle(e.target.value)}
//                     value={title}
//                 />
//                 <label htmlFor="content">Content:</label>
//                 <br />
//                 <textarea
//                     id="content"
//                     name="content"
//                     required
//                     value={content}
//                     onChange={(e) => setContent(e.target.value)}
//                 ></textarea>
//                 <br />
//                 <input type="submit" value="Submit"></input>
//             </form>
//         </div>
//     );
// }

// export default Home;


import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";
import LogoutButton from "./LogoutButton";
function Home() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  // Function to get JWT token from localStorage
  const getAuthToken = () => {
    return localStorage.getItem("access_token"); // Retrieve the token from localStorage
  };

  // Function to fetch all notes
  const getNotes = () => {
    api
      .get("/api/notes/", {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`, // Include JWT token in headers
        },
      })
      .then((res) => res.data)
      .then((data) => {
        setNotes(data);
        console.log(data); // For debugging
      })
      .catch((err) => {
        alert(err.response ? err.response.data.detail : "Failed to load notes");
      });
  };

  // Function to delete a note
  const deleteNote = (id) => {
    api
      .delete(`/api/notes/delete/${id}/`, {
        headers: {
          Authorization: `Bearer ${getAuthToken()}`, // Include JWT token in headers
        },
      })
      .then((res) => {
        if (res.status === 204) {
          alert("Note deleted!");
          getNotes(); // Refresh notes list
        } else {
          alert("Failed to delete note.");
        }
      })
      .catch((error) => alert(error));
  };

  // Function to create a note
  const createNote = (e) => {
    e.preventDefault();
    api
      .post(
        "/api/notes/",
        { content, title }, // Do not send 'author' field; Django will handle it
        {
          headers: {
            Authorization: `Bearer ${getAuthToken()}`, // Include JWT token in headers
          },
        }
      )
      .then((res) => {
        if (res.status === 201) {
          alert("Note created!");
          getNotes(); // Refresh notes list
        } else {
          alert("Failed to make note.");
        }
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          alert(`Error: ${err.response.data.detail || "Something went wrong!"}`);
        } else {
          alert("Network error: Please try again later.");
        }
      });
  };

  return (
    <div>
      <div>
        <h2>Notes</h2>
        {notes.map((note) => (
          <Note note={note} onDelete={deleteNote} key={note.id} />
        ))}
      </div>
      <h2>Create a Note</h2>
      <form onSubmit={createNote}>
        <label htmlFor="title">Title:</label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        
        <label htmlFor="content">Content:</label>
        <br />
        <textarea
          id="content"
          name="content"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <LogoutButton />
    </div>
  );
}

export default Home;
