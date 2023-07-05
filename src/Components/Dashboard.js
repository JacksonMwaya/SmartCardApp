import React from "react"; 
import { useEffect  } from "react";  
import { useState } from "react";

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
    value: 0,
  },
  {
    title: "Total Number of Students",
    description: "Total Number of registered student",  
    value: 0,

  },
  {
    title: "Profile",
    description: "Description of the User", 
    value: "",
  },
];

const Dashboard = ({ setLecturerId }) => {  

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Perform an API request to check the user's authentication status
    const getInfo = async () => {
      try {
        const response = await fetch(
          "http://192.168.43.109:8080/smartcardapp-api/home.php",
          {
            //modify path
            method: "GET",
            Accept: "application/json",
            "Content-Type": "application/json", 
            credentials: "include",
          }
        );
        const data = await response.json(); 
        // Update the cardData values with the fetched data 
        cardData[0].value = data.summary.total_lecturers;
        cardData[1].value = data.summary.total_students;
        cardData[2].value =  Object.entries(data.user)
        .map(([key, value]) => `${key} : ${value}`)
        .join("   \n ");

        const lecturerId = `${data.user['Lecturer ID']}`;
        // Example lecturer ID
        setLecturerId(lecturerId);
        
        setDataLoaded(true); // Set dataLoaded to true

      } catch (error) {
        console.error(error);
      }
    };

    getInfo(); 
    setDataLoaded(false);
  }, [setLecturerId]);

  const classes = useStyles();

  return ( 
    <div className={classes.root}>
    <Grid container spacing={1}>
      {/* Cards */}
      {dataLoaded &&
        cardData.map((card, index) => ( 
          <Grid item xs={12} sm={6} md={4} key={index}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="pre" style={{ fontSize: "20px" }}>
                  {card.value}
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
