// import { useState, useEffect } from "react";
// import api from "../api";
// import Note from "../components/Note";
// import "../styles/Home.css";
// import LogoutButton from "./LogoutButton";
// function Home() {
//   const [notes, setNotes] = useState([]);
//   const [content, setContent] = useState("");
//   const [title, setTitle] = useState("");

//   useEffect(() => {
//     getNotes();
//   }, []);

//   // Function to get JWT token from localStorage
//   const getAuthToken = () => {
//     return localStorage.getItem("access_token"); // Retrieve the token from localStorage
//   };

//   // Function to fetch all notes
//   const getNotes = () => {
//     api
//       .get("/api/notes/", {
//         headers: {
//           Authorization: `Bearer ${getAuthToken()}`, // Include JWT token in headers
//         },
//       })
//       .then((res) => res.data)
//       .then((data) => {
//         setNotes(data);
//         console.log(data); // For debugging
//       })
//       .catch((err) => {
//         alert(err.response ? err.response.data.detail : "Failed to load notes");
//       });
//   };

//   // Function to delete a note
//   const deleteNote = (id) => {
//     api
//       .delete(`/api/notes/delete/${id}/`, {
//         headers: {
//           Authorization: `Bearer ${getAuthToken()}`, // Include JWT token in headers
//         },
//       })
//       .then((res) => {
//         if (res.status === 204) {
//           alert("Note deleted!");
//           getNotes(); // Refresh notes list
//         } else {
//           alert("Failed to delete note.");
//         }
//       })
//       .catch((error) => alert(error));
//   };

//   // Function to create a note
//   const createNote = (e) => {
//     e.preventDefault();
//     api
//       .post(
//         "/api/notes/",
//         { content, title }, // Do not send 'author' field; Django will handle it
//         {
//           headers: {
//             Authorization: `Bearer ${getAuthToken()}`, // Include JWT token in headers
//           },
//         }
//       )
//       .then((res) => {
//         if (res.status === 201) {
//           alert("Note created!");
//           getNotes(); // Refresh notes list
//         } else {
//           alert("Failed to make note.");
//         }
//       })
//       .catch((err) => {
//         if (err.response && err.response.data) {
//           alert(`Error: ${err.response.data.detail || "Something went wrong!"}`);
//         } else {
//           alert("Network error: Please try again later.");
//         }
//       });
//   };

//   return (
//     <div>
//       <div>
//         <h2>Notes</h2>
//         {notes.map((note) => (
//           <Note note={note} onDelete={deleteNote} key={note.id} />
//         ))}
//       </div>
//       <h2>Create a Note</h2>
//       <form onSubmit={createNote}>
//         <label htmlFor="title">Title:</label>
//         <br />
//         <input
//           type="text"
//           id="title"
//           name="title"
//           required
//           onChange={(e) => setTitle(e.target.value)}
//           value={title}
//         />
        
//         <label htmlFor="content">Content:</label>
//         <br />
//         <textarea
//           id="content"
//           name="content"
//           required
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//         ></textarea>
//         <br />
//         <input type="submit" value="Submit" />
//         <div id="Logout">
//       <LogoutButton />
//       </div>
//       </form>
      
//     </div>
//   );
// }

// export default Home;
// 1st working
// import { useState, useEffect } from "react";
// import api from "../api";
// import Note from "../components/Note";
// import "../styles/Home.css";
// import LogoutButton from "./LogoutButton";

// function Home() {
//   const [notes, setNotes] = useState([]);
//   const [content, setContent] = useState("");
//   const [title, setTitle] = useState("");
//   const [showForm, setShowForm] = useState(false); // Controls form visibility

//   useEffect(() => {
//     getNotes();
//   }, []);

//   const getAuthToken = () => {
//     return localStorage.getItem("access_token");
//   };

