/**
 * Created by jiang on 2017/12/29.
 */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Map.scss';

export default class App extends Component {
    static propTypes = {
        style: PropTypes.object,
        id: PropTypes.string,
        children: PropTypes.any,
        getMapObj: PropTypes.func,
        mapClick: PropTypes.func
    };

    componentDidMount() {
        const map = this.map = new window.AMap.Map(this.props.id || 'map', {
            resizeEnable: true,
            zoom: 11,
            center: [104.087177, 30.648448]
        });

        const marker = new window.AMap.Marker({
            position: [104.087177, 30.648448],
            clickable: true,
            icon: new window.AMap.Icon({
                size: new window.AMap.Size(27, 42),
                image: 'http://wechatpark.wenweikeji.com/public/images/icon_wuchewei@3x.png',
                imageOffset: new window.AMap.Pixel(0, 0),
                imageSize: new window.AMap.Size(27, 42)
            })
        });

        marker.setMap(map);
        const content = document.createElement('div');

        content.innerHTML =
            `<div class="cus-map">
            <img src="http://wechatpark.wenweikeji.com/public/images/yuyuekuang@3x.png" />
            <div>
            <span class="cus-t">四川大学华西医院停车场</span>
            <span class="cus-a">点击预约 >></span>
            </div>
            </div>`;

        const infoWindow = new window.AMap.InfoWindow({
            isCustom: true,
            content: content,
            offset: new window.AMap.Pixel(4, -25)
        });

        marker.on('click', () => {
            infoWindow.open(map, marker.getPosition());
        });

        if (this.props.getMapObj) this.props.getMapObj(map);
    }

    shouldComponentUpdate(nextP) {
        const props = this.props;
        return !props.data === nextP.data || !props.style === nextP.style || !props.id === nextP.id || !props.children === nextP.children;
    }

    componentWillUnmount() {
        // if (this.map) this.map.destroy();
    }

    render() {
        console.log('render');
        return (
            <div
                style={{ position: 'relative' }}
            >
                {this.props.children}
                <div
                    onTouchStart={() => {
                        if (this.props.mapClick) this.props.mapClick();
                    }}
                    style={this.props.style}
                    className="map"
                    id={this.props.id || 'map'}
                />
            </div>
        );
    }
}
