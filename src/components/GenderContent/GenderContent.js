/**
 * Created by jiang on 2017/12/29.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

export default class GenderContent extends PureComponent {
    static propTypes = {
        onCancel: PropTypes.func,
        onChange: PropTypes.func
    };

    render() {
        return (
            <div className="nac-c">
                <div className="nac-l">
                    <span>性别</span>
                    <span
                        onClick={() => {
                            this.props.onChange(1);
                        }}
                        style={{ color: '#108ee9' }}
                    >男</span>
                    <span
                        onClick={() => {
                            this.props.onChange(0);
                        }}
                        style={{ color: '#108ee9' }}
                    >女</span>
                </div>
                <span className="nac-custom" onClick={this.props.onCancel}>
                    取消
                </span>
            </div>
        );
    }
}
