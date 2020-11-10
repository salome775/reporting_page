import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BlockHeader from './BlockHeader';
import TableFooter from './TableFooter';
import clsx from 'clsx';

const useStyles = makeStyles({
    root: {
        width: '100%',
        marginBottom: '32px',
    },
    table: {
        backgroundColor: '#ffffff',
        borderRadius: '6px',
        width: '100%',
        padding: '8px 32px',
    },
    head: {
        fontWeight: '900',
        minWidth: '20%',
        fontSize: '14px',
        padding: '8px 32px',
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
        textDecoration: 'underline',
    },
    tableBody: {
        '&:nth-of-type(even)': {
            backgroundColor: '#f4f4f4',
        },
        '&:last-child th': {
            color: '#000000',
            fontWeight: 'bold',
            textDecoration: 'none'
        },
    },
    circle: {
        backgroundColor: '#2c7df0',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        marginLeft: '6px',
        border: '1px solid #2c7df0'
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    headTable: {
        borderBottom: '1px solid black'
    },
    tablBody: {
        '& .MuiTableCell-root': {
            border: 'none',
            paddingRight: '64px'
        }
    },
    padding: {
        // padding: '28px 32px',
    }
});

function createData(user, comment, commentfrom) {
    return { user, comment, commentfrom };
}

const rows = [
    createData('Nika Chakvetadze', 'We are excited to finally start sharing more about the Why behind Slim and how you can use it to get more loyal…', 'User Comments'),
    createData('Levan Tefnadze', 'Slim integrates with the tools you already use as an early-stage SaaS startup to give you a better overview of your!', 'User Comments'),
    createData('Nika Chakvetadze', 'We are excited to finally start sharing more about the Why behind Slim and how you can use it to get more loyal…', 'User Comments'),
    createData('You', 'Slim integrates with the tools you already use as an early - stage SaaS startup to give you a better overview of your!', 'System Comments'),
];


function Circle() {
    const classes = useStyles();
    return (
        <div className={classes.circle}></div>
    )
}


export default function BlockTable() {
    const classes = useStyles();

    return (
        <TableContainer className={classes.root} component={Paper}>
            <BlockHeader />
            <Table className={classes.table} size='small'>
                <TableHead>
                    <TableRow className={classes.headTable}>
                        <TableCell className={classes.head}>Users</TableCell>
                        <TableCell className={classes.head} align="left">Comment</TableCell>
                        <TableCell className={classes.head} align="right">Comment From</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={classes.padding}>
                    {rows.map((row) => (
                        <TableRow key={row.user} className={clsx(classes.tableBody, classes.tablBody)} >
                            <TableCell className={classes.orange} component="th" scope="row">
                                {row.user}
                            </TableCell>
                            <TableCell className={classes.body} align="left">{row.comment}</TableCell>
                            <TableCell className={clsx(classes.body, classes.flex)}>{row.commentfrom}
                                <Circle />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TableFooter />
        </TableContainer>
    );
}