import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import EventAdd from './Component/EventAdd';
import DisplayEvent from './Component/DisplayEvent';
import NoPage from './Component/NoPage';
import Display from './Component/Display';
import swal from 'sweetalert';



function App() {

  const [list, setList]= useState([
    
   
    // {
    //   id:"0",
    //   name: "",
    //   startDate:"",
    //   endDate: "",
    //   startTime:"",
    //   endTime:"",
    //   address:"",
    //   description:""
    // },
    // {
    //   id:"2",
    //   name: "2 Barthday parti",
    //   startDate:"11-08-2023",
    //   endDate: "12-08-2023",
    //   startTime:"10:00:AM",
    //   endTime:"12:00:PM",
    //   address:"Duabai",
    //   description:"Prti"
    // }

  ])
  const [event, setEven] = useState([])

  const addEvent = (e) => {

    list.push(e)
    swal("Great!", " Ecent Created !", "success");
    console.log(list)

  }
  console.log("Before delete",list)

  const deleteEvent=(n)=>{
    
    console.log(n)  
    const updatedItems = list.filter(item => item.id !== n);
    setList(updatedItems)
  } 
  


  return (
    <div className="container main   my-lg-3 ">

      <div className="container   maincontainer">
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link className="link" to="/">Create Events </Link>
              </li>
              <li>
                <Link className="link" to="/" to="/display">All Events</Link>
              </li>
              
            </ul>
          </nav>
          <div className='container main1 disBoox shadow-lg  rounded-4 '>
            <Routes>
              <Route index element={<EventAdd adding={addEvent} />} />
              <Route path="/display" element={<Display event={list} delete={deleteEvent}  />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>

      
      {/* <EventAdd adding={addEvent}/> 
          <DisplayEvent events={list}></DisplayEvent> */}
    </div>
  )
}

export default App;
