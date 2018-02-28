/**
 * Created by jiang on 2018/1/2.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Modal } from 'antd-mobile';

export default class PayWayModal extends PureComponent {
    static propTypes = {
        visible: PropTypes.bool,
        onClose: PropTypes.func,
        title: PropTypes.any,
        price: PropTypes.any,
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
                        <span>{this.props.title || '停车缴费'}</span>
                        <span
                            onClick={this.props.onClose}
                        >取消</span>
                    </div>
                    <div className="buy-number">
                        ￥{this.props.price}
                    </div>
                    <div
                        onClick={() => {
                            this.props.submit('4');
                        }}
                        className="buy-list"
                    >
                        <img src="/public/images/icon_weixinzhifu@3x.png" />
                        <span>微信支付</span>
                        <img src="/public/images/btn_jinru@3x.png" />
                    </div>
                    <div
                        className="buy-list"
                        onClick={() => {
                            this.props.submit('301');
                        }}
                    >
                        <img src="/public/images/icon_yinhangka@3x.png" />
                        <span>银行卡支付</span>
                        <img src="/public/images/btn_jinru@3x.png" />
                    </div>
                </div>
            </Modal>
        );
    }
}
