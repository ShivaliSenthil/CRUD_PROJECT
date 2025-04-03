// import React from "react";
// import "../styles/Note.css"
// import LogoutButton from "../pages/LogoutButton";
// function Note({ note, onDelete }) {
//     const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

//     return (
//         <div>
//         <div className="note-container">
//             {/* <p className="note-title">{note.title}</p> */}
//             <input className="note-title" placeholder="Title" value={note.title} />
//             <p className="note-content">{note.content}</p>
//             <p className="note-date">{formattedDate}</p>
//             <button className="delete-button" onClick={() => onDelete(note.id)}>
//                 Delete
//             </button>
            
//         </div>
//         </div>
//     );
// }

// export default Note
// 2nd
// import React, { useState } from "react";
// import "../styles/Note.css";

// function Note({ note, onDelete, onEdit }) {
//     const [isEditing, setIsEditing] = useState(false);
//     const [editedTitle, setEditedTitle] = useState(note.title);
//     const [editedContent, setEditedContent] = useState(note.content);

//     const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

//     const handleSave = () => {
//         onEdit(note.id, editedTitle, editedContent);  // Save changes
//         setIsEditing(false);
//     };

//     return (
//         <div className="note-container">
//             {isEditing ? (
//                 <>
//                     <input 
//                         className="note-title"
//                         value={editedTitle}
//                         onChange={(e) => setEditedTitle(e.target.value)}
//                     />
//                     <textarea 
//                         className="note-content"
//                         value={editedContent}
//                         onChange={(e) => setEditedContent(e.target.value)}
//                     />
//                     <button className="save-button" onClick={handleSave}>
//                         Save
//                     </button>
//                 </>
//             ) : (
//                 <>
//                     <p className="note-title">{note.title}</p>
//                     <p className="note-content">{note.content}</p>
//                     <p className="note-date">{formattedDate}</p>
//                     <button className="edit-button" onClick={() => setIsEditing(true)}>
//                         Edit
//                     </button>
//                     <button className="delete-button" onClick={() => onDelete(note.id)}>
//                         Delete
//                     </button>
//                 </>
//             )}
//         </div>
//     );
// }

// export default Note;
import React from "react";
import "../styles/Note.css";

function Note({ note, onDelete, onEdit }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");

    return (
        <div className="note-container">
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formattedDate}</p>
            <button className="edit-button" onClick={() => onEdit(note)}>
                Edit
            </button>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Delete
            </button>
        </div>
    );
}

export default Note;
