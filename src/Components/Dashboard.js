import React from "react";
import {
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core"; 

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 100,
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 20, 
      marginRight:20, 
      paddingLeft: 50,
      paddingRight: 50,
        },
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth, 
    },
  },
  card: {
    maxWidth: 420, 
    margin:15 ,
  },
  media: {
    height: 140,
  },
}));


const cardData = [
  {
    title: "Total Number of Teachers",
    description: "Total Number of teachers in the system.",
  },
  {
    title: "Total Number of Students",
    description: "Total Number of registered student",
  },
  {
    title: "Profile",
    description: "Description of the User",
  },
];

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {/* Cards */}
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
