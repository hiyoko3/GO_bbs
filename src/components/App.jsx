import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import classNames from 'classnames'
import Grid from 'material-ui/es/Grid/Grid'
import { withRouter } from 'react-router';
import {HashRouter as Router, Route} from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import Drawer from 'material-ui/es/Drawer/Drawer'
import {AppList, AppAdd, AppEdit} from '../modules/index'
import AppDrawerItem from './AppDrawerItem'
import Button from 'material-ui/Button';
import {Add as AddIcon, Menu as MenuIcon, } from 'material-ui-icons';

const drawerWidth = 280;
const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
    },
    drawer: {
        position: 'relative',
        width: drawerWidth,
        padding: ''
    },
    appFrame: {
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    'content-left': {
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: 0,
    },
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            anchor: 'left'
        };
        // Enable my methods.
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
    }

    componentWillMount() {} // Called before DOM content loaded.

    componentDidMount() {} // Called after DOM content loaded.

    handleDrawerOpen() {
        this.setState({open: true});
    }

    handleDrawerClose() {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
        const {anchor, open} = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"
                                    onClick={open ? this.handleDrawerClose : this.handleDrawerOpen}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            BBS with GO
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Router>
                    <div className={classes.appFrame}>
                        <Drawer variant="persistent" open={open} anchor={anchor} classes={{
                            paper: classes.drawer,
                        }}>
                            {AppDrawerItem}
                        </Drawer>

                        <main className={classNames(classes.content, classes[`content-${anchor}`], {
                            [classes.contentShift]: open,
                            [classes[`contentShift-${anchor}`]]: open,
                        })}>
                            <Grid container justify="center" spacing={8}>
                                <Grid item xs={12}>
                                    <Button className={classes.button} href='/#/create' color="secondary">
                                        <AddIcon />
                                        &nbsp;&nbsp;Add article
                                    </Button>
                                </Grid>

                                <Grid item xs={11}>
                                    <div>
                                        <Route exact path='/' component={() => (<p className="App-intro">Hello World!</p>)}/>
                                        <Route path='/list' component={AppList}/>
                                        <Route path='/create' component={AppAdd}/>
                                    </div>
                                </Grid>
                            </Grid>
                        </main>
                    </div>
                </Router>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(App);
