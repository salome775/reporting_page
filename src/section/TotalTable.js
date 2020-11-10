import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TotalStatus from './TotalStatus'
import Locations from './Locations';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    flex: {
        width: '100%',
        display: 'flex',
        marginTop: 35,
        marginBottom: 35,
        justifyContent: 'space-between'
    }
}));



function TotalTable() {
    const classes = useStyles();
    return (
        <Grid className={classes.flex}>
            <TotalStatus />
            <Locations />
        </Grid>
    )
}

export default TotalTable