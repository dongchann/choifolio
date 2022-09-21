import React, { useState } from "react";
import "./Subscribe.css"

function Subscribe() {
    const [email, setEmail] = useState('')
    const onEmail = () => {
        setEmail(()=>{
          alert('환영')  
        })
    }

    return(
        <div className="contents-section__header">
            <h3>#mini Project</h3>
            <p>
            Quisque sit amet ex at orci posuere ullamcorper.<br/>
            Maecenas at iaculis diam. Nulla sem mauris, posuere id orci eget,<br/>
            rutrum efficitur nisl.<br/>
            </p>
            <div className="input_box">
                <input type="email" name="EMAIL" id="Email" className="emailBox" placeholder="Email"></input>
             
                <button type="submit" className="email_submit" onClick={onEmail}>{email}send</button>
            </div>
            
        </div>
    )
}

export default Subscribe; 