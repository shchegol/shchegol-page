import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import {connect} from 'react-redux';
import {flipCard} from '../../actions/mainAction';
import { autobind } from 'core-decorators';

import Main from '../../pages/Main';
import Contacts from '../../pages/Contacts';
import Skills from '../../pages/Skills';
import Projects from '../../pages/Projects';

@connect((store)=>{
    return {
        cardSide: store.cardSide
    }
})
@autobind()
export default class Card extends Component {
    constructor(props) {
        super(props);
    }

    // flipCard() {
    //     console.log('flipCard function');
    //     let cardState = this.state.cardSide === "" ? "card_flip" : "";
    //     this.setState({
    //         cardSide: cardState
    //     })
    // }

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