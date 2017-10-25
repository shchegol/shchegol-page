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

export default class Skills extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.dispatch(flipCard());
    }

    render() {
        return (
            <div className="page">
                <Link to="/" className="page__close" onClick={ this.handleClick }>
                    Back
                </Link>

                <div className="title">
                    <h1>Skills</h1>
                </div>
            </div>
        )
    }
}

Skills.propTypes = {
    dispatch: PropTypes.func
};