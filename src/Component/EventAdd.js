import React, { useState } from 'react'
import './EventAdd.css'

export default function EventAdd({ adding }) {
    const [count, setCount] = useState(1)
    const [name, setName] = useState("")
    const [des, setDesc] = useState("")
    const [startdate, setStartDate] = useState("")
    const [endate,setEndDate]=useState("")
    const [startime, setStartTime]=useState("")
    const [endtime, setEndTime]= useState("")
    const [addss, setAddress]=useState("")

    const displayEvent = (e) => {
        e.preventDefault();

        const createdEvent = {
            id:count,
            name: name,
            startDate:startdate,
            endDate: endate,
            startTime:startime,
            endTime:endtime,
            address:addss,
            description:des
        }
        // adding(createdEvent)
        // console.log(createdEvent)
       
         adding(createdEvent)

        
        setName("")
        setDesc("")
        setStartDate("")
        setEndDate("")
        setStartTime("")
        setEndTime("")
        setAddress("")
       setCount((prevCount) => count + 1)
       

    }

    return (
        <div className='container    w-75   '>
            <div className='EventBox py-5 '>
                

                {/* <form action="" onSubmit={displayEvent}>
    Event Name:
    <input type='text' value={name} onChange={(e) => setName(e.target.value)} ></input> <br />
    Description:
    <input type="text" value={des} onChange={(e)=>setDesc(e.target.value)} /> <br/>
    Date:
    <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}  />
    <button type='submit' >Submit</button>
   </form> */}

                <form onSubmit={displayEvent}>
                    {/*  Event Name */}
                    <div className='box1  shadow-sm '>
                        <div className='container py-0  '>
                            <label htmlFor="" className='form-label '>
                                <h6 className='title'> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                </svg> Event</h6>
                            </label>
                            <br />
                            <input type="text" className='form-control my-0' placeholder='Event Name' onChange={(e)=>setName(e.target.value)}  value={name} required />
                        </div>
                    </div>
                    {/* Event Timing */}
                    <div className='box2 shadow-sm  '>
                        <div className="container">
                            <label htmlFor="" className='form-label '>
                                <h6> Date & Time</h6>
                            </label>
                            {/* Date Group */}
                            <div className="row" >
                                <div className="col-2 colimg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-calendar-event mx-5 my-2 box2img" viewBox="0 0 16 16">
                                        <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                    </svg>
                                </div>
                                <div className="col-1 startDate ">
                                    <label htmlFor="" className='form-label  boxLable' >Start</label>
                                </div>
                                <div className="col-4">
                                    <input type="date" className=' box2input ' onChange={(e)=>setStartDate(e.target.value)} value={startdate}required  />

                                </div>
                                <div className="col-1">
                                    <label htmlFor="" className='form-label  boxLable '>TO</label>

                                </div>
                                <div className="col-4">
                                    <input type="date" className='  box2input ' onChange={(e)=>setEndDate(e.target.value)}  value={endate}  required/>

                                </div>
                            </div>
                            {/*  Timing Group*/}
                            <div className="row my-1 " >
                                <div className="col-2 colimg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" class="bi bi-alarm  mx-5 my-2 box2img" viewBox="0 0 16 16">
                                        <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                                        <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
                                    </svg>
                                </div>
                                <div className="col-1 startDate">
                                    <label htmlFor="" className='form-label boxLable' >Time</label>
                                </div>
                                <div className="col-4">
                                    <input type="time" className=' box2input ' onChange={(e)=>setStartTime(e.target.value)} value={startime}  required />

                                </div>
                                <div className="col-1">
                                    <label htmlFor="" className='form-label  boxLable '>TO</label>

                                </div>
                                <div className="col-4">
                                    <input type="time" className=' box2input' onChange={(e)=>setEndTime(e.target.value)} value={endtime} required  />

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Event Address */}
                    <div className='box3  shadow-sm '>
                        <div className="container">
                            <label htmlFor="" className='form-label '>
                                <h6> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-geo-alt " viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg> Address</h6>
                            </label>
                            <br />
                            <textarea type="text" className="w-100 h-25 form-control " name="" id="" onChange={(e)=>setAddress(e.target.value)} value={addss}  required/>
                        </div>
                    </div>
                    {/* Event Description */}
                    <div className='box4 shadow-sm  '>
                        <div className="container">
                            <label htmlFor="" className='form-label '>
                                <h6> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                </svg> Descrption</h6>
                            </label>
                            <br />
                            <textarea type="text" className="w-100 h-25  form-control " name="" id="" onChange={(e)=>setDesc(e.target.value)}  value={des}  required/>
                        </div>
                    </div>
                    <div className=' btnevent  '>
                        <button className='btn btn-primary createBtn m-3 ' type="submit">Create Event</button>
                    </div>
                </form>
            </div>

        </div >
    )
}
