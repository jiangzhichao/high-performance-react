/**
 * Created by jiang on 2017/12/29.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './Title.scss';

export default class Title extends PureComponent {
    static propTypes = {
        children: PropTypes.any,
        style: PropTypes.object,
        titleClick: PropTypes.func
    };

    render() {
        return (
            <div
                onClick={this.props.titleClick}
                style={this.props.style}
                className="title-content"
            >
                <span className="title-c">
                    <span className="title-s" />
                    <span>{this.props.children}</span>
                </span>
            </div>
        );
    }
}
