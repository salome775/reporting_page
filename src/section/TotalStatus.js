import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PrintIcon from '@material-ui/icons/Print';
import ListIcon from '@material-ui/icons/List';
import DateRangeIcon from '@material-ui/icons/DateRange';
import Link from '@material-ui/core/Link';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useStyles } from './JSS'


function createData(Clicks, Link, Stats, Data) {
    return { Clicks, Link, Stats, Data };
}

const rows = [createData(12.635, 14.786, 11.348, 25.255)];

function TotalStatus() {
    const classes = useStyles();

    return (
        <Grid className={classes.gridBox}>
            <Grid className={classes.gridBox_child}>
                <Typography className={classes.txt}>Total Stats</Typography>
                <Grid className={classes.right}>
                    <Button className={classes.container} >
                        <ListIcon className={classes.icon} />
                    </Button>
                    <Button className={classes.container} >
                        <PrintIcon className={classes.icon} />
                    </Button>
                </Grid>
            </Grid>
            <Typography className={classes.line}></Typography>
            <Grid className={classes.img_container}>
                <img className={classes.img} src=".\img\Image 17.png" />
            </Grid>
            <Grid className={classes.border}>
                <Grid className={classes.flex_center}>
                    <DateRangeIcon className={classes.calendar} />
                    <Typography className={classes.h6}>Last update 25 Minutes ago</Typography>
                </Grid>
                <Grid >
                    <Link to='/' className={classes.StyledLink}>Done</Link>
                </Grid>
            </Grid>
            <Grid className={classes.gridBox_lastChild}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.root} align="left">Ad Clicks</TableCell>
                            <TableCell className={classes.root} align="left">Link Clicks</TableCell>
                            <TableCell className={classes.root} align="left">Stats</TableCell>
                            <TableCell className={classes.root} align="left">Form Data</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell className={classes.rootRow} align="left">{row.Clicks}</TableCell>
                                <TableCell className={classes.rootRow} align="left">{row.Link}</TableCell>
                                <TableCell className={classes.rootRow} align="left">{row.Stats}</TableCell>
                                <TableCell className={classes.rootRow} align="left">{row.Data}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    );
}
export default TotalStatus