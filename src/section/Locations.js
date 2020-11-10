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
import { useStyles } from "./JSS";
import ButtonStyle from './Button/ButtonStyle'


const styles_locations = makeStyles((theme) => ({
    search_container: {
        borderRadius: 6,
        border: 'solid 1px #afafaf',
        minWidth: '38px',
        minHeight: '38px',
    },
    search_icon: {
        fontSize: 18,
        objectFit: 'contain',
    },
    txt: {
        borderBottom: 'none',
        fontSize: 14,
        color: '#000000',
        fontFamily: 'firago',
        marginBottom: 10,
        textAlign: 'left',
        // marginTop: 20
    },
    gridWitdhUnderline: {
        width: '92%',
        marginTop: 24,
        // marginLeft: 30,
        marginBottom: 24,
        boxSizing: 'border-box',
        borderBottom: '1px solid #d5d5d5',
    },
    gridBox: {
        width: '92%',
        marginBottom: 30,
    },
    gridBox_childs: {
        display: 'flex',
        width: 450,
        paddingTop: 12,
        paddingBottom: 12,
        paddingRight: 30,
        paddingLeft: 30,
    },
    table: {
        marginBottom: 19
    },
    greenRoot: {
        padding: 0,
        borderBottom: 'none',
        fontSize: 14,
        color: '#ffffff',
        fontFamily: 'firago',
        background: '#91c716',
        borderRadius: 30,
        width: 30,
        fontWeight: 800
    },
    grid: {
        display: 'flex',

        border: '1px solid #d5d5d5'
    }
}));
//first table function
function createData(name, ad) {
    return { name, ad, };
}
const rows = [createData('Google ad from secret name…', 105)];

//second table function
function createTable(form, signal, fire, adsense) {
    return { form, signal, fire, adsense };
}
const rows_table = [createTable(105, 514, '456/456', '+1.23')]

//third table function
function createThirdTable(user, cpc, rpc, score) {
    return { user, cpc, rpc, score };
}
const thirdRows = [createThirdTable(0, 78.16, 78.12)]

function Locations() {
    const classes = useStyles();
    const styles = styles_locations();

    return (
        <Grid className={classes.gridBox}>
            <Grid className={classes.gridBox_child}>
                <Typography className={classes.txt}>Locations</Typography>
                <Typography variant='div' className={classes.right}>
                    <Button className={classes.container} >
                        <ListIcon className={classes.icon} />
                    </Button>
                    <Button className={classes.container} >
                        <PrintIcon className={classes.icon} />
                    </Button>
                    <Button className={styles.search_container} >
                        <SearchIcon className={styles.search_icon} />
                    </Button>
                </Typography>
            </Grid>
            <Typography className={classes.line}></Typography>
            <Grid className={styles.gridWitdhUnderline}>
                <Table style={{ width: '60%' }} className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.root} align="left">Ad Name</TableCell>
                            <TableCell className={classes.root} align="left">Ad Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell className={classes.rootRow} align="left">{row.name}</TableCell>
                                <TableCell className={classes.rootRow} align="left">{row.ad}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>

            <Grid className={styles.gridBox}>
                <Typography className={styles.txt}>Other Data:</Typography>
                <Table style={{ width: '80%', marginTop: '32px' }} className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.root} align="left">Form Data</TableCell>
                            <TableCell className={classes.root} align="left">Onesignal</TableCell>
                            <TableCell className={classes.root} align="left">FireB</TableCell>
                            <TableCell className={classes.root} align="left">Adsense</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows_table.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell className={classes.rootRow} align="left">{row.form}</TableCell>
                                <TableCell className={classes.rootRow} align="left">{row.signal}</TableCell>
                                <TableCell className={classes.rootRow} align="left">{row.fire}</TableCell>
                                <TableCell className={styles.greenRoot} align="left">{row.adsense}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                    <Typography style={{ margin: 14 }} />

                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.root} align="left">User Click</TableCell>
                            <TableCell className={classes.root} align="left">CPC</TableCell>
                            <TableCell className={classes.root} align="left">RPC</TableCell>
                            <TableCell className={classes.root} align="left">Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {thirdRows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell className={classes.rootRow} align="left">{row.user}</TableCell>
                                <TableCell className={classes.rootRow} align="left">{row.cpc}</TableCell>
                                <TableCell className={classes.rootRow} align="left">{row.rpc}</TableCell>
                                <TableCell className={classes.rootRow} align="left">{row.score}
                                    <img src=".\img\dataninja.svg" style={{ width: 20, height: 20 }} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
            {/* <Typography className={classes.line}></Typography> */}
            <Grid className={classes.grid}>
                <ButtonStyle />
            </Grid>
        </Grid>
    )
}

export default Locations