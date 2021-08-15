import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Portfolio.css';

const useStyles = makeStyles({
    portfolioPrimary: {
        color: '#D9B08C',
        '& span' : {
            color: '#116466',
            paddingLeft: '0.2em',
        },
    },
    portfolioSecondary: {
        color: '#116466',
        '& span' : {
            color: '#D9B08C',
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
            <section class="one">
                <div className={fontColor}>
                    <div class="myName">
                        Kenny<span>C.</span>
                    </div>
                </div>

                <div class="asian-bow" onClick={movePoop}>
                    <h1>👲🙏</h1>
                </div>

                <div class="box">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </section>

            <section class="two">
                <h1>PINEAPPLE</h1>
            </section>

            <section class="three">
                <h1>GOES</h1>
            </section>

            <section class="four">
                <h1>ON</h1>
            </section>

            <section class="five">
                <h1>PIZZA</h1>
            </section>
        </div>
    );
}
