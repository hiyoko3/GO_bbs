import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import PropTypes from 'prop-types';

const styles = theme => ({

});

class AppEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        // Enable my methods.
    }

    render () {
        return (
            <div>
                <p>Edit</p>
            </div>
        );
    }
}

AppEdit.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppEdit);
