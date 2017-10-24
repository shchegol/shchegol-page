import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from 'pages/Main';
import Contacts from 'pages/Contacts';
import Skills from 'pages/Skills';
import Projects from 'pages/Projects';

@connect((store) => {
    return { cardSide: store.side.cardSide }
})

export default class Root extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <main className={ `card ${this.props.cardSide}` }>
                    <section className="card__front">
                        <Main/>
                    </section>

                    <section className="card__back">
                        <Switch>
                            <Route path='/Contacts' component={Contacts}/>
                            <Route path='/Skills' component={Skills}/>
                            <Route path='/Projects' component={Projects}/>
                        </Switch>
                    </section>
                </main>
            </div>
        )
    }
}

Root.propTypes = {
    cardSide: PropTypes.string,
};