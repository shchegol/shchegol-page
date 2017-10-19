import React, { Component } from 'react'

export default class MainLayout extends Component {
    constructor(props) {
        super(props);

        this.state = { cardSide: "" };
        this.flipCard = this.flipCard.bind(this);
    }

    flipCard() {
        let cardState = this.state.cardSide === "" ? "card_flip" : "";
        this.setState({
            cardSide: cardState
        })
    }

    render() {
        return (
            <div className="container">
                <main className={ `card ${this.state.cardSide}` } onClick={ this.flipCard }>
                    <section className="card__front">
                        Front
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aut consectetur culpa delectus
                            distinctio ducimus fugit hic, illo libero minima molestiae optio placeat quisquam quos
                            reiciendis rem totam velit voluptatem.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, aut consectetur culpa delectus
                            distinctio ducimus fugit hic, illo libero minima molestiae optio placeat quisquam quos
                            reiciendis rem totam velit voluptatem.
                        </p>
                    </section>

                    <section className="card__back">
                        back
                    </section>
                </main>
            </div>
        )
    }
}