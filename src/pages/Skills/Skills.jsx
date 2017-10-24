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
            <div>
               Skills
                <div className="mt_2">
                    <Link to="/" onClick={ this.handleClick }>
                        Back
                    </Link>
                </div>
            </div>
        )
    }
}

Skills.propTypes = {
    dispatch: PropTypes.func
};