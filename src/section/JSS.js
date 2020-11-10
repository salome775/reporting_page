import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    //styled total stats
    gridBox: {
        width: '49%',
        // height: 404,
        borderRadius: 6,
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        background: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    gridBox_child: {
        width: '100%',
        display: 'flex',
        padding: '22px 12px 22px 32px',
        boxSizing: 'border-box',
        borderBottom: '1px solid #d5d5d5',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        background: 'rgba(254, 237, 229)',
        marginRight: 10,
        minWidth: '38px',
        minHeight: '38px',
        borderRadius: 6,

    },
    icon: {
        fontSize: 18,
        objectFit: 'contain',
        color: '#ff4e00'
    },
    txt: {
        fontSize: 16,
        color: '#000000',
        fontWeight: 'firago',
        top: 10
    },
    // right: {
    //     left: '72%'
    // },

    //styled img 
    img: {
        width: '70%',
        height: '230px',
    },
    img_container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    //only for center
    flex_center: {
        display: 'flex',
        alignItems: 'center',
        margin: 20,
    },

    //calendar border
    border: {
        width: '94%',
        height: 64,
        borderRadius: 8,
        marginBottom: '26px',
        boxSizing: 'border-box',
        border: 'solid 1px #ff4e00',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
        // margin: '0 18px 18px 18px'
    },
    calendar: {
        width: 25,
        height: 20,
        // objectFit: 'contain',
        color: '#ff4e00',
        marginRight: 25
    },
    h6: {
        fontSize: 12,
        fontFamily: 'firago',
    },
    gridBox_lastChild: {
        width: '100%',
        borderTop: '1px solid #d5d5d5'
    },
    line: {
        borderBottom: '1px solid #d5d5d5',
        height: 0
    },

    //style table
    root: {
        padding: 0,
        borderBottom: 'none',
        fontWeight: 600,
        fontSize: 12,
        color: '#000000',
        fontFamily: 'firago'
    },
    rootRow: {
        padding: 0,
        borderBottom: 'none',
        fontSize: 14,
        color: '#000000',
        fontFamily: 'firago'
    },
    StyledLink: {
        fontSize: 16,
        color: '#ff4e00',
        textDecoration: 'underline',
        paddingRight: '32px'
    },
    table: {
        width: '50%',
        margin: '18px 0 24px 36px'
    },
    grid: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row-reverse',
        width: '100%',
        height: '100%',
        borderTop: '1px solid #d5d5d5'
    }


}));

export { useStyles }