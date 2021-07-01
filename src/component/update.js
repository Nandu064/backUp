import React,{useState,useEffect} from 'react';
import { Modal, Button } from "react-bootstrap";


const Update=(props)=>{
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

     useEffect(()=>{
         setCurrentClub(props.currentclub);
         setNo(props.no);
         setName(props.name)
         setAge(props.age)
         setPosition(props.position)
         setDebutYear(props.debutyear)
         setPreviousClub(props.previousclub)
         setGoals(props.goals)
         setAssists(props.assists)
         setFreeKickScored(props.freekickscored)
         
     },[props.no,props.currentclub, props.name, props.age, props.position, props.previousclub,props.goals,props.assists,props.freekickscored,props.debutyear])

    return(
        <>
        <Modal show={props.showModal1} onHide={props.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <div className="form-control">
                <div className="form-group">
                    <label>No</label>
                    <input type="text" className="form-control" placeholder="Id" value={no} onChange={(e)=>setNo(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" placeholder="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
                </div>            
                <div className="form-group">
                    <label>Current Club</label>
                    <input type="text" className="form-control" placeholder="Current Club" value={currentclub} onChange={(e)=>setCurrentClub(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Position</label>
                    <input type="text" className="form-control" placeholder="Position" value={position} onChange={(e)=>setPosition(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Debut Year</label>
                    <input type="text" className="form-control" placeholder="Debut Year" value={debutyear} onChange={(e)=>setDebutYear(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Previous Club</label>
                    <input type="text" className="form-control" placeholder="Debut Year" value={previousclub} onChange={(e)=>setPreviousClub(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Goals</label>
                    <input type="text" className="form-control" placeholder="Debut Year" value={goals} onChange={(e)=>setGoals(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Assists</label>
                    <input type="text" className="form-control" placeholder="Debut Year" value={assists} onChange={(e)=>setAssists(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Free Kick Scored</label>
                    <input type="text" className="form-control" placeholder="Debut Year" value={freekickscored} onChange={(e)=>setFreeKickScored(e.target.value)}/>
                </div>
            </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={(e)=>props.updateEmp(e,{no,name,age,currentclub,position,debutyear,previousclub,goals,assists,freekickscored,id:props.id})}>
            Update
          </Button>
                    
        </Modal.Footer>
      </Modal>
        </>
        
    )
}

export default Update;