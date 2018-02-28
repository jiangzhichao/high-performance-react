/**
 * Created by jiang on 2017/12/29.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Home.scss';
import { connect } from 'react-redux';
import { changeText } from 'redux/modules/info';
import { Input } from 'antd';

@connect(state => ({ info: state.info }), { changeText })
export default class Home extends Component {
    static propTypes = {
        history: PropTypes.any,
        info: PropTypes.any,
        changeText: PropTypes.func
    };

    shouldComponentUpdate(nextP) {
        return !(this.props.info === nextP.info);
    }

    render() {
        console.log('render home');
        return (
            <div
                style={{ width: '100%', background: '#5884ff' }}
                onClick={() => {this.props.history.push('/about');}}
            >
                <Input
                    onClick={e => e.stopPropagation()}
                    value={this.props.info.text}
                    onChange={e => {this.props.changeText(e.target.value);}}
                />
                go about
            </div>
        );
    }
}
