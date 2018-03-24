import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from "material-ui/es/Grid/Grid";

const styles = theme => ({
    root: {
        flexGrow: 1,
    }
});


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { classes } = this.props;

        return (
            <div className="react-app">
                <Grid container className={classes.root} justify="center" spacing={8}>
                    <Grid item xs={11}>
                        <p className="App-intro">
                            Hello World!
                        </p>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
