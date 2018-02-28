import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LoadingBar from 'react-redux-loading-bar';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import './app.scss';

@connect(state => ({ loadingBar: state.loadingBar }), {})
export default class App extends Component {
    static propTypes = {
        children: PropTypes.any,
        history: PropTypes.any,
    };

    static contextTypes = {
        store: PropTypes.object,
    };

    render() {
        const loadingBarStyle = {
            backgroundColor: '#497eff',
            zIndex: 99999,
            height: '2px',
            position: 'fixed',
            top: '0',
            left: '0'
        };

        console.log('render app');

        return (
            <div>
                <LoadingBar style={loadingBarStyle} />
                <CSSTransition
                    in={this.props.history.action === 'PUSH'}
                    timeout={200}
                    classNames="router"
                >
                    <div>{this.props.children}</div>
                </CSSTransition>
            </div>
        );
    }
}
