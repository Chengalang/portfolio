import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Portfolio.css';

const useStyles = makeStyles({
    portfolioPrimary: {
        color: '#EDF5E1',
        fontSize: '10vw',
        userSelect: 'none',
        '& span' : {
            color: '#05386B',
            paddingLeft: '0.2em',
        },
    },
    portfolioSecondary: {
        color: '#05386B',
        fontSize: '10vw',
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

    function changeColor(e) {
        fontColor === classes.portfolioPrimary
        ? setFontColor(classes.portfolioSecondary)
        : setFontColor(classes.portfolioPrimary)
    };

    function movePoop(e) {
        console.log('hello');
    };

    return (
        <div component="button" class="portfolio" onClick={changeColor}>
            <div className={fontColor}>
                <div class="myName">
                    Kenny<span>C.</span>
                </div>
            </div>

            <div class="poop" onClick={movePoop}>
                <h1>💩</h1>
            </div>
        </div>
    );
}
