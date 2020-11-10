import React, { useState } from 'react';
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";



const useStyles = makeStyles({
    outline: {
        width : 140,
        height: 45,
        objectFit: 'contain',
        borderRadius: 6,
        background: '#f1f5f8',
        fontSize: 12,
        fontWeight: 800,
        marginLeft: 20
    },
    outlineActive: {
        width : 140,
        height: 45,
        objectFit: 'contain',
        borderRadius: 6,
        border: 'solid 1px #ff4e00',
        background: 'rgba(254, 237, 229)',
        fontSize: 12,
        fontWeight: 800,
        color:' #ff4e00',
        marginLeft: 20
    },

});

export default function DottedButton(props) {
    const classes = useStyles();
    const [state, setState] = useState(false);

    return (
            <Grid>
                <Button  onClick={() => !state ? setState(true) : setState(false)}
                
                className={state ? classes.outlineActive: classes.outline }>
                    {props.label}
                    
                </Button>
            </Grid> 
    );
}
