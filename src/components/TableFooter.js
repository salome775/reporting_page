import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
    root: {
        width: '100%',
        padding: '12px 32px',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse'
    },
    text: {
        fontSize: '14px',
        fontWeight: 'bold',
    },
    button: {
        textTransform: "none",
        color: '#2f2f2f',
        fontSize: '14px',
        borderRadius: '6px',
        border: '1px solid #f1f5f8',
        "&:hover": {
            backgroundColor: '#ffede5',
            color: '#ff4e00',
        },
        padding: '4px',
        marginRight: '12px',
        minWidth: '20px'
    },
    nums: {
        padding: '4px 12px',
        backgroundColor: '#f4f4f4',
        fontWeight: '600'
    }

});

export default function TableHeader() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid>
                <Button className={classes.button}>
                    <ChevronLeftIcon />
                </Button>
                <Button className={clsx(classes.button, classes.nums)}>1</Button>
                <Button className={clsx(classes.button, classes.nums)}>2</Button>
                <Button className={clsx(classes.button, classes.nums)}>3</Button>
                <Button className={classes.button}>
                    <ChevronRightIcon />
                </Button>
            </Grid>
        </Grid>
    )
}