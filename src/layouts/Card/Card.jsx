import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import Main from '../../pages/Main'
import Contacts from '../../pages/Contacts'
import Skills from '../../pages/Skills'
import Projects from '../../pages/Projects'

export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = { cardSide: "" };
        this.flipCard = this.flipCard.bind(this);
    }

    flipCard() {
        console.log('flipCard function');
        let cardState = this.state.cardSide === "" ? "card_flip" : "";
        this.setState({
            cardSide: cardState
        })
    }

    render() {
        return (
            <div className="container">
                <main className={ `card ${this.state.cardSide}` }>
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