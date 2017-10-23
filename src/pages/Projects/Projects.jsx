import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { flipCard } from '../../redux/actions/mainAction';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

@connect((store) => {
    return { cardSide: store.side.cardSide }
})
@autobind()
export default class Projects extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        this.props.dispatch(flipCard());
    }

    render() {
        return (
            <div className="work">
                <h2 className="work__title">Fresh</h2>
                <a target="__blank" className="work__link" href="https://mida-studio.ru/">Сайт Дарьи Михайловой</a>
                <a target="__blank" className="work__link" href="http://kollektorov.net/">Современная защита</a>
                <a target="__blank" className="work__link" href="http://be-ka.ru/">Белка</a>

                <div className="mt_2">
                    <Link to="/" onClick={ this.handleClick }>
                        Back
                    </Link>
                </div>
            </div>
        )
    }
}