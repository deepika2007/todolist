import { AssignmentReturn } from '@material-ui/icons';
import React, { Component } from 'react';
import { Button, Modal, ListGroup, Dropdown } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';




class Bill extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            show: true,
            todolist: []
        }
       
    }


    shubh = () => {
        const key = ["bro"];
        const obj = {
            [key]: 'shubh'
        };
        console.log(obj.key);
    }

    render() {

        return (<></>);
    }

}
//     handleShow(show) {
//         this.setState({
//             show
//         })

//     }

//     handleInput(e) {

//         this.setState({
//             [e.target.name]: e.target.value,
//             [e.target.amount]: e.target.value,
//             [e.target.category]: e.option,
//             [e.target.status]: e.option,

//         })

//     }
//     onEnter(e) {
//         e.preventDefault();

//         const { todolist, name, index, amount, category, status } = this.state;

//         if (!name || !amount || !category || !status) {
//             alert(` any information is missing`);
//             return false;
//         }
//         else {
//         if (index) {
//             todolist[index] = {
//                 title: name,
//                 amount: amount,
//                 category: category,
//                 status: status
//             }

//         } else {

//             todolist.push({
//                 title: name,
//                 amount: amount,
//                 category: category,
//                 status: status,
//             });
//         }



//         this.setState(
//             {
//                 show: true,
//                 todolist,
//                 name: '',
//                 index: null,
//                 amount: '',
//                 category: '',
//                 status: ''

//             }
//         )
//     }
// }

//     render() {
//         const { todolist, form } = this.state;
//         1 + 2 === 3
//         return (
//             <>
//                 <form>
//                     <div className='container mt-4'>
//                         <div className='container w-75'>
//                             <label className='text-secondary'>Payment List</label>
//                             <Button variant="outline-primary float-right" onClick={() => this.handleShow()}>Add</Button>

//                             {todolist.map((item, index) => (
//                                 <ListGroup key={index}>
//                                     <h6 className=' ml-3'>{index}.&nbsp;{item.title}<br></br>{item.amount}<br></br>{item.category}<br></br>{item.status}

//     {/* <Dropdown className='float-right'>
//     <Dropdown.Toggle variant="light" className='mb-4' id={index}>
//         Action
//  </Dropdown.Toggle>

//     <Dropdown.Menu>
//         <Dropdown.Item onClick={() => this.handleUpdate(index, item)}>Edit</Dropdown.Item>
//         <Dropdown.Item onClick={() => this.handleOpen(index, true)}>Delete</Dropdown.Item>
//     </Dropdown.Menu>

// </Dropdown> */}
//                                     </h6>
//                                 </ListGroup>
//                             ))}
//                         </div>
//                     </div>

//                     <Modal show={!this.state.show} >
//                         <Modal.Header >
//                             <Modal.Title >Bill format</Modal.Title>
//                         </Modal.Header>

//                         <Modal.Body>
//                             <span className='font-weight-bold' >Name :</span>
//                             <input type='text' className='form-control' onChange={(e) => this.handleInput(e)} name='name' value={this.state.name} autoComplete='off'></input>

//                             <span className='font-weight-bold'>Amount :</span>
//                             <input type='number' className='form-control' onChange={(e) => this.handleInput(e)} name='amount' value={this.state.amount}></input>
//                             {/* {errors.amount &&
//                                 <span className="error">{errors.amount}</span>
//                             } */}
//                             <span className='font-weight-bold'>Category :</span>
//                             <select className='form-control' onChange={(e) => this.handleInput(e)} name='category' value={this.state.category} >
//                                 <option></option>
//                                 <option value='a'>a</option>
//                                 <option value='b'>b</option>
//                                 <option value='c'>c</option>
//                                 <option value='d'>d</option>
//                                 <option value='e'>e</option>
//                             </select>
//                             <span className='font-weight-bold'>Status :</span>
//                             <select className='form-control' onChange={(e) => this.handleInput(e)} name='status' value={this.state.status}>
//                                 <option></option>
//                                 <option value='Paid'>Paid</option>
//                                 <option value='Unpaid'>Unpaid</option>
//                             </select>
//                         </Modal.Body>

