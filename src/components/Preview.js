import React, { Component } from 'react'

export class Preview extends Component {
    constructor(props){
        super(props)
        this.state = {
            isHidden: true
        }
    }

    onClick = (e) => {
        e.preventDefault();
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        return (
            <div>
                <p id="message">&nbsp;</p>
                <button id="preview-toggle" onClick={this.onClick}>Show Preview</button>
                <section id="application-preview" className={this.state.isHidden ? "hidden" : ""}>
                    {this.props.input}
                </section>
            </div>
        )
    }
}

export default Preview
