import React from 'react'
import axios from 'axios'


class API_Practise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            // error: null,
            // isLoaded: false,
            // employees: [],
            todos: []
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const { name } = this.state;
        const todos = {
            name: this.state.name
        };

        axios.get(`http://localhost:3000/todo`, { todos })
            .then(result => {
                console.log(result.data);
            })


        this.setState({
            name: ''
        })
        console.log(name)

    }

    componentDidMount() {
        // axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
        //     .then(result => {
        //                 console.log(result)
        //             this.setState({
        //                 isLoaded: true,
        //                 employees: result.data.data
        //             });
        //         },

        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )


    }

    render() {
        // const { error, isLoaded, employees } = this.state;
        // if (error) {
        //     return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <div>Loading...</div>;
        // } else {
        const { todos } = this.state;
        return (
            <>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>
                            {todo.id} 
                        </li>
                    ))}
                </ul>
                {/* <form onSubmit={this.handleSubmit}>
                    <div className='container'>
                        <label>Input Field</label>
                        <input type='text' className='form-control' name='name' onChange={this.handleChange} value={this.state.name}></input><br></br>
                        <button type='submit' className='btn btn-success'>Submit</button>
                    </div>
                </form> */}
            </>
        );
    }

}

export default API_Practise
