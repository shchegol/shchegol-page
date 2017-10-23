import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {flipCard} from '../../actions/mainAction';
import {connect} from 'react-redux';
import { autobind } from 'core-decorators';

@connect((store)=>{
    return {
        cardSide: store.cardSide
    }
})
@autobind()
export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    flipCard() {
        this.props.dispatch(flipCard());
    }

    render() {
        return (
            <div>
                <h1 className="title">Alexander Shchegol</h1>
                <p className="description">Frontend Developer</p>

                <div className="mt_2">
                    <p>
                        <Link to="/" onClick={ this.flipCard }>
                            Skills
                        </Link>
                    </p>
                    <p>
                        <Link to="/Projects" onClick={ this.flipCard }>
                            Projects
                        </Link>
                    </p>
                    <p>
                        <Link to="/Contacts" onClick={ this.flipCard }>
                            Contacts
                        </Link>
                    </p>
                </div>
            </div>
        )
    }
}