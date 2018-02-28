/**
 * Created by jiang on 2018/1/2.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Modal } from 'antd-mobile';

export default class AchieveCouponModal extends PureComponent {
    static propTypes = {
        visible: PropTypes.bool,
        onClose: PropTypes.func,
    };

    render() {
        return (
            <Modal
                className="park-detail"
                visible={this.props.visible}
                transparent
                onClose={this.props.onClose}
            >
                <img style={{ width: '100%' }} src="/public/images/btn_fenxiangquan@3x.png" />
                <div className="park-detail-c">
                    <span className="s1" style={{ marginTop: '30px', display: 'inline-block' }}>恭喜您获得优惠券！</span><br />
                    <span className="s2" style={{ marginTop: '40px' }}>已自动存入券包</span><br />
                </div>
                <img
                    onClick={this.props.onClose}
                    style={{
                        width: '30px',
                        position: 'absolute',
                        bottom: '-70px',
                        left: 'calc(50% - 15px)'
                    }}
                    src="/public/images/btn_close@3x.png"
                />
            </Modal>
        );
    }
}
