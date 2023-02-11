import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


export default function ListResults() {

    return (
        <List>
                <ListItem>
                  <ListItemText
                    primary="Network"
                    secondary='192.168.1.1'
                  />
                </ListItem>
        </List>
    );
}