import React from 'react'
import axios from 'axios'

class Add extends React.Component{
    constructor(){
        super()
        this.state = {
            first_name: '',
            last_name: '',
            phone: ''
        }
    }
    handleChange = (e) =>{
        const input = e.target
        this.setState({ first_name: input.value })
    }
    handleChange1 = (e) =>{
        const input = e.target
        this.setState({ last_name: input.value })
    }
    handleChange2 = (e) =>{
        const input = e.target
        this.setState({ phone: input.value })
    }
    handleSubmit = (e) =>{
        e.preventDefault()
        const contact = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone: this.state.phone
        }
        axios.post(`http://localhost:3000/api/contact`, contact).then(res => {
            // console.log(res)
            console.log(res.data)
        })
    }
    render(){
        return (
            <div>
                <form  onSubmit={this.handleSubmit}>
                    <label>
                        First_name: 
                        <input type='text' name='first' onChange={this.handleChange} value={this.first_name} /><br /><br />
                    </label>
                    <label>
                        Last_name: 
                        <input type='text' name='last' onChange={this.handleChange1} value={this.last_name} /><br /><br />
                    </label>
                    <label>
                        Phone_number: 
                        <input type='text' name='number' onChange={this.handleChange2} value={this.phone} /><br />
                    </label>
                        
                    <button type='submit'> Add </button>
                </form>
            </div>
        )
    }
}

export default Add