//   const getNotes = () => {
//     api
//       .get("/api/notes/", {
//         headers: {
//           Authorization: `Bearer ${getAuthToken()}`,
//         },
//       })
//       .then((res) => setNotes(res.data))
//       .catch((err) => {
//         alert(err.response ? err.response.data.detail : "Failed to load notes");
//       });
//   };

//   const deleteNote = (id) => {
//     api
//       .delete(`/api/notes/delete/${id}/`, {
//         headers: {
//           Authorization: `Bearer ${getAuthToken()}`,
//         },
//       })
//       .then((res) => {
//         if (res.status === 204) {
//           alert("Note deleted!");
//           getNotes();
//         } else {
//           alert("Failed to delete note.");
//         }
//       })
//       .catch((error) => alert(error));
//   };

//   const createNote = (e) => {
//     e.preventDefault();
//     api
//       .post(
//         "/api/notes/",
//         { content, title },
//         {
//           headers: {
//             Authorization: `Bearer ${getAuthToken()}`,
//           },
//         }
//       )
//       .then((res) => {
//         if (res.status === 201) {
//           alert("Note created!");
//           getNotes();
//           setTitle(""); // Clear fields after submission
//           setContent("");
//           setShowForm(false); // Hide form after submission
//         } else {
//           alert("Failed to make note.");
//         }
//       })
//       .catch((err) => {
//         alert(err.response?.data?.detail || "Something went wrong!");
//       });
//   };

//   return (
//     <div>
//       <h2>Notes</h2>
//       {notes.map((note) => (
//         <Note note={note} onDelete={deleteNote} key={note.id} />
//       ))}

//       {/* Button to show the form */}
//       {!showForm && (
//         <button onClick={() => setShowForm(true)} className="add-note-button">
//           Add Note
//         </button>
//       )}

//       {/* Form only appears when showForm is true */}
//       {showForm && (
//         <form onSubmit={createNote}>
//           <label htmlFor="title">Title:</label>
//           <br />
//           <input
//             type="text"
//             id="title"
//             name="title"
//             required
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//           />

//           <label htmlFor="content">Content:</label>
//           <br />
//           <textarea
//             id="content"
//             name="content"
//             required
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           ></textarea>
//           <br />
//           <input type="submit" value="Submit" />
//         </form>
//       )}

//       <div id="Logout">
//         <LogoutButton />
//       </div>
//     </div>
//   );
// }

//  export default Home;
// 2nd
// import React, { useState } from "react";
// import Note from "../components/Note";
// import LogoutButton from "../pages/LogoutButton"; // Import LogoutButton

// function Home() {
//     const [notes, setNotes] = useState([
//         { id: 1, title: "Sample Note", content: "This is a sample note", created_at: new Date() },
//     ]);

//     const [isAdding, setIsAdding] = useState(false);
//     const [newTitle, setNewTitle] = useState("");
//     const [newContent, setNewContent] = useState("");

//     const handleDelete = (id) => {
//         setNotes(notes.filter(note => note.id !== id));
//     };

//     const handleEdit = (id, newTitle, newContent) => {
//         setNotes(notes.map(note =>
//             note.id === id ? { ...note, title: newTitle, content: newContent } : note
//         ));
//     };

//     const handleAddNote = () => {
//         if (newTitle.trim() && newContent.trim()) {
//             const newNote = {
//                 id: Date.now(),
//                 title: newTitle,
//                 content: newContent,
//                 created_at: new Date(),
//             };
//             setNotes([...notes, newNote]);
//             setNewTitle("");
//             setNewContent("");
//             setIsAdding(false); // Hide form after adding
//         }
//     };

//     return (
//         <div>
//             {/* Logout Button at Top-Right */}
//             <div className="logout-container">
//                 <LogoutButton />
//             </div>

//             <h2>Notes</h2>

//             {/* "Add Note" Button */}
//             {!isAdding && (
//                 <button className="add-button" onClick={() => setIsAdding(true)}>
//                     Add Note
//                 </button>
//             )}

