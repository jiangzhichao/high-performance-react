import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'redux/modules/realLove';
import './Photo.scss';

@connect(() => ({}), actions)
export default class Photo extends Component {
    static propTypes = {
        url: PropTypes.any,
        style: PropTypes.any
    };

    constructor(...arg) {
        super(...arg);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.style !== this.props.style ||
            nextProps.url !== this.props.url;
    }

    render() {
        return (
            <div
                ref="el"
                style={this.props.style}
                className="photo"
            >
                <img src={'public/images/' + this.props.url} />
            </div>
        );
    }
}
