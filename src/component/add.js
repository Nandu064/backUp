import React,{useState} from 'react';
import { Modal, Button } from "react-bootstrap";


const Add=(props)=>{
      const [no,setNo]=useState('');
     const [name,setName]=useState('');
     const [age,setAge]=useState('');
     const [currentclub,setCurrentClub]=useState('');
     const [position,setPosition]=useState('');
     const [debutyear,setDebutYear]=useState('');
     const [previousclub,setPreviousClub]=useState('');
     const [goals,setGoals]=useState('');
     const [assists,setAssists]=useState('');
     const [freekickscored,setFreeKickScored]=useState('');
    
    return(
        <>
      {/* <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={handleShow}>
          Add Employee
        </Button>
      </div> */}
      <Modal show={props.showModal} onHide={props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className="form-control">
                    <div className="form-group">
                            <label>Id</label>
                            <input type="text" className="form-control" placeholder="Id"  onChange={(e)=>setNo(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input type="text" className="form-control" placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Current Club</label>
                        <input type="text" className="form-control" placeholder="Current Club" onChange={(e)=>setCurrentClub(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Position</label>
                        <input type="text" className="form-control" placeholder="Position" onChange={(e)=>setPosition(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Debut Year</label>
                        <input type="text" className="form-control" placeholder="Debut Year" onChange={(e)=>setDebutYear(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Previous Club</label>
                        <input type="text" className="form-control" placeholder="Previous Club" onChange={(e)=>setPreviousClub(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Goals</label>
                        <input type="text" className="form-control" placeholder="Goals" onChange={(e)=>setGoals(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Assists</label>
                        <input type="text" className="form-control" placeholder="Assists" onChange={(e)=>setAssists(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label>Free Kick Scored</label>
                        <input type="text" className="form-control" placeholder="Free Kick Scored" onChange={(e)=>setFreeKickScored(e.target.value)}/>
                    </div>
                </div>
                
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.hideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>props.addEmp(e,{no,name,age,currentclub,position,debutyear,previousclub,goals,assists,freekickscored})}>
            Add
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default Add;


