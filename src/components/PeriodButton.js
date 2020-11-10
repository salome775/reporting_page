import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


const sidebar = 64;

const useStyles = makeStyles({
    root: {
        width: '230px',
        height: '50px',
        border: '1px solid #d8d8d8',
        borderRadius: '8px',
        padding: '8px'
    },
    icon: {
        color: '#7c899d',
        display: 'flex',
        alignItems: 'center'
    },
    grid: {
        display: 'flex',
        width: '180px',
        flexDirection: 'column',
    },
    select: {
        maxHeight: '6px',
        backgrounColor: '#ffffff',
        padding: 0,
        margin: 0
    }

});


function PeriodButton() {
    const classes = useStyles();

    return <Grid container className={classes.root}>
        <Grid item className={classes.grid}>
            <InputLabel>
                Period
        </InputLabel>
            <Select className={classes.select} disableUnderline fullWidth placeholder='11/08/2018-11/08/2020'>
            </Select>
        </Grid>
        <Grid item className={classes.icon}><CalendarTodayIcon /></Grid>
    </Grid>
}

export default PeriodButton