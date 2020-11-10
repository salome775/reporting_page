import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableHeader from './TableHeader';
import TableFooter from './TableFooter';
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
        width: '49%',
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
    },
    body: {
        color: '#000000',
        padding: '28px 32px',
        fontWeight: 'bold'
    },
    tableBody: {
        '&:nth-of-type(even)': {
            backgroundColor: '#f4f4f4',
        },
    },
    headTable: {
        borderBottom: '1px solid #d5d5d5'
    },
    bodyTable: {
        '& .MuiTableCell-root': {
            border: 'none',
            paddingRight: '64px'
        }
    },
});

function createData(date, spirit, profit, roi) {
    return { date, spirit, profit, roi };
}

const rows = [
    createData('Huawei', 'Ad Group', 0.18, 0.18),
    createData('Android', 'Ad Group', 0.18, 0.18),
    createData('Google', 'Ad Group', 0.18, 0.18),
    createData('Huawei', 'Ad Group', 0.18, 0.18),
];

export default function DenseTable(props) {
    const classes = useStyles();
    const txt = props.txt;
    const text = props.text;
    const row2 = props.row2;
    const row3 = props.row3;
    const row4 = props.row4;
    return (
        <TableContainer className={classes.root} component={Paper}>
            <TableHeader text={txt} />
            <Table className={classes.table} size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.head}>{text}</TableCell>
                        <TableCell className={classes.head} align="left">{row2}</TableCell>
                        <TableCell className={classes.head} align="left">{row3}</TableCell>
                        <TableCell className={classes.head} align="center">{row4}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.date} className={clsx(classes.tableBody, classes.bodyTable)}>
                            <TableCell className={classes.body} component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell className={classes.body} align="left">{row.spirit}</TableCell>
                            <TableCell className={classes.body} align="left">{row.profit}</TableCell>
                            <TableCell className={classes.body} align="right">{row.roi}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TableFooter />
        </TableContainer>
    );
}