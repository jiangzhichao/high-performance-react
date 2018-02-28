/**
 * Created by jiang on 2017/12/29.
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './SearchInput.scss';

export default class SearchInput extends PureComponent {
    static propTypes = {
        autoFocus: PropTypes.bool
    };

    componentDidMount() {
        if (this.props.autoFocus) this.dom.focus();
    }

    render() {
        const { autoFocus, ...rest } = this.props;
        return (
            <input
                ref={e => this.dom = e}
                {...rest}
                className="search-input"
            />
        );
    }
}
