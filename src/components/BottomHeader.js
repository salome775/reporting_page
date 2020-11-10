import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PeriodButton from './PeriodButton';

const useStyles = makeStyles({
    rooot: {
        width: '100%',
        borderBottom: '1px solid #d5d5d5',
        textAlign: 'left',
        padding: '16px 32px',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        flexDirection: 'column'
    },
    title: {
        fontSize: '16px',
        color: '#000000',
    },
    txt: {
        fontSize: '14px',
        color: '#ff4e00',
        fontWeight: 'bold'
    }

});

export default function BottomHeader() {
    const classes = useStyles();
    return (
        <Grid container className={classes.rooot}>
            <Grid item className={classes.text}>
                <Typography className={classes.title}>Visitors log</Typography>
                <Typography className={classes.txt}>25,000</Typography>
            </Grid>
            <Grid><PeriodButton /></Grid>
        </Grid>
    )
}