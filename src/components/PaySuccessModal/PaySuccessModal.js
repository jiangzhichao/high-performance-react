/**
 * Created by jiang on 2018/1/2.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Modal, Button } from 'antd-mobile';

export default class PaySuccessModal extends PureComponent {
    static propTypes = {
        visible: PropTypes.bool,
        onClose: PropTypes.func,
        price: PropTypes.any,
        submit: PropTypes.func
    };

    render() {
        return (
            <Modal
                className="park-detail"
                visible={this.props.visible}
                transparent
                onClose={this.props.onClose}
            >
                <img style={{ width: '100%' }} src="/public/images/bg_chenggong@3x.png" />
                <div className="park-detail-c">
                    <span className="s1">支付成功！</span><br />
                    <span className="s2">您已成功支付停车费¥{this.props.price}</span><br />
                    <span className="s2">请在15分钟内驶离车场，超时将重新计费</span><br />
                    <Button
                        onClick={this.props.submit}
                        inline
                        style={{ width: '110px', marginTop: '20px' }}
                        type="warning"
                    >确定</Button>
                </div>
            </Modal>
        );
    }
}
