import { combineReducers } from 'redux';
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar';

import info from './info';

export default combineReducers({
    loadingBar,
    info,
});
