/**
 * Created by jiang on 2018/1/2.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Modal, Button } from 'antd-mobile';

export default class CancelSuccessModal extends PureComponent {
    static propTypes = {
        visible: PropTypes.bool,
        onClose: PropTypes.func,
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
                    <span className="s1">取消预约成功！</span><br />
                    <span className="s2">本次取消您无需支付金额</span><br />
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
