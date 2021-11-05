import React, { useEffect, useState } from 'react'
import Exam from '../exam/Exam'
import './header.css'

const Header = () => {
    const [name, setName] = useState("")

 
   
    useEffect(() => {
        setName(prompt("Enter Your Name"))

    },[])

    const addName = () => {
        if(!name) {
            return (
                <div className="text-center">
                    <p> you should enter your name </p>
                    <button className="btn btn-danger" onClick={() => setName(prompt("Enter Your Name"))}> Add Your name </button>
                </div>
            )
        }
        else {
            return (
                <div>
              <h3 className="text-center text-light bg-primary p-5">Good Luck {name}</h3>  
                <Exam />
                </div>
            )
                
            
        }
    }
  
    return (
        <div className="">
        {addName()}
            
        </div>
    )
}

export default Header
