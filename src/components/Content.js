import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DenseTable from './Table';
import Grid from '@material-ui/core/Grid';
import BlockTable from './BlockTable';
import BottomTable from './BottomTable';
import Navbar from '../Navbar/Navbar';
import TotalTable from '../section/TotalTable';
import Tab from '../Tab/Tab';

const sidebar = 64;

const useStyles = makeStyles({
    root: {
        maxWidth: `calc(100% - ${sidebar}px)`,
        // height: '500px',
        backgroundColor: '#f1f5f8',
        marginLeft: sidebar,
        padding: '0 32px 32px 32px',
        flexDirection: 'column',

    },
    tables: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: '32px',
        // flexGrow: '1'
    }
});


function Content() {
    const classes = useStyles();
    return <Grid container className={classes.root}>
        <TotalTable />
        <Tab />
        <Grid item className={classes.tables}>
            <DenseTable txt='Daily Statistic' text='Date' row2='Spirit' row3='Profit' row4='Roi' />
            <DenseTable txt='Custom Event Data' text='Custom' row2='Event' row3='Data' row4='Cost' />
        </Grid>
        <Grid item><BlockTable /></Grid>
        <Grid item><BottomTable /></Grid>
    </Grid>
}

export default Content