//             {/* Add Note Form (Appears only when "Add Note" is clicked) */}
//             {isAdding && (
//                 <div className="note-form">
//                     <input
//                         type="text"
//                         placeholder="Title"
//                         value={newTitle}
//                         onChange={(e) => setNewTitle(e.target.value)}
//                     />
//                     <textarea
//                         placeholder="Content"
//                         value={newContent}
//                         onChange={(e) => setNewContent(e.target.value)}
//                     />
//                     <button className="save-button" onClick={handleAddNote}>
//                         Save
//                     </button>
//                 </div>
//             )}

//             {/* Display Notes */}
//             {notes.map(note => (
//                 <Note key={note.id} note={note} onDelete={handleDelete} onEdit={handleEdit} />
//             ))}
//         </div>
//     );
// }

// export default Home;
//update working
// import React, { useState } from "react";
// import Note from "../components/Note";
// import LogoutButton from "../pages/LogoutButton"; // Import LogoutButton

// function Home() {
//     const [notes, setNotes] = useState([
//         { id: 1, title: "Sample Note", content: "This is a sample note", created_at: new Date() },
//     ]);

//     const [isAdding, setIsAdding] = useState(false);
//     const [editingId, setEditingId] = useState(null);
//     const [title, setTitle] = useState("");
//     const [content, setContent] = useState("");

//     const handleDelete = (id) => {
//         setNotes(notes.filter(note => note.id !== id));
//     };

//     const handleEdit = (note) => {
//         setEditingId(note.id);
//         setTitle(note.title);
//         setContent(note.content);
//     };

//     const handleSave = () => {
//         if (title.trim() && content.trim()) {
//             if (editingId) {
//                 // Update existing note
//                 setNotes(notes.map(note =>
//                     note.id === editingId ? { ...note, title, content } : note
//                 ));
//             } else {
//                 // Add new note
//                 const newNote = {
//                     id: Date.now(),
//                     title,
//                     content,
//                     created_at: new Date(),
//                 };
//                 setNotes([...notes, newNote]);
//             }
//             setTitle("");
//             setContent("");
//             setEditingId(null);
//             setIsAdding(false);
//         }
//     };

//     return (
//         <div className="container">
//             {/* Logout Button at Top-Right */}
//             <div className="logout-container">
//                 <LogoutButton />
//             </div>

//             <h2>Notes</h2>

//             {/* "Add Note" Button */}
//             {!isAdding && !editingId && (
//                 <button className="add-button" onClick={() => setIsAdding(true)}>
//                     Add Note
//                 </button>
//             )}

//             {/* Add/Edit Note Form */}
//             {(isAdding || editingId) && (
//                 <div className="note-form">
//                     <input
//                         type="text"
//                         placeholder="Title"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />
//                     <textarea
//                         placeholder="Content"
//                         value={content}
//                         onChange={(e) => setContent(e.target.value)}
//                     />
//                     <button className="save-button" onClick={handleSave}>
//                         {editingId ? "Update Note" : "Save"}
//                     </button>
//                 </div>
//             )}

//             {/* Display Notes */}
//             <div className="notes-section">
//                 {notes.map(note => (
//                     <Note key={note.id} note={note} onDelete={handleDelete} onEdit={handleEdit} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Home;
// wrong
// import React, { useState ,useEffect  } from "react";
// import api from "../api";
// import Note from "../components/Note";
// import "../styles/Home.css";
// import LogoutButton from "../pages/LogoutButton"; // Import LogoutButton

// function Home() {
//     const [notes, setNotes] = useState([]);
//     const [isAdding, setIsAdding] = useState(false);
//     const [editingId, setEditingId] = useState(null);
//     const [title, setTitle] = useState("");
//     const [content, setContent] = useState("");
//     const [showForm, setShowForm] = useState(false);
//     useEffect(() => {
//       getNotes();
//     }, []);
  
