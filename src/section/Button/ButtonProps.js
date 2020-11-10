import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'; 


const useStyles = makeStyles((theme) => ({
 outline: {
     textTransform: 'none',
     color: '#7f8a95',
 },
  flex: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 15
    },
    edit: {
        background: 'red',
    },
    icon: {
        fontSize: 18,
        objectFit: 'contain', 
        color: '#ff4e00' ,
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
        background:'#ff4e00',
        color:'#ffffff',
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
  
export default function StyledButton(props) {
    const classes = useStyles();

    return (
        <div>
        <Button className={classes.outline}>{props.label}</Button>
        </div>
    );
}
