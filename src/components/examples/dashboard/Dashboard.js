import React from "react";
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Assessment, EmojiEmotions, EmojiEvents } from "@material-ui/icons";
import { ResponsiveRechart } from "components/examples";

const Dashboard = ({ classes, ...restProps }) => {
  const icons = [Assessment, EmojiEmotions, EmojiEvents];

  return (
    <div className={classes.container}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Toolbar />
        <div className={classes.drawerContainer}></div>
        <List>
          {icons.map((Icon, index) => (
            <ListItem button key={index}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText>
                {index > 0 ? `Item ${index}` : "Charts"}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.content}>
        <div className={classes.chartContainer}>
          <ResponsiveRechart />
        </div>
        <div className={classes.chartContainer}>
          <ResponsiveRechart />
        </div>
        <div className={classes.chartContainer}>
          <ResponsiveRechart />
        </div>
        <div className={classes.chartContainer}>
          <ResponsiveRechart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
