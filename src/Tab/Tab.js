import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';
import ListIcon from '@material-ui/icons/List';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SearchIcon from '@material-ui/icons/Search';
import TabButton from './TabButton';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import Count from './Count';
import PeriodButton from '../components/PeriodButton';

const useStyles = makeStyles((theme) => ({
    tabContainer: {
        width: '100%',
        height: 226,
        borderRadius: 6,
        background: "#ffffff",
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        marginBottom: 30,
        textAlign: 'left',
    },
    tabList: {
        display: 'flex',
        marginLeft: 20,
        paddingTop: 25,
        paddingBottom: 20,
    },
    tabLists: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    line: {
        borderBottom: '1px solid #d5d5d5',
        height: 0
    },
    left: {
        marginRight: '32px'
    }
}))

function Tab() {
    const classes = useStyles()
    return (
        <Grid className={classes.tabContainer}>
            <Grid className={classes.tabLists}>
                <Grid className={classes.tabList}>
                    <TabButton label="TAB 01" />
                    <TabButton label="TAB 02" />
                    <TabButton label="TAB 03" />
                </Grid>
                <Grid className={classes.left}><PeriodButton /></Grid>
            </Grid>
            <Typography className={classes.line}></Typography>
            <Grid>
                <Count />
            </Grid>
        </Grid>
    );
}

export default Tab;
