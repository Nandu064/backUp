import React,{useState} from 'react';
import { Modal, Button, Form } from "react-bootstrap";


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
            <Form.Group >
                  <Form.Label>Id: </Form.Label>
                  <Form.Control type="text" placeholder="ID" onChange={(e)=>setNo(e.target.value)}/>           
            </Form.Group>
            <Form.Group >
                  <Form.Label>Name: </Form.Label>
                  <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>           
            </Form.Group>
            <Form.Group >
                  <Form.Label>Age: </Form.Label>
                  <Form.Control type="text" placeholder="Age" onChange={(e)=>setAge(e.target.value)}/>           
            </Form.Group>
            <Form.Group >
                  <Form.Label>Position: </Form.Label>
                  <Form.Control type="text" placeholder="Current Club" onChange={(e)=>setCurrentClub(e.target.value)}/>           
            </Form.Group>
            <Form.Group >
                  <Form.Label>Debut Year: </Form.Label>
                  <Form.Control type="text" placeholder="Debut Year" onChange={(e)=>setDebutYear(e.target.value)}/>           
            </Form.Group>
            <Form.Group >
                  <Form.Label>Previous Club: </Form.Label>
                  <Form.Control type="text" placeholder="Previous Club" onChange={(e)=>setPreviousClub(e.target.value)}/>           
            </Form.Group>
            <Form.Group >
                  <Form.Label>Goals: </Form.Label>
                  <Form.Control type="text" placeholder="Goals" onChange={(e)=>setGoals(e.target.value)}/>           
            </Form.Group>
            <Form.Group >
                  <Form.Label>Assists: </Form.Label>
                  <Form.Control type="text" placeholder="Assists" onChange={(e)=>setAssists(e.target.value)}/>           
            </Form.Group>
            <Form.Group >
                  <Form.Label>Assists: </Form.Label>
                  <Form.Control type="text" placeholder="Free Kick Scored" onChange={(e)=>setFreeKickScored(e.target.value)}/>           
            </Form.Group>
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


