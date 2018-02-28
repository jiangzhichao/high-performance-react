import { PureComponent } from 'react';
import { Toast } from 'antd-mobile';

export default class Loading extends PureComponent {
    componentDidMount() {
        Toast.loading('请稍等...', 0);
    }

    componentWillUnmount() {
        Toast.hide();
    }

    render() {
        return null;
    }
}
