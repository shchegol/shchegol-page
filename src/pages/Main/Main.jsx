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
            <div className="page">
                <div className="title">
                    <h1>ALEXANDER SHCHEGOL</h1>
                    <p className="title__caption">Frontend Developer</p>
                </div>

                <div className="row">
                    <div className="col-sm-8">
                        <p>
                            Web development is a huge part of my life.
                            I want to be a strong programmer and every day step by step
                            I try to approach this goal.
                        </p>

                        <p>
                            I invest all my capabilities in every project and make a main emphasis on performance, ease
                            of use and encriedable design
                        </p>
                    </div>

                    <div className="col-sm-4 text_right">
                        <Link to="/Skills" className="page__link" onClick={ this.handleClick }>
                            Skills
                        </Link>

                        { /*<Link to="/Projects" className="page__link" onClick={ this.handleClick }>*/ }
                        { /*Projects*/ }
                        { /*</Link>*/ }

                        <Link to="/Contacts" className="page__link" onClick={ this.handleClick }>
                            Contacts
                        </Link>
                    </div>


                </div>
            </div>
        )
    }
}

Main.propTypes = {
    dispatch: PropTypes.func
};