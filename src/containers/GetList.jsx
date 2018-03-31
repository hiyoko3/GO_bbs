import { connect } from 'react-redux'
import AppList from '../components/AppList'

// Get a data to need with "AppList" from state
const mapStateToProps = state => {
    console.warn('mapStateToProps', state);
    const __length = state.__listReducer.length;
    const __currentState = state.__listReducer[__length - 1];
    return {
        list: __currentState.list
    }
};

const GetList = connect(
    mapStateToProps
)(AppList);

export default GetList