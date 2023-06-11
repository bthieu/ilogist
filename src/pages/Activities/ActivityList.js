import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";

export default function ActivityList({activities}) {
  return (
    <Box>
      <List>
        { activities.map(({id, name, updatedAt}) => (
          <ListItem key={id}>
            <ListItemText primary={name} secondary={(new Date(updatedAt)).toLocaleString()}/>
          </ListItem>
        )) }
      </List>
    </Box>
  );
}
