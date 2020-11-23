// import React, { useState, Component } from 'react';
// import logo from './tri.png';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       value: '',
//       top : 0,
//       left: 0,
//       face: 0,
//       hide: true
//     }
//     //  this.shubh();
//     //  shubh = shubh.bind({
//     //    name: 'Deepika'
//     //  })
//     //  shubh()
//   }

//   // handleChange(e) {
//   //   this.setState({ [e.target.name]: e.target.value });

//   //   //  if(this.state.address!=null)
//   //   // {
//   //   //   e.target.address.minLength=2;
//   //   //   e.target.address.maxLength=20;
//   //   //   alert('enter');
//   //   // }
//   // }
//   // handleSubmit(e) {
//   //   e.preventDefault();
//   //   console.log(this.formRef);
    
//   // }
//   // handleInput(e) {
//   //   if (e.minLength < 3 && e.maxLength > 100) {
//   //     console.log('done');
//   //   }
//   // }

//   // shubh = () => {
//   //   console.log(this)
//   // }
//   onPlace(){
//     const x=prompt("please provide x")
//     const y=prompt("please provide y") 
     
//     const match=/[0-4]/g
//     const r1=x.match(match)
//     const r2=y.match(match)
//     if(r1&&r2){
//       this.setState({
//         left:(x*100),
//         top:(y*100),
//         hide: false        
//       })
//     }
//     else{
//       return false;
//     }
    
//   }

//   onRotate(face){
//     switch(face){
//       case "left":
//         this.setState({
//           face:this.state.face-90
//         })
//         break;
//         case "right":
//           this.setState({
//             face:this.state.face+90
//           })
//           break;
//     }
//   }

// onForward(position){
//   switch((this.state.face+360)%360){
//     case 0:
//       if(this.state.top<=0){
//         return alert('already top')
//       }
//       else{
//       this.setState({
//         top: this.state.top - 100,
//       })
//     }
//       break;
//      case 90:
//       if(this.state.left>=400){
//         return alert('already right')
//       }
//       else{
//         this.setState({
//           left: this.state.left + 100
//         })
//       }
//     break;
//     case 180:
//       if(this.state.top>=400){
//         return alert('already bottom')
//       }
//       else{
//       this.setState({
//         top: this.state.top + 100
//       })
//     }
//       break;
//       case 270:
//       if(this.state.left<=0){
//         return alert('already left');
//       }
//       else{
//         this.setState({
//           left: this.state.left - 100
//         })
//       }
//     break;
//   }
// }
// onReset(){
//   this.setState({
//     hide:true
//   })
// }

//   render()
//    {
//     return (
//       <div className="shopping-list">
//         <button onClick={() => {
//           this.onPlace();
//         }}>Place</button>
//         <button onClick={() => {
//           this.onRotate('left');
//         }}>Left</button>
//         <button onClick={() => {
//           this.onRotate('right');
//         }}>Right</button>
//         <button onClick={() => {
//           this.onForward('position');
//         }}>Forward</button>
//         <button onClick={() => {
//           this.onReset();
//         }}>Reset</button>
//         <div style={{
//           height: 500,
//           width: 500,
//           background: 'red',
//           position: 'relative',
          
//         }}>
//          {!this.state.hide &&  <div className="main" style={{
//             position: 'absolute',
//             top: this.state.top,
//             left: this.state.left,
//             width: 100,
//             height: 100,
//             background: 'blue',
//             position:'absolute',
//           }}
          
//           >
//             <img  src={logo} className="img" style={{
//               transform: `rotate(${this.state.face}deg)`
//             }}/>
//             </div>} 
//         </div>
//       </div>
//     );
//   }
// }



// {/* <form onSubmit={(e) => this.handleSubmit(e)}>
//           <label> Name : <input name="name" type="text" value={this.state.name} onChange={(e) => this.handleChange(e)} required /><br></br><br></br></label>
//           <label>Email : <input name="email" type="email" value={this.state.email} onChange={(e) => this.handleChange(e)} required /><br></br><br></br></label>
//           <label>Address : <textarea onError={(err) => {
//             console.log(err)
//           }} name="address" value={this.state.address} minLength="2" maxLength='50' onChange={(e) => this.handleChange(e)}></textarea><br></br></label>
//           <input type='submit'></input>
//         </form> */}


// // function App() {
// //   const [count, setCount] = useState(2)
// //   const updateCount = () => {
// //       setCount(count+ 1)
// //   }

// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload. {count}
// //         </p>
// //         <button onClick={updateCount}>
// //            Update Count
// //         </button>
// //         <Mylink  count={count}></Mylink>
// //       </header>
// //     </div>
// //   );
// // }

// export default App;

// // const Mylink = (props) => {
// //   return (
// //     <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React {props.count}
// //         </a>
// //   )
// // }






// handleShow(hide){
//     this.setState({
//       hide
//      })
//    }

// render() {
//   return (
//       <Fragment>
//       <h1 className="text-danger" >Accordion</h1>
//           <Accordion defaultActiveKey='0'>
//               <Card>
//                   <Card.Header>
//                       <Toggle as={Button} variant="link" eventKey='0'>
//                           Click Me
//                   </Toggle>
//                   </Card.Header>
//                   <Accordion.Collapse eventKey="0">
//                       <Card.Body>Hello! I'm the body</Card.Body>
//                   </Accordion.Collapse>
//               </Card>
//           </Accordion><br></br>
//           <h1 className="text-danger">Tabs</h1>
//           <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
//           <Tab eventKey="home" title="Home">Home tab</Tab>
//           <Tab eventKey="profile" title="Profile"> Profile Tab</Tab>
//           <Tab eventKey="contact" title="Contact" >Contact Tab</Tab>
//           </Tabs><br></br>
//           <h1 className="text-danger">Modal</h1>
//           <Button variant="primary" onClick={()=>this.handleShow(false)}>
//                Launch demo modal
//           </Button>
//            <Modal show={!this.state.hide}>
//               <Modal.Header>
//                   <ModalTitle>ModalTitle</ModalTitle>

//               </Modal.Header>
//               <Modal.Body>
//                   <p>Modal Body</p>
//               </Modal.Body>

//               <Modal.Footer>
//                   <Button variant="secondary" onClick={()=>this.handleShow(true)} >Close</Button>
//                   <Button variant="primary" onClick={()=>this.handleShow(true)}>Save changes</Button>
//                </Modal.Footer>
//           </Modal>
//       </Fragment>
//   )
// }
// }
