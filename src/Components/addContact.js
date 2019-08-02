import React from 'react'
import axios from 'axios'

class Add extends React.Component{
    constructor(){
        super()
        this.state = {
            first_name: '',
            last_name: '',
            phone: '',
            pin: ''
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
      }

    handleSubmit = (e) =>{
        e.preventDefault()
        const contact = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone: this.state.phone,
            pin: this.state.pin
        }
        axios.post(`http://localhost:8080/api/contact`, contact).then(res => {
            console.log(res.data)
        }).then(()=> this.setState({ first_name: '', last_name: '', phone: '', pin: ''}))
        
    }
    render(){
        return (
            <div>
                <form  onSubmit={this.handleSubmit}>
                    <label>
                        First_name: 
                        <input type='text' name='first_name' onChange={this.handleChange} value={this.state.first_name} /><br /><br />
                    </label>
                    <label>
                        Last_name: 
                        <input type='text' name='last_name' onChange={this.handleChange} value={this.state.last_name} /><br /><br />
                    </label>
                    <label>
                        Phone_number: 
                        <input type='text' name='phone' onChange={this.handleChange} value={this.state.phone} /><br />
                    </label>
                    <label>
                        Pin: 
                        <input type='password' name='pin' onChange={this.handleChange} value={this.state.pin} /><br />
                    </label>
                        
                    <button type='submit'> Add </button>
                </form>
            </div>
        )
    }
}

export default Add