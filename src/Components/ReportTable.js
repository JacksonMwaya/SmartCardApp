import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router';
import { Paper, CircularProgress } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    marginTop: 100,
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginBottom: 100,
      marginLeft: 20,
      marginRight: 20,
      paddingLeft: 50,
      paddingRight: 50,
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width: `calc(100% - ${400}px)`,
      marginLeft: 300,
      marginBottom: 100,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: `calc(100% - ${300}px)`,
      marginLeft: 300,
      marginBottom: 100,
    },
    [theme.breakpoints.up('xl')]: {
      width: `calc(100% - ${400}px)`,
      marginLeft: 400,
      marginRight: 400,
    },
  },
  form: {
    maxWidth: 1200,
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
  },
}));

export default function ReportTable() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const classes = useStyles();

  useEffect(() => {
    // Fetch table data from the backend API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/smartcardapp-api/viewReport.php', {
          // modify path
          method: 'GET',
          credentials: 'include',
        });

        const data = await response.json();
        setTableData(data);

        if (data.status === 401) {
          // User is not logged in, redirect to the login page
          navigate('/Login');
        }
        if (data.status === 404) {
          alert(data.message);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [navigate]);

  const columns = [
    { field: 'id', headerName: 'S/N', width: 50 },
    { field: 'reg_no', headerName: 'Registration Number', width: 150 },
    { field: 'first_name', headerName: 'First Name', width: 130 },
    { field: 'last_name', headerName: 'Last Name', width: 130 },
    { field: 'college', headerName: 'College', width: 150 },
    { field: 'venue_id', headerName: 'Venue ID', width: 120 },
    { field: 'timestamp', headerName: 'Timestamp', width: 250 },
  ];

  if (isLoading) {
    return (
      <div className={classes.loadingContainer}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className={classes.formContainer}>
      <Paper className={classes.form}> 
      <h5 className="card-title">REPORT OF ACCESSES</h5>
        <DataGrid rows={tableData} columns={columns} pagination pageSize={5} checkboxSelection />
      </Paper>
    </div>
  );
}
