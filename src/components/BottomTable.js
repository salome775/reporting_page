import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BottomHeader from './BottomHeader';
import TableFooter from './TableFooter';
import clsx from 'clsx';


const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: '#f4f4f4',
        },
    },
}))(TableRow);



const useStyles = makeStyles({
    rooot: {
        width: '100%',
    },
    table: {
        backgroundColor: '#ffffff',
        borderRadius: '6px',
        width: '100%',
    },
    head: {
        fontWeight: '900',
        padding: '8px 32px',
        minWidth: '20%',
        fontSize: '14px'
    },
    body: {
        color: '#000000',
        padding: '28px 32px',
        fontSize: '14px',
    },
    orange: {
        color: '#ff4e00',
        padding: '28px 32px',
        fontSize: '14px',
        textDecoration: 'underline'
    },
    flex: {
        display: 'flex',
        alignItems: 'center',
    },
    margin: {
        marginRight: '4px',
        width: '16px',
        height: '16px'
    },
    headTable: {
        borderBottom: '1px solid #d5d5d5'
    },
    tableBody: {
        '& .MuiTableCell-root': {
            border: 'none',
            paddingRight: '64px'
        },
    },


});

function createData(ip, browser, location, device) {
    return { ip, browser, location, device };
}

const rows = [
    createData('11.0555.212002', { name: 'Chrome', src: '/photos/google.png' }, '11.05.2020', 'Apple'),
    createData('11.0555.212002', { name: 'Chrome', src: '/photos/google.png' }, '11.05.2020', 'Android'),
    createData('11.0555.212002', { name: 'Opera', src: '/photos/opera.png' }, '11.05.2020', 'Desktop'),
    createData('11.0555.212002', { name: 'Edge', src: '/photos/edge.png' }, '11.05.2020', 'Apple'),
];

export default function BottomTable() {
    const classes = useStyles();

    return (
        <TableContainer className={classes.rooot} component={Paper}>
            <BottomHeader />
            <Table className={classes.table} size='small'>
                <TableHead>
                    <TableRow className={classes.headTable}>
                        <TableCell className={classes.head}>IP</TableCell>
                        <TableCell className={classes.head} align="left">Browser</TableCell>
                        <TableCell className={classes.head} style={{ width: '50%' }} align="left">Location Time</TableCell>
                        <TableCell className={classes.head} align="right">Device</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow className={classes.tableBody} key={row.ip}>
                            <TableCell className={classes.orange} component="th" scope="row">
                                {row.ip}
                            </TableCell>
                            <TableCell className={clsx(classes.body, classes.flex)} component="th" scope="row" >
                                <img className={classes.margin} alt='network' src={row.browser.src} />
                                {row.browser.name}
                            </TableCell>
                            <TableCell className={classes.body} align="left">{row.location}</TableCell>
                            <TableCell className={classes.body} align="right">{row.device}</TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
            <TableFooter />
        </TableContainer>
    );
}