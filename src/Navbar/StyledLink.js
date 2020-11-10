import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
    spacing: {
        marginRight: 25,
    },
    LinkStyle: {
        fontSize: 12,
        fontWeight: 800,
        color: '#ffffff',
        fontFamily: 'firago'
    }

}));

export default function StyledLink(props) {
    const classes = useStyles();

    return (
        <Grid className={classes.spacing}>
            <Link to="#" className={classes.LinkStyle} >{props.LinkName}</Link>
        </Grid>
    );
}

