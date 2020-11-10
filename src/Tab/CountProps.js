
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'; 
import Typography from '@material-ui/core/Typography'; 
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';



const useStyles = makeStyles((theme) => ({ 
    title: {
        fontSize: 12,
        fontWeight: 800,
        color: '#2e3849',
    },
    up: {
        color: 'rgba(158,193,49)',
        fontSize: 18,
    },
    down: {
        color: 'red',
        fontSize: 18,
    }
    ,
    week: {
        fontSize: 11,
        fontWeight: 500,
        color: '#7c7c7c'
    },
    num: {
        fontSize: 16,
        fontWeight: 800,
        color: '#2e3849',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    //for center
    centerWithLine: {
        marginTop: 35,
        textAlign: 'center',
        borderRight: '1px solid #d5d5d5',
    },
    center: {
        marginTop: 35,
        textAlign: 'center',
    },
    
    flex: {
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
    }

}))
 
  
export default function StyledButton(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
             {props.centerType === 'center' ?
                        <Grid  className={classes.center}>
                        <Typography className={classes.title}>{props.title}</Typography>
                               <Typography className={classes.num}>
                                   {props.iconType === 'up' ?
                                   <TrendingUpIcon className={classes.up}/>:
                                   <TrendingDownIcon className={classes.down}/>}
                                   {props.num}
                               </Typography>
                           <Typography className={classes.week}>{props.week}</Typography>
                       </Grid>:
                        <Grid  className={classes.centerWithLine}>
                        <Typography className={classes.title}>{props.title}</Typography>
                               <Typography className={classes.num}>
                                   {props.iconType === 'up' ?
                                   <TrendingUpIcon className={classes.up}/>:
                                   <TrendingDownIcon className={classes.down}/>}
                                   {props.num}
                               </Typography>
                           <Typography className={classes.week}>{props.week}</Typography>
                       </Grid>}

           {/* <Grid item xs={3} className={classes.center}>
             <Typography className={classes.title}>{props.title}</Typography>
                    <Typography className={classes.num}>
                        {props.iconType === 'up' ?
                        <TrendingUpIcon className={classes.up}/>:
                        <TrendingDownIcon className={classes.down}/>}
                        {props.num}
                    </Typography>
                <Typography className={classes.week}>{props.week}</Typography>
            </Grid> */}
        </Grid>
    );
}
