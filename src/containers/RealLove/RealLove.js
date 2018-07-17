import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from 'redux/modules/realLove';
import Cupid from './Cupid/Cupid';
import Heart from './Heart/Heart';
import Photo from './Photo/Photo';
import { Bg } from 'components';

@connect(state => ({ realLove: state.realLove }), actions)
export default class RealLove extends Component {
    static propTypes = {
        realLove: PropTypes.any,
        change: PropTypes.func,
        init: PropTypes.func,
        heartMoveCheck: PropTypes.func
    };

    constructor(...arg) {
        super(...arg);

        this.state = {};
    }

    componentDidMount() {
        this.props.init();
        this.time = setInterval(this.props.heartMoveCheck, 1);

        const { realLove } = this.props;
        const { readyPhotos } = realLove;
        const sleep = 10;
        const newFlyPhotos = [];
        const addPhoto = (i) => {
            newFlyPhotos.push(readyPhotos[i]);
            this.props.change({ flyPhotos: [...newFlyPhotos] });
        };
        for (let i = 0; i < readyPhotos.length; i++) {
            setTimeout(() => {
                addPhoto(i);
            }, sleep * i);
        }
    }

    componentWillUnmount() {
        clearInterval(this.time);
    }

    render() {
        const { realLove } = this.props;
        return (
            <div ref="el" style={{ height: '100%' }}>
                <Bg />
                {realLove.currentPhoto &&
                <div
                    className="current-photo animated rotateIn"
                    style={{ width: document.body.clientHeight / 2, height: document.body.clientHeight / 2, }}
                >
                    <div>
                        <img src={'public/images/' + realLove.currentPhoto} />
                    </div>
                </div>
                }
                <div className="photo-c">
                    <ul className="photo-header clearfix">
                        {
                            realLove.flyPhotos.map(i => (
                                <li className="animated fadeInDown" key={i.id}>
                                    <Photo url={i.url} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {realLove.cupidReady && <Cupid style={realLove.cupidStyle} />}
                {realLove.hearts.map(i => <Heart key={i.id} style={i} />)}
            </div>
        );
    }
}
