import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

class AppEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // Enable my methods.
    }

    componentWillMount() { // Called before DOM content loaded.
        // console.warn('WillMount by App List')
    }

    componentDidMount() { // Called after DOM content loaded.
        // console.warn('DidMount by App List')
    }

    render () {
        return (
            <div className={classes.root}>
                <p>Edit</p>
            </div>
        );
    }
}

AppEdit.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppEdit);