//                         <Modal.Footer>
//                             <Button variant="secondary" onClick={() => this.handleShow(true)} >Close</Button>
//                             <Button variant="primary" onClick={(e) => this.onEnter(e)} >Add</Button>
//                         </Modal.Footer>
//                     </Modal>

//                 </form>
//             </>
//         )
//     }
// }

//  class Bootstrap extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             hide: true,
//             todolist: [],
//             opened: false,
//             currentDateTime: new Date().toLocaleString()
//         }
//         this.input = React.createRef();

//     }


//     handleShow(hide) {
//         const { currentDateTime } = this.state;
//         this.setState({
//             hide,
//             currentDateTime
//         })

//     }
//     handleUpdate(index, item) {
//         this.setState({
//             hide: false,
//             index,
//             name: item.title
//         })

//     }

//     handleOpen = (index, opened) => {
//         console.log(index)
//         this.setState({
//             opened,
//             index
//         })

//     }
// handleInput(e) {
//     this.setState({
//         [e.target.name]: e.target.value,

//     })
// }
// onEnter(e) {
//     e.preventDefault();
//     const { todolist, name, index } = this.state;
//     if (index) {
//         todolist[index] = {
//             title: name
//         }
//     } else {
//         todolist.push({
//             title: name
//         });
//     }

//     this.setState(
//         {
//             hide: true,
//             todolist,
//             name: '',
//             index: null

//         }
//     )
// }

//     onDelete = () => {
//         const { todolist, index } = this.state;
//         todolist.splice(index, 1);
//         this.setState({
//             index: null,
//             opened: false,
//             todolist
//         });
//     }


//     render() {
//         const { todolist, opened, index } = this.state;

//         return (
//             <>
//                 <div className='container mt-4'>
//                     <div className='container w-50'>
//                         <label className='text-secondary'>Todo List</label>
//                         <Button variant="outline-primary float-right" onClick={() => this.handleShow()}>Add</Button>


//                         {todolist.map((item, index) => (
//                             <ListGroup key={index} >
//                                 <h6 className=' ml-3 bg-light'>{item.title}<br></br>
//                                     <span>{this.state.currentDateTime}</span>
//                                     <Dropdown className='float-right'>
//                                         <Dropdown.Toggle variant="light" className='mb-4' id={index}>
//                                             Action
//                                     </Dropdown.Toggle>

//                                         <Dropdown.Menu>
//                                             <Dropdown.Item onClick={() => this.handleUpdate(index, item)}>Edit</Dropdown.Item>
//                                             <Dropdown.Item onClick={() => this.handleOpen(index, true)}>Delete</Dropdown.Item>
//                                         </Dropdown.Menu>

//                                     </Dropdown>
//                                 </h6>
//                             </ListGroup>
//                         ))}

//                         <Modal show={!this.state.hide} >
//                             <Modal.Header >
//                                 <Modal.Title >Add Todo</Modal.Title>
//                             </Modal.Header>

//                             <Modal.Body>
//                                 <p>Text</p>
//                                 <textarea className='form-control' onChange={(e) => this.handleInput(e)} name='name' value={this.state.name} ref={this.input} placeholder='Enter todo details*'></textarea>
//                             </Modal.Body>

//                             <Modal.Footer>
//                                 <Button variant="secondary" onClick={() => this.handleShow(true)} >Close</Button>
//                                 <Button variant="primary" onClick={(e) => this.onEnter(e)}>Add</Button>
//                             </Modal.Footer>
//                         </Modal>

//                         <Modal show={this.state.opened}>
//                             <Modal.Header >
//                                 <Modal.Title >Delete Todo</Modal.Title>
//                             </Modal.Header>

//                             <Modal.Body>
//                                 <p>Do you want to delete this todo?</p>

//                             </Modal.Body>

//                             <Modal.Footer>
//                                 <Button variant="secondary" onClick={() => this.handleOpen(null, false)} >Cancle</Button>
//                                 <Button variant="primary" onClick={(e) => this.onDelete()}>Delete</Button>
//                             </Modal.Footer>
//                         </Modal>

//                     </div>
//                 </div>
//             </>
//         )
//     }
// }

export default Bill;