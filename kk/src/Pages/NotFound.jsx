import React from 'react';

export default class NotFound extends React.Component {

    constructor(props) {
        super(props);
        this.state = JSON.parse(window.localStorage.getItem('state')) || {
            count: +0
        }

        let currentImage
        this.image = {
            current: require(`../images/not-found/${this.getCurrentImage(this.state?.count)}.gif`)
        }

        if (window.performance) {
            if (performance.navigation.type == 1) {
                this.increaseCount();
                currentImage = this.state.count
            } else {
                //   alert( "This page is not reloaded");
                this.resetCounter();
            }
        }
    }

    getCurrentImage(count) {
        const lastImage = 10;
        const firstImage = 1;
        if (count<firstImage){
            return firstImage;
        }
        if (count < lastImage){
            return Math.round(this.state?.count);
        }
        return lastImage;
    }

    setState(state) {
        window.localStorage.setItem('state', JSON.stringify(state));
        super.setState(state);
    }
    increaseCount = () => {
        return this.setState({ ...this.state, count: this.state.count + 0.5 });
    }

    resetCounter = () => {
        return this.setState({ ...this.state, count: 1 });
    }

    render() {
        return (
            <>
                <h1>Página não encontrada. ):</h1>
                <img src={this.image.current} alt="Not found" width="100%" />
            </>
        )
    }
}
