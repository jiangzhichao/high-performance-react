/**
 * Created by jiang on 2017/12/29.
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './NavList.scss';

export default class NavList extends Component {
    static propTypes = {
        data: PropTypes.object,
        navClickCb: PropTypes.func,
        listClickCb: PropTypes.func,
        style: PropTypes.object,
        showShare: PropTypes.bool,
        showNum: PropTypes.bool
    };

    shouldComponentUpdate(nextP) {
        return !this.props.data === nextP.data;
    }

    render() {
        const { data = {} } = this.props;
        return (
            <div
                style={this.props.style}
                className="nav-list-c"
                onClick={this.props.listClickCb}
            >
                <div
                    className="nav-list-r"
                    onClick={e => {
                        if (this.props.navClickCb) {
                            e.stopPropagation();
                            this.props.navClickCb();
                        }
                    }}>
                    <img src="/public/images/btn_daohang@3x.png" /><br />
                    <span className="s-s">导航</span>
                </div>
                <div className="nav-list-l">
                    <span className="s-t">{this.props.showNum ? (data.name + data.parkCarNum) : data.name}</span><br />
                    <span className="s-r">{`¥${data.price || ' - '}/h`}</span>
                    <span className="s-s">{this.props.showShare ?
                        <span><span
                            style={{ marginRight: '12px' }}>剩余车位：{data.freeParkcar}</span><span>{data.shareType === 1 ? '有' : '无'}共享车位</span></span> : (data.freeParkcar > 0 ? '有空闲车位' : '无空闲车位')}</span>
                </div>
            </div>
        );
    }
}
