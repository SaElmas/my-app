import { useState } from "react";
import Modal from './Modal';
import Backdrop from './Backdrop'

function Todo(props) {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    console.log("You clicked Delete button");
  }
  function saveHandler() {
    console.log("You clicked Save button");
    console.log(props.text);
  }
  return (
    <div className="card">
      <h2>TITLE</h2>
      <h3>{props.text}</h3>
      <div className="actions">
        <button className="btn" onClick={saveHandler}>
          Save
        </button>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal />}
      {modalIsOpen && <Backdrop />}
    </div>
  );
}

export default Todo;
