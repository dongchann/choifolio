import React, { useEffect } from "react";
import "./../modal/ModalSmg.css"
import ModelSmg from "./modalcomponents/Todocomponents/ModelSmg/ModelSmg";



function ModalSmg({closeModalSmg}) {

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
            <ModelSmg />
          </div>
          <button onClick={closeModalSmg}>버튼입니다</button>
        </div>
    )
}

export default ModalSmg;



