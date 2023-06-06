import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  Button,
  Grid,
  Paper,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: 100,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginBottom: 100,
      marginLeft: 20,
      marginRight: 20,
      paddingLeft: 50,
      paddingRight: 50,
    },
    [theme.breakpoints.between("md", "lg")]: {
      width: `calc(100% - ${400}px)`,
      marginLeft: 300,
      marginBottom: 100,
    },
    [theme.breakpoints.between("sm", "md")]: {
      width: `calc(100% - ${300}px)`,
      marginLeft: 300,
      marginBottom: 100,
    },
    [theme.breakpoints.up("xl")]: {
      width: `calc(100% - ${400}px)`,
      marginLeft: 400,
      marginRight: 400,
    },
  },
  title: {
    paddingLeft: 350,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingLeft: 30,
    },
  },
  form: {
    maxWidth: 1000,
    padding: 10,
  },
}));

const RegisterForm = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");  
  //const [cardNo, setCardNo] = useState(""); 
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [programme, setProgramme] = useState(""); 
  const [college, setCollege] = useState(""); 
  const [gender, setGender] = useState("male");
  const [year, setYear] = useState("1");
  const [semester1paid, setSemester1Paid] = useState(0);
  const [semester2paid, setSemester2Paid] = useState(0);

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setId(""); 
    //setCardNo("");
    setRegistrationNumber("");
    setProgramme("");
    setGender("");
    setYear("");
    setSemester1Paid("");
    setSemester2Paid("");
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  }; 
  const handleCollegeChange = (event) => {
    setCollege(event.target.value);
  };

  const handleSemester1PaidChange = (event) => {
    const checked = event.target.checked;
    const bitValue = checked ? 1 : 0;
    setSemester1Paid(bitValue);
  };
  const handleSemester2PaidChange = (event) => {
    const checked = event.target.checked;
    const bitValue = checked ? 1 : 0;
    setSemester2Paid(bitValue);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  }; 
/*  const handleCardNoChange = (event) => {
    setId(event.target.value);
  };*/

  const handleRegistrationNumberChange = (event) => {
    setRegistrationNumber(event.target.value);
  };
  const handleProgrammeChange = (event) => {
    setProgramme(event.target.value);
  };

  const handleSubmit = (event) => {
    const registerAPIURL = "http://localhost:8001/Students";
    event.preventDefault();
    // Send data to the server
    fetch(registerAPIURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //remember to change id to card number in the real database
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        id: id,  
        college:college,
       //cardNo: cardNo,
        registrationNumber: registrationNumber,
        programme: programme,
        year: year,
        gender: gender,
        semester1paid: semester1paid,
        semester2paid: semester2paid,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    clearForm();
  };

  return (
    <div className={classes.formContainer}>
      <Paper className={classes.form}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Typography variant="h6" className={classes.title}>
              REGISTER STUDENT INFORMATION
            </Typography>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Card Number"
                variant="standard"
                size="small"
                value={id} // {cardNo}
                onChange={handleIdChange} // {handleCardNoChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="First Name"
                variant="standard"
                size="small"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Last Name"
                variant="standard"
                size="small"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Registration Number"
                variant="standard"
                size="small"
                value={registrationNumber}
                onChange={handleRegistrationNumberChange}
              />
            </Grid> 
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="College"
                variant="standard"
                size="small"
                value={college}
                onChange={handleCollegeChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="Programme *Example CEIT"
                variant="standard"
                size="small"
                value={programme}
                onChange={handleProgrammeChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required variant="standard" size="small">
                <InputLabel id="year-label">Year of Study</InputLabel>
                <Select
                  labelId="year-label"
                  value={year}
                  onChange={handleYearChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required variant="standard" size="small">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  value={gender}
                  onChange={handleGenderChange}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={semester1paid}
                    onChange={handleSemester1PaidChange}
                  />
                }
                label="Semester 1 Paid"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={semester2paid}
                    onChange={handleSemester2PaidChange}
                  />
                }
                label="Semester 2 Paid"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default RegisterForm;
