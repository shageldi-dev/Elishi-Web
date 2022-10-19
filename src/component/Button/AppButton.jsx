import React, {useState, useEffect} from 'react';
import {Button} from "@mui/material";

const AppButton = (props) => {
    return (
        <div>
            <Button variant={'contained'}>
                {props.value}
            </Button>
        </div>
    )
}


export default AppButton;