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

export default class Projects extends Component {
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
                    <h1>Projects</h1>
                </div>

                <a target="__blank" className="page__link" href="http://be-ka.ru/">Белка</a>
            </div>
        )
    }
}

Projects.propTypes = {
    dispatch: PropTypes.func
};