//     const getAuthToken = () => {
//       return localStorage.getItem("access_token");
//     };
//     const getNotes = () => {
//       api
//         .get("/api/notes/", {
//           headers: {
//             Authorization: `Bearer ${getAuthToken()}`,
//           },
//         })
//         .then((res) => setNotes(res.data))
//         .catch((err) => {
//           alert(err.response ? err.response.data.detail : "Failed to load notes");
//         });
//     };

//      const deleteNote = (id) => {
//     api
//       .delete(`/api/notes/delete/${id}/`, {
//         headers: {
//           Authorization: `Bearer ${getAuthToken()}`,
//         },
//       })
//       .then((res) => {
//         if (res.status === 204) {
//           alert("Note deleted!");
//           getNotes();
//         } else {
//           alert("Failed to delete note.");
//         }
//       })
//       .catch((error) => alert(error));
//   };
    
//     const createNote = (e) => {
//     e.preventDefault();
//     api
//       .post(
//         "/api/notes/",
//         { content, title },
//         {
//           headers: {
//             Authorization: `Bearer ${getAuthToken()}`,
//           },
//         }
//       )
//       .then((res) => {
//         if (res.status === 201) {
//           alert("Note created!");
//           getNotes();
//           setTitle(""); // Clear fields after submission
//           setContent("");
//           setShowForm(false); // Hide form after submission
//         } else {
//           alert("Failed to make note.");
//         }
//       })
//       .catch((err) => {
//         alert(err.response?.data?.detail || "Something went wrong!");
//       });
//   };
//     const handleEdit = (note) => {
//         setEditingId(note.id);
//         setTitle(note.title);
//         setContent(note.content);
//     };

//     const handleSave = () => {
//         if (title.trim() && content.trim()) {
//             if (editingId) {
//                 // Update existing note
//                 setNotes(notes.map(note =>
//                     note.id === editingId ? { ...note, title, content } : note
//                 ));
//             } else {
//                 // Add new note
//                 const newNote = {
//                     id: Date.now(),
//                     title,
//                     content,
//                     created_at: new Date(),
//                 };
//                 setNotes([...notes, newNote]);
//             }
//             setTitle("");
//             setContent("");
//             setEditingId(null);
//             setIsAdding(false);
//         }
//     };

//     return (
//         <div className="container">
//             {/* Logout Button at Top-Right */}
//             <div className="logout-container">
//                 <LogoutButton />
//             </div>

//             <h2>Notes</h2>
//             {notes.map((note) => (
//         <Note note={note} onDelete={deleteNote} key={note.id} />
//       ))}
            
//        {/* Button to show the form */}
//        {!showForm && (
//         <button onClick={() => setShowForm(true)} className="add-note-button">
//           Add Note
//         </button>
//       )}
//       {/* Form only appears when showForm is true */}
//        {showForm && (
//         <form onSubmit={createNote}>
//           <label htmlFor="title">Title:</label>
//           <br />
//           <input
//             type="text"
//             id="title"
//             name="title"
//             required
//             onChange={(e) => setTitle(e.target.value)}
//             value={title}
//           />
//            //           <label htmlFor="content">Content:</label>
//            <br />
//            <textarea
//             id="content"
//             name="content"
//             required
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//           ></textarea>
//           <br />
//           <input type="submit" value="Submit" />
//         </form>
//       )}

//             {/* "Add Note" Button */}
//             {!isAdding && !editingId && (
//                 <button className="add-button" onClick={() => setIsAdding(true)}>
//                     Add Note
//                 </button>
//             )}

//             {/* Add/Edit Note Form */}
//             {(isAdding || editingId) && (
//                 <div className="note-form">
//                     <input
//                         type="text"
//                         placeholder="Title"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />
//                     <textarea
//                         placeholder="Content"
//                         value={content}
//                         onChange={(e) => setContent(e.target.value)}
//                     />
//                     <button className="save-button" onClick={handleSave}>
//                         {editingId ? "Update Note" : "Save"}
//                     </button>
//                 </div>
//             )}

