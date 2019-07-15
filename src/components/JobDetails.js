import React, { Component } from 'react';

export class JobDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            pay: "",
            description: "",
            interested: []
        }
    }

    getJobDate = () => {
        fetch('./listing.json')
        .then(res => res.json())
        .then(resJSON => {
            this.setState({
                title: resJSON.title,
                pay: resJSON.pay,
                description: resJSON.description,
                interested: resJSON.interested.map(interest => interest)
            })
        })
    }

    componentDidMount(){
        this.getJobDate();
    }

    render() {
        return (
            <section id="job-details">
                <h2>Job Details</h2>
                <p>Title: {this.state.title}</p>
                <p>Pay: {this.state.pay}</p>
                <p>Description: {this.state.description}</p>
                <p>Interested: {this.state.interested}</p>
            </section>
        )
    }
}

export default JobDetails
