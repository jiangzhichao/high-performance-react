import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cupid from './cupid.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as _actions from 'redux/modules/realLove';

@connect(() => ({}), dispatch => ({ actions: bindActionCreators(_actions, dispatch) }))
export default class Cupid extends Component {
    static propTypes = {
        style: PropTypes.any,
        actions: PropTypes.any
    };

    constructor(...arg) {
        super(...arg);

        this.keyBuf = {};
    }

    componentDidMount() {
        this.init();
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.style !== this.props.style;
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.addMoving);
        document.removeEventListener('keyup', this.removeMoving);
    }

    init = () => {
        document.addEventListener('keydown', this.addMoving);
        document.addEventListener('keyup', this.removeMoving);
    };

    addMoving = ({ keyCode }) => {
        const { goLeft, goTop, goRight, goBottom, fire } = this.props.actions;

        if (keyCode === 37 && !this.keyBuf[keyCode]) {
            this.keyBuf[keyCode] = true;
            this.timeLeft = setInterval(goLeft, 1);
        } else if (keyCode === 38 && !this.keyBuf[keyCode]) {
            this.keyBuf[keyCode] = true;
            this.timeUp = setInterval(goTop, 1);
        } else if (keyCode === 39 && !this.keyBuf[keyCode]) {
            this.keyBuf[keyCode] = true;
            this.timeRight = setInterval(goRight, 1);
        } else if (keyCode === 40 && !this.keyBuf[keyCode]) {
            this.keyBuf[keyCode] = true;
            this.timeDown = setInterval(goBottom, 1);
        } else if (keyCode === 32 && !this.keyBuf[keyCode]) {
            this.keyBuf[keyCode] = true;
            fire({
                left: this.props.style.left,
                top: this.props.style.top
            });
            this.timeFight = setInterval(() => {
                fire({
                    left: this.props.style.left,
                    top: this.props.style.top
                });
            }, 300);
        }
    };

    removeMoving = ({ keyCode }) => {
        if (keyCode === 37) {
            this.keyBuf[keyCode] = false;
            clearInterval(this.timeLeft);
        } else if (keyCode === 38) {
            this.keyBuf[keyCode] = false;
            clearInterval(this.timeUp);
        } else if (keyCode === 39) {
            this.keyBuf[keyCode] = false;
            clearInterval(this.timeRight);
        } else if (keyCode === 40) {
            this.keyBuf[keyCode] = false;
            clearInterval(this.timeDown);
        } else if (keyCode === 32) {
            this.keyBuf[keyCode] = false;
            clearInterval(this.timeFight);
        }
    };

    render() {
        return (
            <div ref="el" style={this.props.style}>
                <img
                    style={{
                        width: '100%',
                        height: '100%'
                    }}
                    src={cupid}
                />
            </div>
        );
    }
}
