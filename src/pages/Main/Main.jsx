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
            <section className="page">

                <header className="title">
                    <h1 className="text-animation">
                        ALEXANDER SHCHEGOL
                    </h1>
                    <p className="title__caption">Frontend Developer</p>
                </header>

                <div className="row">
                    <article className="col-sm-8">
                        <p>
                            Web development is a huge part of my life.
                        </p>

                        <p>
                            I try to invest all my energy in every project that I do
                            and make a main emphasis on performance and design
                        </p>
                    </article>

                    <nav className="col-sm-4 text_right">
                        <Link to="/skills" className="page__link" onClick={ this.handleClick }>
                            Skills
                        </Link>

                        { /*<Link to="/Projects" className="page__link" onClick={ this.handleClick }>*/ }
                        { /*Projects*/ }
                        { /*</Link>*/ }

                        <Link to="/contacts" className="page__link" onClick={ this.handleClick }>
                            Contacts
                        </Link>
                    </nav>
                </div>
            </section>
        )
    }
}

Main.propTypes = {
    dispatch: PropTypes.func
};