import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import CountProps from './CountProps';

 
const useStyles = makeStyles((theme) => ({ 
    up: {
        color: 'rgba(158,193,49)',
        fontSize: 18,
    },
    down: {
        color: 'red',
        fontSize: 18,
    },
 

    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    }

}))


function Count() {
    const classes = useStyles()
    return (
        <Grid  className={classes.flex}>
            <CountProps iconType='up' centerType = 'centerWithLine' title='Visits' num='12,451' week='Pats week: -1,200'/>
            <CountProps iconType='up' centerType = 'centerWithLine' title='status' num='25,541,451' week='Pats week: +8,800'/>
            <CountProps iconType='down' centerType = 'centerWithLine' title='List Click' num='11,520' week='Pats week: -5,100' />
            <CountProps iconType='up' centerType = 'centerWithLine' title='Ad Clicks' num='80,451' week='Pats week: -1,200'/>
            <CountProps iconType='down' centerType = 'center' title='Visits Ad' num='12,2122' week='Pats week: -1,854'/>
        </Grid>
    );
}

export default Count;