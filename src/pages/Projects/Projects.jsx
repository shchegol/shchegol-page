import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Projects extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="work">
                <h2 className="work__title">Fresh</h2>
                <a target="__blank" className="work__link" href="https://mida-studio.ru/">Сайт Дарьи Михайловой</a>
                <a target="__blank" className="work__link" href="http://kollektorov.net/">Современная защита</a>
                <a target="__blank" className="work__link" href="http://be-ka.ru/">Белка</a>

                <div className="mt_2">
                    <Link to="/">
                        Back
                    </Link>
                </div>
            </div>
        )
    }
}