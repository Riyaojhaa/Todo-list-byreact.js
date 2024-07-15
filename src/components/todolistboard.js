// import React, {  useState , useEffect} from 'react'
// import ToDoListmainpage from './ToDoListmainpage'




// const getlocalitems = () => {
//   let list = localStorage.getItem('tasklist')
//   if (list) {
//     return JSON.parse(localStorage.getItem('tasklist'))
//   } else {
//     return []
//   }
// }

// export default function Todolistboard() {

//   const [taskValue , settaskValue] = useState('')
//   const [taskname , settaskname] = useState(getlocalitems());
  
 
  
//   const inputevent = (event) => {
//     settaskValue(event.target.value);
//   }

//   const onsubmit = () => {
//      settaskname((olditems) => {
//       return [...olditems, taskValue];
//      })
//      settaskValue('')
//   }

//   const deleteitems = (id) => {
//      settaskname((olditems) => {
//       return olditems.filter((arrElem , index) => {
//           return index !== id;
//       })
//      })

//   }
// // add data in local storage
//  useEffect(() => {
//    localStorage.setItem('tasklist' , JSON.stringify(taskname))
// },[taskname]);

//   return (
//     <div className='outer-container'>
//       <div className='inner-container'>
//          <h3>ToDo List</h3>
//          <input type='text' value={taskValue} onChange={inputevent} placeholder='Add a Items'></input><button onClick={onsubmit}>Add</button>
//           {/* <li>{taskname}</li> */}
//           {taskname.map((itemval , index ) => {
//             return <ToDoListmainpage 
//             id={index}
//             key = {index} 
//             text={itemval}
//             onSelect = {deleteitems}
           
//             />;
//           })}
          
         
//       </div>
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react';
import ToDoListmainpage from './ToDoListmainpage';

const getLocalItems = () => {
  let list = localStorage.getItem('tasklist');
  return list ? JSON.parse(list) : [];
};

export default function Todolistboard() {
  const [taskValue, setTaskValue] = useState('');
  const [taskName, setTaskName] = useState(getLocalItems());

  const inputEvent = (event) => {
    setTaskValue(event.target.value);
  };

  //   const onsubmit = () => {
//      settaskname((olditems) => {
//       return [...olditems, taskValue];
//      })
//      settaskValue('')
//   }

  const onSubmit = () => {
    if (taskValue.trim() !== '') {
      const newTask = {
        id: Date.now(), // Using timestamp as a unique identifier
        text: taskValue.trim()
      };
      setTaskName((oldItems) => [...oldItems, newTask]);
      setTaskValue('');
    }
  };

  const deleteItem = (id) => {
    setTaskName((oldItems) => oldItems.filter(item => item.id !== id));
  };

  // Add data to local storage
  useEffect(() => {
    localStorage.setItem('tasklist', JSON.stringify(taskName));
  }, [taskName]);

  return (
    <div className='outer-container'>
      <div className='inner-container'>
        <h3>ToDo List</h3>
        <input
          type='text'
          value={taskValue}
          onChange={inputEvent}
          placeholder='Add Task'
        />
        <button onClick={onSubmit}>Add</button>

        {taskName.map((item) => (
          <ToDoListmainpage
            key={item.id} // Using item's id as a unique key
            id={item.id}
            text={item.text}
            onSelect={deleteItem}
          />
        ))}
      </div>
    </div>
  );
}
