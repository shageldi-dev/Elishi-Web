import React, {useState, useEffect} from 'react';
import Acrylic from 'react-acrylic';
import {Card, CardActionArea, CardContent, Stack, Typography} from "@mui/material";
import {MediumText} from "../Text/Text";
import {useWidth} from "../Navbar/Navbar";
import {phoneSizes} from "../../common/size.mjs";

const MainCategory = (props) => {
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
            <Card sx={{borderRadius:'16px',width:'100%',height:isMobile?100:(props.wHeight/2)-10,
                backgroundImage:`url('${props.image}')`,
                backgroundSize:'cover'
            }}>
                <CardActionArea>
                    <Stack sx={{width:'100%',height:isMobile?100:(props.wHeight/2)-10}} alignItems={'flex-end'} justifyContent={'flex-start'} direction={'row'}>
                        <div className={'main-category-glass'}>
                            <MediumText value={props.text} style={{fontSize:'16px'}}/>
                        </div>
                    </Stack>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default MainCategory;