// import React, { useState } from 'react'
// import CancelIcon from '@mui/icons-material/Cancel';
// import EditNoteIcon from '@mui/icons-material/EditNote';
// import modal from './modal'

// export default function ToDoListmainpage(props) {

//   const [checked , setchecked] = useState(false)
//   const [editmodal , seteditmodal] = useState(false)

//   const checkeditems = () => {
//      setchecked(prev => !prev)
//   }
//   const togglemodal = () => {
//      seteditmodal(prev =>  !prev)
//      if (editmodal === true){
//       <modal />
//      }

//   }
 

//   return (
//     <>
//     <div className='todo_style'>
//         <div>
//         <input className="checkbox" type="checkbox" onClick={checkeditems} checked={checked} />
//         <li style={{textDecoration : checked ? 'line-through' : 'none' }}>{props.text}</li>
//         <EditNoteIcon className='icon1' 
//         onClick={togglemodal}   
//         />
        
//         <CancelIcon className='icon'
//         onClick={() => {
//             props.onSelect(props.id);
//         }} />
//         </div>
//     </div>
//     </> 
//   )
// }
import React, { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Tooltip from '@mui/material/Tooltip';
import Modal from './modal';

export default function ToDoListmainpage({ text, onSelect, id }) {
  const [checked, setChecked] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [taskText, setTaskText] = useState(text);

  const toggleChecked = () => {
    setChecked(prev => !prev);
  };

  const toggleModal = () => {
    setEditModal(prev => !prev);
  };

  const handleSave = (newText) => {
    setTaskText(newText);
  };

  return (
    <>
      <div className='todo_style'>
        <div>
          <input
            className="checkbox"
            type="checkbox"
            onChange={toggleChecked}
            checked={checked}
          />
          <li style={{ textDecoration: checked ? 'line-through' : 'none' ,
              color: checked ? 'yellow' : 'initial',
              fontWeight: checked ? 'normal' : 'bold'
            }}>
            {taskText}
          </li>
          <Tooltip title="Edit">
          <EditNoteIcon className='icon1' onClick={toggleModal} />
          </Tooltip>
          <Tooltip title="Delete">
          <CancelIcon className='icon' onClick={() => onSelect(id)} />
          </Tooltip>
        </div>
      </div>
      <Modal
        show={editModal}
        onClose={toggleModal}
        text={taskText}
        onSave={handleSave}
      />
    </>
  );
}

