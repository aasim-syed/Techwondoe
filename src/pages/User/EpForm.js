import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';
import * as eeService from "../../services/eService";
import styled from "styled-components"

const genderItems = [
    { id: 'male', title: 'MaleβοΈπ¨πΉ' },
    { id: 'female', title: 'FemaleπΊβοΈπ§' },
    { id: 'other', title: 'Otherπ³οΈβπππ' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: '',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
    password:'',
    confirmpassword:'',
}

export default function UserForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required.ππ"
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid.ππ"
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.ππ"
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required.ππ"
        if('password' in fieldValues)
            temp.password = fieldValues.password.length > 0 ? "" : "This field is required.πππ"
        if('confirmpassword' in fieldValues == 'password' in fieldValues )
            temp.confirmpassword = fieldValues.confirmpassword == fieldValues.password  ? "" : "PASSWORDS DONT MATCH!ππ"
        if('isPermanent' in fieldValues  )
            temp.isPermanent = fieldValues.isPermanent != false ? "" : "HOL'UP CHECK OUT TnCπ€"
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            eeService.insertUser(values)
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Title>FORM THAT I HAVE NEVER MADE BEFOREβ¨π!</Title>
            <Grid container>
                <Grid item xs={6}>
                <H>FULL NAME</H>
                    <Controls.Input
                        name="fullName"
                        label="Full Nameπ"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <H>Email</H>
                    <Controls.Input
                        label="Emailπ§πβοΈ"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <H>MOBILE NO.π±</H>
                    <Controls.Input
                        label="Mobileπ±"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <H>CITYποΈπ</H>
                    <Controls.Input
                        label="CityπποΈ"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                    <H>PASSWORDπ</H>
                    <Controls.Input
                        type="password"
                        label="Passwordπ"
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                        error={errors.password}
                    />
                    <H> CONFIRM ITπ΅οΈ</H>
                    <Controls.Input
                        type="password"
                        label="Confirm-passwordπ"
                        name="confirmpassword"
                        value={values.confirmpassword}
                        onChange={handleInputChange}
                        error={errors.confirmpassword}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="WILL I BE HIRED?ππ°π±"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={eeService.getDepartmentCollection()}
                        error={errors.departmentId}
                    />
                    <Controls.DatePicker
                        name="BDAY"
                        label="BIRTH DATEπ₯³π₯³"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                    
                        <Controls.Rec onChange={handleInputChange}> 

                        </Controls.Rec>
                        <Controls.Checkbox
                        name="isPermanent"
                        label="I AGREE WITH TERMS AND CONDITIONSπ"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                        error={errors.isPermanent}
                        required = "true"
                    />

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}

const H =styled.h3`

/* From https://css.glass */
background: rgba(204, 45, 207, 0.29);
border-radius: 1px;
width:130px;
font-family:Poppins;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(204, 45, 207, 0.69);
:hover{
   


    background: rgba(45, 188, 207, 0.29);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(45, 188, 207, 0.69);
}
`;

const Title = styled.h1`

/* From https://css.glass */
background: rgba(36, 35, 35, 0.19);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5.7px);
-webkit-backdrop-filter: blur(5.7px);
border: 1px solid rgba(36, 35, 35, 1);

width:600px;
margin-top:-50px;
margin-left:25%;
font-family:Poppins;

:hover{
   


    background: rgba(45, 188, 207, 0.29);
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(45, 188, 207, 0.69);
}



`;