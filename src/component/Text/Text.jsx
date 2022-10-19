import React, {useState, useEffect} from 'react';
import {Typography} from "@mui/material";
import {Fonts} from "../../common/fonts.mjs";

const Text = (props) => {
    return (
        <Typography sx={{fontFamily:Fonts.REGULAR,...props.sx}} style={props.style} className={props.className}>
            {props.value}
        </Typography>
    )
}

export const BoldText = (props) => {
    return (
        <Typography sx={{fontFamily:Fonts.BOLD,...props.sx}} style={props.style} className={props.className}>
            {props.value}
        </Typography>
    )
}


export const MediumText = (props) => {
    return (
        <Typography sx={{fontFamily:Fonts.MEDIUM,...props.sx}} style={props.style} className={props.className}>
            {props.value}
        </Typography>
    )
}

export const LightText = (props) => {
    return (
        <Typography sx={{fontFamily:Fonts.LIGHT,...props.sx}} style={props.style} className={props.className}>
            {props.value}
        </Typography>
    )
}

export const BlackText = (props) => {
    return (
        <Typography sx={{fontFamily:Fonts.BLACK,...props.sx}} style={props.style} className={props.className}>
            {props.value}
        </Typography>
    )
}

export const ThinText = (props) => {
    return (
        <Typography sx={{fontFamily:Fonts.THIN,...props.sx}} style={props.style} className={props.className}>
            {props.value}
        </Typography>
    )
}

export const UltraText = (props) => {
    return (
        <Typography sx={{fontFamily:Fonts.ULTRA,...props.sx}} style={props.style} className={props.className}>
            {props.value}
        </Typography>
    )
}


export default Text;