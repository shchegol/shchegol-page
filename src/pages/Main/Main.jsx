import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="title">Alexander Shchegol</h1>
                <p className="description">Frontend Developer</p>

                <div className="mt_2">
                    <p>
                        <Link to="/Skills" onClick={ this.props.flipCard }>
                            Skills
                        </Link>
                    </p>
                    <p>
                        <Link to="/Projects" onClick={ this.props.flipCard }>
                            Projects
                        </Link>
                    </p>
                    <p>
                        <Link to="/Contacts" onClick={ this.props.flipCard }>
                            Contacts
                        </Link>
                    </p>
                </div>
            </div>
        )
    }
}