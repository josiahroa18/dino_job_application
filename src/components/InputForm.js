import React, { Component } from 'react';
import Preview from './Preview';


export class InputForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputField: ""
        }
    }

    handleChange = (e) =>{
        this.setState({
            inputField: e.target.value
        })
    }

    render() {
        return (
            <form id="application-input">
                <label>Apply Here: </label>
                <textarea id="application-text" rows="8" cols="100" onChange={this.handleChange}></textarea>
                <input id="submit" type="submit" value="Submit" />
                <Preview input={this.state.inputField}/>
            </form>
        )
    }
}

export default InputForm
