import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import {red} from 'material-ui/colors';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
    },
    card: {
        minWidth: 290,
        maxWidth: 390,
        maxHeight: 430,
        minHeight: 350,
        margin: 12
    },
    media: {
        height: 150,
    },
    actions: {
        display: 'flex',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    deleteIcon: {
        marginLeft: 'auto'
    }
});

const List = ({list}) => (
    <div>
    </div>
);

// class AppList extends Component {
//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     comments: [],
//         //     dense: false,
//         // };
//         // // Enable my methods.
//         // this.getComments = this.getComments.bind(this);
//     }
//
//     // getComments() {
//     //     axios.get('http://localhost:8080/index')
//     //         .then(res => {
//     //             this.setState({comments: res.data.result});
//     //         }).catch(res => {
//     //             console.error(res);
//     //         });
//     // }
//     //
//     // deleteArticle (id) {
//     //     if(confirm('Do you delete this article?')){
//     //         axios.post('http://localhost:8080/delete/' + id)
//     //             .then(res => {
//     //                 console.warn(res);
//     //                 this.setState({comments: this.state.comments.filter((v) => v.User_id !== id)})
//     //             }).catch(res => {
//     //                 console.error(res);
//     //             });
//     //     }
//     // }
//
//     componentWillMount() { // Called before DOM content loaded.
//         // console.warn('WillMount by App List')
//     }
//
//     componentDidMount() { // Called after DOM content loaded.
//         // this.getComments();
//         // console.warn('DidMount by App List')
//     }
//
//     render() {
//         const {classes} = this.props;
//         const {comments, dense} = this.state;
//         let list = [];
//
//         // for (let [idx, c] of comments.entries()) {
//         //     list.push(
//         //         <div key={idx}>
//         //             <Grid item xs={12} sm={6} md={4}>
//         //                 <Card className={classes.card}>
//         //                     <CardHeader
//         //                         avatar={<Avatar aria-label="Article" className={classes.avatar}>A</Avatar>}
//         //                         action={
//         //                             <IconButton>
//         //                                 <MoreVertIcon />
//         //                             </IconButton>
//         //                         }
//         //                         title={c.Name}
//         //                         subheader={c.Created_at ? c.Created_at : 'no-date'}
//         //                     />
//         //                     <CardMedia
//         //                         className={classes.media}
//         //                         image={c.Image_url[0] ? c.Image_url[0] : 'no-image.png'}
//         //                         title={'article-image-' + idx}
//         //                     />
//         //                     <CardContent>
//         //                         <Typography component="p">
//         //                             {c.Comment}
//         //                         </Typography>
//         //                     </CardContent>
//         //                     <CardActions className={classes.actions} >
//         //                         <IconButton aria-label="Add to favorites">
//         //                             <FavoriteIcon />
//         //                         </IconButton>
//         //                         <IconButton aria-label="Share">
//         //                             <ShareIcon />
//         //                         </IconButton>
//         //                         <IconButton className={classes.deleteIcon} onClick={this.deleteArticle.bind(this, c.User_id)} aria-label="Delete">
//         //                             <DeleteIcon />
//         //                         </IconButton>
//         //                     </CardActions>
//         //                 </Card>
//         //             </Grid>
//         //         </div>
//         //     )
//         // }
//
//         return (
//             <div className={classes.root}>
//                 <Typography variant="title" className={classes.title}>
//                     Article Index
//                 </Typography>
//                 <Grid container spacing={16}>
//                     {list}
//                 </Grid>
//             </div>
//         );
//     }
// }

class AppList extends Component {
    constructor(props, list) {
        console.warn('props', props, list);
        super(props);
    }

    componentWillMount() { // Called before DOM content loaded.
        // console.warn('WillMount by App List')
    }

    componentDidMount() { // Called after DOM content loaded.
        // this.getComments();
        // console.warn('DidMount by App List')
    }

    render() {
        const {classes} = this.props;
        let list = [];
        return (
            <div className={classes.root}>
                <Typography variant="title" className={classes.title}>
                    Article Index
                </Typography>
                <Grid container spacing={16}>
                    {list}
                </Grid>
            </div>
        );
    }
}

AppList.propTypes = {
    classes: PropTypes.object.isRequired,
    result: PropTypes.shape({
        list: PropTypes.arrayOf(
            PropTypes.shape({
                _id: PropTypes.object.isRequired,
                Comment: PropTypes.string.isRequired,
                Name: PropTypes.string.isRequired,
                Created_at: PropTypes.string.isRequired,
                Image_url: PropTypes.string.isRequired,
            })
        ),
        receiveAt: PropTypes.string.isRequired
    })
};

export default withStyles(styles)(AppList);

