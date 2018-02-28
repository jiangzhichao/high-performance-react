/**
 * Created by jiang on 2018/1/8.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { changeAny, login, getSMSCode, reduceTime, updateThirdId } from 'redux/modules/home';
import { Button, Modal } from 'antd-mobile';

@connect(state => ({
    home: state.home
}), {
    changeAny,
    login,
    getSMSCode,
    reduceTime,
    updateThirdId
})
export default class LoginContent extends PureComponent {
    static propTypes = {
        changeAny: PropTypes.func,
        login: PropTypes.func,
        home: PropTypes.object,
        onClose: PropTypes.func,
        onSubmit: PropTypes.func,
        getSMSCode: PropTypes.func,
        reduceTime: PropTypes.func,
        visible: PropTypes.bool,
        updateThirdId: PropTypes.func,
    };

    render() {
        const { home } = this.props;
        return (
            <Modal
                visible={this.props.visible}
                title="用户登录"
                transparent
                onClose={this.props.onClose}
            >
                <div className="home-login">
                    <div style={{ padding: '13px 5px' }} className="home-login-line">
                        <img src="/public/images/icon_shouji@3x.png" />
                        <input
                            type="number"
                            onChange={e => {
                                if (e.target.value.length > 11) e.target.value = e.target.value.substring(0, 11);
                                this.props.changeAny({ phoneNum: e.target.value });
                            }}
                            value={home.phoneNum}
                            placeholder="请输入手机号"
                        />
                    </div>
                    <div className="home-login-line clearfix">
                        <img src="/public/images/icon_mima@3x.png" />
                        <input
                            onChange={e => {
                                this.props.changeAny({ SMScode: e.target.value });
                            }}
                            value={home.SMScode}
                            placeholder="请输入验证码"
                        />
                        <Button
                            onClick={() => {
                                this.props.getSMSCode()
                                    .then(() => {
                                        this.props.changeAny({
                                            timer: setInterval(this.props.reduceTime, 1000),
                                            sendSMS: true
                                        });
                                    });
                            }}
                            disabled={home.sendSMS || !home.phoneNum}
                            inline
                            type="warning"
                            size="small"
                            style={{
                                float: 'right',
                                width: '102px',
                                background: 'none',
                                color: '#D62F10',
                                border: '1px solid #D62F10'
                            }}
                        >{!home.sendSMS ? '获取验证码' : (home.time + '秒')}</Button>
                    </div>
                    <Button
                        disabled={!home.phoneNum || !home.SMScode}
                        onClick={() => {
                            this.props.login()
                                .then(() => {
                                    this.props.onSubmit();
                                    this.props.updateThirdId();
                                    window.location.reload();
                                });
                        }}
                        style={{ marginTop: '23px' }}
                        type="warning"
                    >确认登录</Button>
                </div>
            </Modal>
        );
    }
}
