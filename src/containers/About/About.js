/**
 * Created by jiang on 2017/12/29.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './About.scss';

export default class About extends Component {
    static propTypes = {
        history: PropTypes.any,
    };

    render() {
        return (
            <div
                style={{ width: '100%', background: '#fffb33' }}
                onClick={() => {this.props.history.goBack();}}
            >go home</div>
        );
    }
}
