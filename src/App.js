import React from 'react';
import Add from './component/add';
import Update from './component/update';
// import {Card ,Button} from "react-bootstrap";
import Display from './component/display';
import {playerData} from './includes/dummyData'
import Table from './component/table'
import styles from './App.module.css'

class App extends React.Component{
  
  state={
     list:playerData,
     updatedValue:{},
     adduser:true,
     isUpdate:false,
     showModal:'',
     showModal1:'',
     btnText:'Card'
  }
  
 
  AddUserHandler=()=>{
    this.setState({...this.state,adduser:false})
    this.setState({
      showModal:true,
    })
    
  }
  handleModal = ()=>{
    this.setState({
      adduser:true,
      showModal:false,
    })
  }
  hideModal = ()=>{
    this.setState({
      adduser:true,
      showModal1:false,
    })
  }

  AddEmpHandler=(e,value)=>{
    e.preventDefault();
    let oldEmp=this.state.list;
    oldEmp.push({no:value.no,name:value.name,age:value.age,currentclub:value.currentclub,position:value.position,debutyear:value.debutyear,previousclub:value.previousclub,goals:value.goals,assists:value.assists,freekickscored:value.freekickscored})
    this.setState({list:oldEmp,adduser:true})
  }

  deleteEmpHandler=(index)=>{
      let oldEmp=this.state.list;
      oldEmp.splice(index,1);
      this.setState({list:oldEmp})
  }

  upadateHandler=(item,index)=>{
    let obj={...item,id:index}
    this.setState({isUpdate:true,updatedValue:obj})
    this.setState({
      showModal1:true,
    })
  }

  updateEmp=(e,value)=>{
    e.preventDefault();
    let oldEmp=this.state.list;
    oldEmp.splice(value.id,1,{no:value.no,name:value.name,age:value.age,currentclub:value.currentclub,position:value.position,debutyear:value.debutyear,previousclub:value.previousclub,goals:value.goals,assists:value.assists,freekickscored:value.freekickscored})
    this.setState({list:oldEmp,isUpdate:false});console.log(this.state.updatedValue)
  }

  render(){
    return(
      <>
            <div className={styles.header}>
              <h1>Football Player List</h1>
              <span className="btn btn-primary"
                onClick={()=>{
                (this.state.btnText==="Card")?this.setState({btnText:'Table'}):this.setState({btnText:'Card'})
              }}>{this.state.btnText}</span>
            </div>
            <div className="row mt-4" style={{width:'80%',margin:'auto'}}>
              <div className="col-sm-12">
                    {this.state.adduser?
                    <span className="btn btn-success" onClick={this.AddUserHandler}>Add Player</span>
                    :<Add addEmp={this.AddEmpHandler} playerData={this.state.list} showModal={this.state.showModal} hideModal={this.hideModal} />
                    }
                    {this.state.isUpdate?<Update showModal1={this.state.showModal1} hideModal={this.hideModal}
                    key={this.state.updatedValue.id}
                    no={this.state.updatedValue.no}
                    name={this.state.updatedValue.name} 
                    age={this.state.updatedValue.age} 
                    currentclub={this.state.updatedValue.currentclub} 
                    position={this.state.updatedValue.position} 
                    debutyear={this.state.updatedValue.debutyear}
                    previousclub={this.state.updatedValue.previousclub}
                    goals={this.state.updatedValue.goals}
                    assists={this.state.updatedValue.assists}
                    freekickscored={this.state.updatedValue.freekickscored}
                    id={this.state.updatedValue.id}
                    updateEmp={this.updateEmp}
                    />:null}
              </div>
             
            </div>
            <div style={{width:'80%',margin:'20px auto'}}> 
                {(this.state.btnText==="Card")?
                  <Display playerList={this.state.list} upadateHandler={this.upadateHandler} deleteEmpHandler={this.deleteEmpHandler}/>:<Table playerData={this.state.list} upadateHandler={this.upadateHandler} />}
            </div>
            
      </>
    )
  }
}

export default App;