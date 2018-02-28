/**
 * Created by jiang on 2018/1/2.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Modal } from 'antd-mobile';

export default class ShareModal extends PureComponent {
    static propTypes = {
        visible: PropTypes.bool,
        onClose: PropTypes.func,
        submit: PropTypes.func
    };

    render() {
        return (
            <Modal
                popup
                visible={this.props.visible}
                maskClosable
                animationType="slide-up"
                onClose={this.props.onClose}
            >
                <div className="park-detail-buy">
                    <div className="buy-title">
                        <span>分享到</span>
                    </div>
                    <div className="add-car-share">
                        <div onClick={() => this.props.submit(1)}>
                            <img src="/public/images/share_pengyouquan@3x.png" />< br />
                            <span>朋友圈</span>
                        </div>
                        <div onClick={() => this.props.submit(2)}>
                            <img src="/public/images/share_weixin@3x.png" />< br />
                            <span>微信好友</span>
                        </div>
                        <div onClick={() => this.props.submit(3)}>
                            <img src="/public/images/share_qq@3x.png" />< br />
                            <span>QQ</span>
                        </div>
                    </div>
                </div>
            </Modal>
        );
    }
}
