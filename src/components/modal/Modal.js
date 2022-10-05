import React, { useEffect } from "react";
import "./../modal/Modal.css"
import { TodoProvider } from "./modalcomponents/Todocomponents/TodoContext";
import TodoCreate from "./modalcomponents/Todocomponents/TodoCreate";
import TodoHead from "./modalcomponents/Todocomponents/TodoHead";
import TodoList from "./modalcomponents/Todocomponents/TodoList";
import TodoTemplate from "./modalcomponents/Todocomponents/TodoTemplate";


function Modal({closeModal}) {

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);


    return(
        <div className="OpenModal">
          <div className="ModalBackground">
            <TodoProvider>
            <TodoTemplate>
              <TodoHead />
              <TodoList />
              <TodoCreate />
            </TodoTemplate>
            </TodoProvider>
          </div>
          <button onClick={closeModal}>버튼입니다</button>
        </div>
    )
}

export default Modal;



