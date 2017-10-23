import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { flipCard } from '../../redux/actions/mainAction';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';

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
            <div className="contacts">
                <h2 className="contacts__title">Контакты</h2>
                <a className="contacts__link" href="tel:+79261895848">+7 (926) 189–58–48</a>
                <a className="contacts__link" target="__blank" href="http://vk.com/zelenzoom">ВКонтакте</a>

                <div className="mt_2">
                    <Link to="/" onClick={ this.handleClick }>
                        Back
                    </Link>
                </div>
            </div>
        )
    }
}