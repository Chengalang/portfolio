import React, { useState } from 'react';
import './Portfolio.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    portfolioPrimary: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5CDB95',
        color: '#EDF5E1',
        fontSize: '8vw',
        fontFamily: 'Helvetica',
        userSelect: 'none',
        '& span' : {
            color: '#05386B',
            paddingLeft: '0.2em',
        },
    },
    portfolioSecondary: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5CDB95',
        color: '#05386B',
        fontSize: '8vw',
        fontFamily: 'Helvetica',
        userSelect: 'none',
        '& span' : {
            color: '#EDF5E1',
            paddingLeft: '0.2em',
        },
    },
});

export default function Portfolio() {
    const classes = useStyles();
    const [fontColor, setFontColor] = useState(classes.portfolioPrimary);
    return (
        <div
            component="button"
            className={fontColor}
            onClick={(e) =>
                {
                    (fontColor === classes.portfolioPrimary) ? setFontColor(classes.portfolioSecondary) : setFontColor(classes.portfolioPrimary)
                }
            }
        >
            Kenny<span>C.</span>
            <p>testing</p>
        </div>
    );
}
