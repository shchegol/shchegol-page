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
                <Link to="/" className="page__close" onClick={ this.handleClick }>
                    Back
                </Link>

                <header className="title">
                    <h1>Skills</h1>
                </header>

                <section className="row">
                    <div className="col">
                        <table className="grade">
                            <tbody>
                            <tr>
                                <td className="grade__title">HTML/CSS</td>
                                <td className="grade__scale"><span>|||||||||||||||</span>|</td>
                            </tr>
                            <tr>
                                <td className="grade__title">JS</td>
                                <td className="grade__scale"><span>|||||||||</span>|||||||</td>
                            </tr>
                            <tr>
                                <td className="grade__title">REACT</td>
                                <td className="grade__scale"><span>||||||</span>||||||||||</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        )
    }
}

Main.propTypes = {
    dispatch: PropTypes.func
};