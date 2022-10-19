import React, {useState, useEffect} from 'react';
import Acrylic from 'react-acrylic';
import {Card, CardActionArea, CardContent, Stack, Typography} from "@mui/material";
import {MediumText} from "../Text/Text";
import {useWidth} from "../Navbar/Navbar";
import {phoneSizes} from "../../common/size.mjs";
import {placeholderColors} from "../../common/theme.mjs";
import {getRandomInt} from "../../common/utils.mjs";
import { useNavigate, useParams } from "react-router-dom";

const SubCategory = (props) => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/products");
    }

    const width = useWidth();
    const checker=(w)=>{
        return phoneSizes.includes(w);
    }
    const [isMobile,setIsMobile]=useState(checker(width));
    useEffect(()=>{
        try{
            setIsMobile(checker(width));
        } catch (err){}
    },[width]);


    useEffect(()=>{
        try {
            props.setHeight(document.getElementsByClassName("slider-image-app")[0].height);
        } catch (err){}
    },[])
    return (
        <div>
            <Card
                onClick={handleClick}
                sx={{borderRadius:'16px',width:'100%',height:isMobile?100:(props.wHeight/2)-10,
                backgroundColor:placeholderColors[getRandomInt(1,placeholderColors.length-1)],
            }}>
                        <CardActionArea sx={{height:isMobile?100:(props.wHeight/2)-10}}>
                           <div>
                               <Stack sx={{width:'100%'}} alignItems={'center'}
                                      justifyContent={'flex-start'} direction={'column'}>
                                   <img src={props.image} style={{width:'94px',height:'72px',objectFit:'contain'}}/>

                               </Stack>
                               <div className={'sub-category-glass'} style={{bottom:0,position:'absolute'}}>
                                   <MediumText value={props.text} className={'name'} style={{fontSize:'16px'}}/>
                               </div>
                           </div>
                        </CardActionArea>
            </Card>
        </div>
    )
}

export default SubCategory;