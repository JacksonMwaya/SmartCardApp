import { Paper, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";

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
  form: {
    maxWidth: 1000,
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  submitButton: {
    display: "block",
    width: "100%",
    padding: 10,
    fontSize: 16,
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
}));

const IdCard = () => {
  const [studentData, setStudentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  const fetchStudentData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/smartcardapp-api/viewId.php"
      );
      if (response.status === 200) {
        const data = await response.json();
        data.student["img_dir"] = decodeURIComponent(data.student["img_dir"]);
        setStudentData(data.student);
      } else {
        console.error("Failed to fetch student data.");
      }
    } catch (error) {
      console.error("An error occurred while fetching student data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.formContainer}>
      <Paper className={classes.form}>
        <button
          type="submit"
          onClick={fetchStudentData}
          className={classes.submitButton}
        >
          View Student Details
        </button>
        <h5 className="card-title">Student Information:</h5>
        {isLoading ? (
          <div className={classes.loadingContainer}>
            <CircularProgress />
          </div>
        ) : studentData ? (
          <>
            <img src={studentData.img_dir} alt="Student" />
            <p>Registration Number: {studentData.RegistrationNumber}</p>
            <p>First Name: {studentData.FirstName}</p>
            <p>Last Name: {studentData.LastName}</p>
            <p>Programme: {studentData.Programme}</p>
            <p>College: {studentData.College}</p>
            <p>Year of Study: {studentData.Year}</p>
          </>
        ) : (
          <p>No student data available</p>
        )}
      </Paper>
    </div>
  );
};

export default IdCard;
