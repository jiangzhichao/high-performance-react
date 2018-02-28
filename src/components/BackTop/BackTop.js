/**
 * Created by jiang on 2018/1/2.
 */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import './BackTop.scss';
import { goBack } from 'react-router-redux';
import { connect } from 'react-redux';

@connect(() => ({}), { goBack })
export default class BackTop extends PureComponent {
    static propTypes = {
        isSearch: PropTypes.bool,
        title: PropTypes.any,
        placeholder: PropTypes.any,
        goBack: PropTypes.func,
        custom: PropTypes.any,
        inputClick: PropTypes.func
    };

    render() {
        return (
            <div
                style={{
                    height: this.props.isSearch ? '52px' : '37px',
                    marginBottom: '-1px'
                }}
            >
                <div className="back-top">
                    <div onClick={this.props.goBack}>
                        <img
                            style={this.props.isSearch ? { top: '17px' } : {}}
                            src="/public/images/btn_fanhui@3x.png"
                        />
                    </div>
                    {this.props.title && this.props.title}
                    {this.props.isSearch &&
                    <SearchInput
                        onClick={this.props.inputClick}
                        placeholder={this.props.placeholder}
                        style={{ backgroundColor: '#fff', marginLeft: '23px', width: 'calc(100% - 23px)' }}
                    />
                    }
                    {this.props.custom && this.props.custom}
                </div>
            </div>
        );
    }
}
