import React, { Component } from 'react'
import axios from 'axios'

class AppList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
        // Enable my methods.
        this.getComments = this.getComments.bind(this);
    }

    getComments () {
        axios.get('http://localhost:8080/index')
            .then(res => {
                this.setState({comments: res.data.result});
            });
    }

    componentWillMount() { // Called before DOM content loaded.
        // console.warn('WillMount by App List')
    }

    componentDidMount() { // Called after DOM content loaded.
        this.getComments();
        // console.warn('DidMount by App List')
    }

    render () {
        const {classes} = this.props;
        const {comments} = this.state;
        let list = [];

        for (let [idx, c] of comments.entries()) {
            list.push(
                <li key={idx}>{c.Comment} by {c.Name}</li>
            )
        }

        return (
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default AppList;
