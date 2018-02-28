/**
 * Created by jiang on 2018/1/2.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { Modal, Button } from 'antd-mobile';

export default class CheckPayModal extends PureComponent {
    static propTypes = {
        visible: PropTypes.bool,
        onClose: PropTypes.func,
        time: PropTypes.any,
        price: PropTypes.any,
        submit: PropTypes.func,
        discount: PropTypes.any
    };

    render() {
        return (
            <Modal
                visible={this.props.visible}
                transparent
                onClose={this.props.onClose}
            >
                <div className="park-detail-overtime">
                    <span>订单确认缴费</span><br />
                    <span>
                        本次停车时长
                        <span
                            style={{ color: '#D62F10' }}
                        >&nbsp;{this.props.time}</span>
                    </span><br />
                    <span
                        style={{ color: '#888' }}
                    >
                        本次停车缴费
                        <span style={{ color: '#D62F10' }}>&nbsp;￥{this.props.price}</span>
                    </span><br />
                    {this.props.discount &&
                    <span
                        style={{ fontSize: '12px', color: '#bbb' }}
                    >
                            优惠券抵扣 <span style={{ color: '#D62F10' }}>&nbsp;-￥{this.props.discount}</span>
                        </span>
                    }
                    <div style={{ paddingTop: '15px' }}>
                        <Button
                            onClick={this.props.onClose}
                            type="warning"
                            inline
                            style={{
                                marginRight: '20px',
                                background: 'none',
                                color: '#D62F10',
                                border: '1px solid #D62F10',
                                width: '110px'
                            }}
                        >取消</Button>
                        <Button
                            onClick={this.props.submit}
                            type="warning"
                            inline
                            style={{
                                width: '110px'
                            }}
                        >支付</Button>
                    </div>
                </div>
            </Modal>
        );
    }
}
