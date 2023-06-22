import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
}));

const DeviceOption = () => {
  const [deviceOption, setDeviceOption] = useState("");
  const classes = useStyles();

  const handleChange = (e) => {
    setDeviceOption(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await fetch(
        "http://localhost:8080/smartcardapp-api/deviceOption.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ deviceOption }),
        }
      );

      if (data.status === 200) {
        const session = data.session;
        try {
          const data = await fetch("http://ipaddress/SessionId", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ session }),
          });

          if (data.status === 200) {
            // Card number stored in session successfully
            console.log("session id sent to node mcu.");
          } else {
            console.error("Failed to send session id.");
          }
        } catch (error) {
          console.error(
            "An error occurred while sending the session id:",
            error
          );
        }
        // Card number stored in session successfully
        console.log("Device option stored in session.");
      } else {
        console.error("Failed to store device name in session.");
      }
    } catch (error) {
      console.error("An error occurred while storing device name:", error);
    }
  };

  return (
    <div className={classes.formContainer}>
      <Paper className={classes.form}>
        <h5 className={classes.cardTitle}>DEVICE - RFID Scanning</h5>
        <form onSubmit={handleSubmit}>
          <label htmlFor="deviceOption" className={classes.label}>
            DEVICE NAME:
          </label>
          <input
            type="text"
            className={classes.input}
            id="deviceOption"
            value={deviceOption}
            onChange={handleChange}
          />
          <button type="submit" className={classes.submitButton}>
            Store Device Name
          </button>
        </form>
      </Paper>
    </div>
  );
};

export default DeviceOption;
