import React, {useState, useEffect, useContext} from 'react';
import {Breadcrumbs, Link, Stack, Typography} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {MediumText} from "../../component/Text/Text";
import {Fonts} from "../../common/fonts.mjs";
import {IndexContext} from "../Index/Index";
import AppBreadcrumb from "../../component/AppBreadcrumb/AppBreadcrumb";


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}



const Products = (props) => {
    const {pages}=useContext(IndexContext);
    useEffect(()=>{
        console.log(pages)
    },[pages]);





    return (
        <div>
            <Stack spacing={2}>
                <AppBreadcrumb pages={pages}/>
            </Stack>
        </div>
    )
}

export default Products;