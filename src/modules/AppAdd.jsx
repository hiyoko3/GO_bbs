import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'
import Typography from "material-ui/es/Typography/Typography"
import Button from "material-ui/es/Button/Button"
import FormControl from "material-ui/es/Form/FormControl"
import Card, {CardContent, CardHeader} from 'material-ui/Card'
import Grid from 'material-ui/Grid'
import Dropzone from 'react-dropzone';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 500,
    },
    formControl: {
        margin: 4,
    },
    submit: {
    },
    rightBlock: {
        textAlign: 'right',
    },
    centerBlock: {
        textAlign: 'center',
    },
    previewBox: {
        border: '1px solid',
        margin: 4,
        padding: 4,
    },
    removeImage: {
        textDecoration: 'underline',
        color: 'blue',
        cursor: 'pointer',
    },
    dropZone: {
        width: '100%',
        height: '150px',
        background: '#fcfcfc',
        borderRadius: 5,
        border: '2px dashed #cfcfcf',
        cursor: 'pointer'
    }
});

class AppAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            comments: '',
            images: [],
            imagesPreview: [],
            printCount: 5
        };
        // Enable my methods.
        this.nameChange = this.nameChange.bind(this);
        this.commentChange = this.commentChange.bind(this);
        this.submit = this.submit.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    componentWillMount() { // Called before DOM content loaded.
        // console.warn('WillMount by App List')
    }

    componentDidMount() { // Called after DOM content loaded.
        // console.warn('DidMount by App List')
    }

    nameChange(event) {
        this.setState({name: event.target.value,});
    };

    commentChange(event) {
        this.setState({comments: event.target.value,});
    };

    submit () {

    }
    onDrop(acceptedFiles, rejectedFiles) {
        // console.log('Accepted files: ', acceptedFiles[0].name);
        let images = this.state.images;
        let imagesPreview = [];
        if(images.length < this.state.printCount){
            images.push(acceptedFiles);
            for(let i in images){
                imagesPreview.push(
                    <Grid key={i} item xs={6} sm={3} className={this.props.classes.centerBlock}>
                        <img src={images[i][0].preview} width="80" height="80" />
                        <p className={this.props.classes.removeImage}>clear</p>
                    </Grid>
                )
            }
            this.setState({
                images,
                imagesPreview: imagesPreview
            });
        } else {
            alert("You have reached the limit of printing files at a time")
        }
    }

    render() {
        const {classes} = this.props;
        const {name, comments, images, imagesPreview} = this.state;
        let previewArea = null;

        if(imagesPreview.length > 0) {
            previewArea = (
                <Grid container spacing={16} className={classes.previewBox}>
                    <Grid item xs={12}>
                        <h4>preview</h4>
                    </Grid>
                    {imagesPreview}
                </Grid>
            );
        }

        return (
            <div className={classes.root}>
                <Card className="">
                    <CardHeader title={
                        <Typography variant="title" className={classes.title}>
                            Create Article
                        </Typography>
                    }/>
                    <CardContent>
                        <form className={classes.container} autoComplete="off">
                            <Grid container spacing={16}>
                                <Grid item xs={12} sm={12}>
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            required
                                            id="name"
                                            label="Name"
                                            className={classes.textField}
                                            onChange={this.nameChange}
                                            helperText="User name"
                                            margin="normal"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            required
                                            id="multiline-static"
                                            label="Comments"
                                            multiline
                                            rows="5"
                                            onChange={this.commentChange}
                                            helperText="Your comment"
                                            className={classes.textField}
                                            margin="normal"
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} className={classes.centerBlock}>
                                    <Dropzone onDrop={(files) => this.onDrop(files)} className={classes.dropZone}>
                                        <div>Try dropping some files here, or click to select files to upload.</div>
                                    </Dropzone>
                                </Grid>
                                <Grid item xs={12}>
                                    {previewArea}
                                </Grid>
                                <Grid item xs={12} sm={12} className={classes.rightBlock}>
                                    <Button variant="raised" className="" onClick={this.submit} color="primary">Post!</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }

}

AppAdd.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAdd);
