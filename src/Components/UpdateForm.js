import React, { useState } from "react";
import {
  makeStyles,
  TextField,
  Button,
  Grid,
  Paper,
  FormControlLabel,
  Checkbox,
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
  //const [id, setId] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [semester2paid, setSemester2Paid] = useState(0);

  const clearForm = () => {
    setRegistrationNumber("");
    //setId("");
    setSemester2Paid(false);
  };

  const handleSemester2PaidChange = (event) => {
    const checked = event.target.checked;
    const bitValue = checked ? 1 : 0;
    setSemester2Paid(bitValue);
  };

  const validateRegistrationNumber = () => {
    const value = registrationNumber;
    const isValid = /^\d{11}$/.test(value); // Regex to check if the value is a 9-digit number
    return isValid;
  };

  const handleRegistrationNumberChange = (event) => {
    setRegistrationNumber(event.target.value);
  };

  const handleUpdate = (event) => {
    const updateAPIURL = `http://192.168.43.109:8080/smartcardapp-api/updateStudent.php/${registrationNumber}`;
    event.preventDefault();
    // Send data to the server
    if (validateRegistrationNumber()) {
      fetch(updateAPIURL, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          registrationNumber: registrationNumber,
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
    } else {
      alert("Incorrect Inputs");
      clearForm();
    }
  };

  return (
    <div className={classes.formContainer}>
      <Paper className={classes.form}>
        <form onSubmit={handleUpdate}>
          <Grid container spacing={2}>
            <Typography variant="h6" className={classes.title} align="center">
              UPDATE STUDENT INFORMATION
            </Typography>
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
                Update
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default RegisterForm;
