import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Heart.scss';

export default class Heart extends Component {
    static propTypes = {
        style: PropTypes.any
    };

    render() {
        return (
            <div style={this.props.style}>
                <div className="heart-box">
                    <div className="heart-round1" />
                    <div className="heart-round2" />
                    <div className="heart-rec" />
                </div>
            </div>
        );
    }
}
