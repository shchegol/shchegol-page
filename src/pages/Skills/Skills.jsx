import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Skills extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               Skills
                <div className="mt_2">
                    <Link to="/">
                        Back
                    </Link>
                </div>
            </div>
        )
    }
}