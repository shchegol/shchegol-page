import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import { flipCard } from 'redux/actions/mainAction';

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

Main.propTypes = {
    dispatch: PropTypes.func
};