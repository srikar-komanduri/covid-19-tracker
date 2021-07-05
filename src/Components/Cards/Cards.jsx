import React from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";


function Cards({data:{confirmed,deaths,recovered,lastUpdate}}) {
    if(!confirmed){
        return "Loading...."
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.infected,styles.card)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5" >
                            <CountUp start={0} end={confirmed.value} duration={1} separator=','/>                                                            
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >number of total cases</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}  xs={12} md={3} className={cx(styles.recovered,styles.card)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5" >
                        <CountUp start={0} end={recovered.value} duration={1} separator=','/>
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >number of people recovered</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}  xs={12} md={3} className={cx(styles.deaths,styles.card)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" >
                        <CountUp start={0} end={deaths.value} duration={1} separator=','/>
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >number of deaths </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