//             {/* Display Notes */}
//             <div className="notes-section">
//                 {notes.map(note => (
//                     <Note key={note.id} note={note} onDelete={deleteNote} onEdit={handleEdit} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Home;
import React, { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";
import LogoutButton from "../pages/LogoutButton"; // Import LogoutButton

function Home() {
    const [notes, setNotes] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        getNotes();
    }, []);

    const getAuthToken = () => {
        return localStorage.getItem("access_token");
    };

    const getNotes = () => {
        api.get("/api/notes/", {
            headers: { Authorization: `Bearer ${getAuthToken()}` },
        })
        .then((res) => setNotes(res.data))
        .catch((err) => {
            alert(err.response ? err.response.data.detail : "Failed to load notes");
        });
    };

    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`, {
            headers: { Authorization: `Bearer ${getAuthToken()}` },
        })
        .then((res) => {
            if (res.status === 204) {
                alert("Note deleted!");
                getNotes();
            } else {
                alert("Failed to delete note.");
            }
        })
        .catch((error) => alert(error));
    };

    const handleEdit = (note) => {
        setEditingId(note.id);
        setTitle(note.title);
        setContent(note.content);
        setIsAdding(true); // Show form for editing
    };

    const handleSave = () => {
        if (title.trim() && content.trim()) {
            if (editingId) {
                // Update existing note
                api.put(`/api/notes/update/${editingId}/`, { title, content }, {
                    headers: { Authorization: `Bearer ${getAuthToken()}` },
                })
                .then((res) => {
                    if (res.status === 200) {
                        alert("Note updated!");
                        getNotes();
                        resetForm();
                    } else {
                        alert("Failed to update note.");
                    }
                })
                .catch((err) => {
                    alert(err.response?.data?.error || "Something went wrong!");
                });
            } else {
                // Create a new note
                api.post("/api/notes/", { title, content }, {
                    headers: { Authorization: `Bearer ${getAuthToken()}` },
                })
                .then((res) => {
                    if (res.status === 201) {
                        alert("Note created!");
                        getNotes();
                        resetForm();
                    } else {
                        alert("Failed to create note.");
                    }
                })
                .catch((err) => {
                    alert(err.response?.data?.detail || "Something went wrong!");
                });
            }
        } else {
            alert("Title and content cannot be empty.");
        }
    };

    const resetForm = () => {
        setTitle("");
        setContent("");
        setEditingId(null);
        setIsAdding(false);
    };

    return (
      
        <div className="container">
            {/* Logout Button */}
            <div className="logout-container">
                <LogoutButton />
            </div>

            <h2 className="notes-title">Your Thoughts, Your Space! 📚</h2>
            <h2> Jot Down Your Ideas 👇</h2>
            
            <p className="description">
              <div className="description-line">To add a new note, click <span className="add-text">Add Note</span>.</div>
              <div className="description-line">To edit an existing note, click <span className="edit-text">Edit</span>.</div>
              <div className="description-line">To remove a note, click <span className="delete-text">Delete</span>.</div>
            </p>





            {/* Display Notes */}
            <div className="notes-section">
                {notes.map((note) => (
                    <Note key={note.id} note={note} onDelete={deleteNote} onEdit={handleEdit} />
                ))}
            </div>

            {/* Button to Show Add Note Form */}
            {!isAdding && (
                <button onClick={() => setIsAdding(true)} className="add-note-button">
                    Add Note
                </button>
            )}

            {/* Add/Edit Note Form */}
            {isAdding && (
                <div className="note-form">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                    <div className="button-container">
                        <button className="save-button" onClick={handleSave}>
                            {editingId ? "Update Note" : "Save Note"}
                        </button>
                        <button className="cancel-button" onClick={resetForm}>
                            Cancel
                        </button>
                    </div>

                    {/* <button className="save-button" onClick={handleSave}>
                        {editingId ? "Update Note" : "Save Note"}
                    </button>
                    <button className="cancel-button" onClick={resetForm}>
                      Cancel
                  </button> */}

                </div>
            )}
        </div>
    );
}

export default Home;

