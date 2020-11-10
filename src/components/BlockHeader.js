import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PeriodButton from './PeriodButton';


const useStyles = makeStyles({
    root: {
        width: '100%',
        borderBottom: '1px solid #d5d5d5',
        textAlign: 'left',
        padding: '16px 32px',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        color: '#2f2f2f',
        fontSize: '12px',
        borderRadius: '6px',
        fontWeight: '900',
        backgroundColor: '#f4f4f4',
        border: '1px solid #f1f5f8',
        "&:hover": {
            backgroundColor: '#ffede5',
            color: '#ff4e00',
            border: '1px solid #ff4e00 '
        },
        padding: '12px 16px',
        marginRight: '16px',
        minWidth: '160px'
    },

});

export default function TableHeader() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.buttons}>
                <Button className={classes.button}>All</Button>
                <Button className={classes.button}>USER COMMENTS</Button>
                <Button className={classes.button}>SYSTEM COMMENTS</Button>
            </Grid>
            <Grid item>
                <PeriodButton />
            </Grid>
        </Grid>
    )
}