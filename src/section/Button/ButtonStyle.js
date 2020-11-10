import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import StyledButton from './ButtonProps';
import Button from '@material-ui/core/Button';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';


const useStyles = makeStyles((theme) => ({
    // flex: {
    //     border: '1px solid red',
    //     textAlign: 'left',
    // },
    edit: {
        background: 'red',
    },
    icon: {
        fontSize: 18,
        objectFit: 'contain',
        color: '#ff4e00',
        marginRight: 5
    },
    outline: {
        textTransform: 'none',
        marginRight: 10
    },
    txt: {
        fontSize: 14,
        fontFmily: 'firago',
        color: '#7f8a95'
    },
    edit: {
        borderRadius: 6,
        background: 'rgba(254, 237, 229)',
        textTransform: 'none',
        color: '#ff4e00',
        width: 79,
        height: 38,
        marginRight: 10
    },
    editTxt: {
        fontSize: 14,
        fontFmily: 'firago',
    },
    sales: {
        textTransform: 'none',
        background: '#ff4e00',
        color: '#ffffff',
        width: 79,
        height: 38,
        marginRight: 10
    },
    link: {
        textTransform: 'none',
        border: ' solid 1px #2c7df0',
        color: '#2c7df0',
        width: 79,
        height: 38,
        marginRight: 10
    },
    linkIcon: {
        fontSize: 18,
        objectFit: 'contain',
        marginRight: 5,
        color: '#2c7df0'
    }
}));


function ButtonStyle() {
    const classes = useStyles()

    return (
        <Grid className={classes.flex}>
            {/* <StyledButton label='Duplicate' />
            <StyledButton label='Edit' borderColor='#ff4e00'/>
            <StyledButton label='Sales' />
            <StyledButton label='Link' /> */}
            <Button className={classes.outline}>
                <FileCopyIcon className={classes.icon} />
                <Typography className={classes.txt}>Duplicate</Typography>
            </Button>
            <Button className={classes.edit}>
                <Typography className={classes.editTxt}>Edit</Typography>
            </Button>
            <Button className={classes.sales}>
                <Typography className={classes.editTxt}>Sales</Typography>
            </Button>
            <Button className={classes.link}>
                <LinkIcon className={classes.linkIcon} />
                <Typography className={classes.editTxt}>Link</Typography>
            </Button>
        </Grid>

    );
}
export default ButtonStyle