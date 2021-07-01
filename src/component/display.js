import React from 'react';
import {Card ,Button} from "react-bootstrap";

function display({playerList,upadateHandler,deleteEmpHandler}) {
    return(
        playerList.map((item,index)=>{
            return(<div className="row" key={index} style={{margin:'15px',width:'288px',display:'inline-block',height:'auto'}}>
                <Card style={{ width: '19rem',backgroundColor:'lightgray',height:'auto' }} >
                <Card.Body>
                  <Card.Text>
                    <p style={{color:'black'}}>Id: {item.no}  </p>
                    <p style={{color:'black'}}>Name: {item.name}  </p>
                    <p style={{color:'black'}}>Age : {item.age} </p>
                    <p style={{color:'black'}}>Current Club : {item.currentclub} </p>
                    <p style={{color:'black'}}>Position : {item.position} </p>
                    <p style={{color:'black'}}>Debut Year : {item.debutyear} </p>
                    <p style={{color:'black'}}>Previous Club : {item.previousclub} </p>
                    <p style={{color:'black'}}>Goals : {item.goals} </p>
                    <p style={{color:'black'}}>Assists : {item.assists} </p>
                    <p style={{color:'black'}}>Free Kicks Scored : {item.freekickscored} </p>
                  </Card.Text>
                  <Button variant="secondary" onClick={()=>upadateHandler(item,index)} style={{margin:'10px'}}>Edit</Button>
                  <Button variant="danger" onClick={()=>deleteEmpHandler(index)}  >Delete</Button>
                </Card.Body>
              </Card>
            </div>)
         })
    )
    
}

export default display
