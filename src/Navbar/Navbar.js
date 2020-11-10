import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import StyledLink from './StyledLink';

const sidebar = 64;


const useStyles = makeStyles((theme) => ({
    container: {
        background: '#ff4e00',
        maxWidth: `calc(100% - ${sidebar}px)`,
        height: 74,
        marginLeft: sidebar,
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 1px 20px 0 rgba(0, 0, 0, 0.1)',
    },
    grid_container: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 40
    },

    section: {
        color: '#ffffff'
    },

}));

function Navbar() {
    const classes = useStyles();

    return (
        <Grid className={classes.container}>
            <Grid className={classes.grid_container}>
                <StyledLink LinkName='Main Data' />
                <StyledLink LinkName='Current configuration' />
                <StyledLink LinkName='Daily Statistic' />
                <StyledLink LinkName='Comments' />
                <StyledLink LinkName='Visitors Data' />
            </Grid>
        </Grid>
    );
}


export default Navbar