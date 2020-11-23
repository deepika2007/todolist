
import React, { Component, createElement, Fragment, find, splice, filter } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ClearIcon from '@material-ui/icons/Clear';

class BootstrapCustom extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            hide: true,
            todolist: [],
            strike: 'none',
            todoactive: [],
            check: false
        }
        this.myRef = React.createRef();
    }
    handleInput(e) {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }


    onEnter(e) {
        e.preventDefault();
        const { todolist, name } = this.state;
        todolist.push({
            title: name
        });
        this.setState(
            {
                todolist,
                name: '',
                hide: false
            }
        )
    }


    onCheck(index) {
        const { todolist } = this.state;
        todolist[index].check = !todolist[index].check;
        this.setState({
            todolist
        })
    }

    onDelete = (item) => {
        this.state.todolist.splice(item, 1);
        this.setState({ items: this.state.items });
    }

    onFilter(index) {
        const { todolist } = this.state;
        switch (index) {
            case 'active':
                
                break;
            case 'complete':
                
        }
    }

    render() {
        const { todolist, filter } = this.state;


        return (
            <div className="container">
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <h1 className=" mt-4">todos</h1>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan='3'>
                                <input value={this.state.name} type='text' className="
                                 form-control w-100" autoComplete="off" name="name"
                                    onChange={(e) => this.handleInput(e)} />
                            </td>

                            <td>
                                <button className="btn btn-success" onClick={(e) => this.onEnter(e)}>Click</button>
                            </td>
                        </tr>
                        {todolist.map((item, index) => (
                            <tr key={index} >
                                <td>{index}</td>
                                <td colSpan='2'>
                                    <input type="checkbox"
                                        onChange={(e) => this.onCheck(index)} id={index} value={item.check} checked={item.check} /> &nbsp;
                                        <span style={{
                                        textDecoration: item.check ? 'line-through' : 'none'
                                    }}>{item.title}</span>
                                </td>
                                <td ><button className='btn' onClick={(e) => this.onDelete(index)}><i className='fa fa-remove'></i></button></td>
                            </tr>

                        ))}
                        {
                            !this.state.hide && <tr>
                                <td>{todolist.length} item left</td>
                                <td><button className='btn btn-secondary btn-sm' >All</button>&nbsp;
                                <button className='btn btn-secondary btn-sm' onClick={() =>this.onFilter('active')} >Active</button>&nbsp;
                                <button className='btn btn-secondary btn-sm ' onClick={() => this.onFilter('complete')}>Completed</button></td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default BootstrapCustom;