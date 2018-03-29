import React, {Component} from 'react'
import {Link} from "react-router-dom"
import List, {ListItem, ListItemIcon, ListItemText} from 'material-ui/List'
import { Home as HomeIcon, Inbox as InboxIcon} from 'material-ui-icons'

// Build drawer items.
const AppDrawerItem = (
    <div>
        <List>
            <ListItem component={Link} to="/" button>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary="Home"/>
            </ListItem>
            <ListItem component={Link} to="/list" button>
                <ListItemIcon><InboxIcon/></ListItemIcon>
                <ListItemText primary="Comments"/>
            </ListItem>
            {/*<ListItem component={Link} to="/submit" button>*/}
                {/*<ListItemIcon><DraftsIcon/></ListItemIcon>*/}
                {/*<ListItemText primary="Write a comment"/>*/}
            {/*</ListItem>*/}
        </List>
    </div>
);

export default AppDrawerItem;