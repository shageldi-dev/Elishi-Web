import React, {useState, useEffect} from 'react';
import {Button, Stack, Typography} from "@mui/material";
import {Fonts} from "../../common/fonts.mjs";

const ImageButton = (props) => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{cursor:'pointer'}}>
            <img src={props.src} alt={"image-button-icon"} style={{width:"23px",height:'25px'}}/>
            <Typography sx={{fontSize:'12px',fontFamily:Fonts.MEDIUM,marginTop:'3px'}}>{props.text}</Typography>
        </Stack>
    )
}

export default ImageButton;