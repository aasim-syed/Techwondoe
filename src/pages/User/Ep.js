import React from 'react'
import TechwondoeForm from "./EpForm";
import PageHeader from "../../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    pageContent: {
        marginLeft: theme.spacing(-40),
        marginTop: theme.spacing(60),
        padding: theme.spacing(13),
        background:'rgba(0,0,10,0.8)',
        color:'white',
    backdropFilter:' saturate(180%) blur(30px)',
    
    }
}))

export default function TechwondoeForm1() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="New user"
                subTitle="Form design with validation"
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
            <Paper className={classes.pageContent}>
                <TechwondoeForm />
            </Paper>
        </>
    )
}
