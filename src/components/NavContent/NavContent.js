/**
 * Created by jiang on 2017/12/29.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import './NavContent.scss';

export default class NavContent extends PureComponent {
    static propTypes = {
        onCancel: PropTypes.func,
    };

    render() {
        return (
            <div className="nac-c">
                <div className="nac-l">
                    <span>选择导航方式</span>
                    <span>
                        <a
                            style={{ color: '#108ee9' }}
                            href={`baidumap://map/direction?mode=[transit:公交,driving:驾车]&origin=30.648448,104.087177&destination=${window.lat},${window.lon}`}>百度地图</a>
                    </span>
                    <span
                        onClick={this.props.onCancel}
                        style={{ color: '#108ee9' }}
                    >高德地图</span>
                </div>
                <span className="nac-custom" onClick={this.props.onCancel}>
                    取消
                </span>
            </div>
        );
    }
}
