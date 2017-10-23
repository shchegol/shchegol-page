import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { flipCard } from '../../redux/actions/mainAction';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

@connect((store) => {
    return { cardSide: store.side.cardSide }
})
@autobind()
export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.dispatch(flipCard());
    }

    render() {
        return (
            <div>
                <h1 className="title">Alexander Shchegol</h1>
                <p className="description">Frontend Developer</p>

                <div className="mt_2">
                    <p>
                        <Link to="/Skills" onClick={ this.handleClick }>
                            Skills
                        </Link>
                    </p>
                    <p>
                        <Link to="/Projects" onClick={ this.handleClick }>
                            Projects
                        </Link>
                    </p>
                    <p>
                        <Link to="/Contacts" onClick={ this.handleClick }>
                            Contacts
                        </Link>
                    </p>
                </div>
            </div>
        )
    }
}