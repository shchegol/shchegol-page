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

export default class Contacts extends Component {
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
                    <h1>Contacts</h1>
                </div>

                <a className="page__link" href="tel:+79261895848">+7 (926) 189–58–48</a>
                <a className="page__link" target="__blank" href="http://vk.com/zelenzoom">ВКонтакте</a>
            </div>
        )
    }
}

Contacts.propTypes = {
    dispatch: PropTypes.func.isRequired,
};