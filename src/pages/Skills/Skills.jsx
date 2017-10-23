import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { flipCard } from '../../redux/actions/mainAction';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

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