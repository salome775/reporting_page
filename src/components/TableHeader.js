import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ListIcon from '@material-ui/icons/List';
import PrintIcon from '@material-ui/icons/Print';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    root: {
        width: '100%',
        borderBottom: '1px solid #d5d5d5',
        textAlign: 'left',
        padding: '16px 32px',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: '16px',
        fontWeight: 'bold',
    },
    button: {
        textTransform: "none",
        color: '#ff4e00',
        backgroundColor: '#ffede5',
        fontSize: '14px',
        "&:hover": {
            backgroundColor: '#ffede5'
        },
        marginRight: '12px',
        padding: '4px 8px',
        minWidth: '20px'
    },
    searchButton: {
        border: '1px solid #afafaf',
        minWidth: '20px',
        borderRadius: '6px',
        padding: '4px',
        backgroundColor: '#ffffff',
        color: ' #000000'
    }

});

export default function TableHeader(props) {
    const classes = useStyles();
    const text = props.text
    return (
        <Grid container className={classes.root}>
            <Typography className={classes.text}>{text}</Typography>
            <Grid>
                <Button className={classes.button}>
                    <ListIcon style={{ marginRight: '8px' }} size='small' />
                    <Typography className={classes.buttonTxt}>Customize</Typography>
                </Button>
                <Button className={classes.button}><PrintIcon /></Button>
                <Button className={classes.searchButton}><SearchIcon /></Button>
            </Grid>
        </Grid>
    )
}