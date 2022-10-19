import React, {useState, useEffect} from 'react';
import {Card, CardActionArea, CardContent, Checkbox, Stack} from "@mui/material";
import {
    getFirstImage,
    getProductStatusBg,
    getProductStatusText,
    getProductStatusText2,
    getStatusIcon
} from "../../common/utils.mjs";
import '../../style/Product/product.css';
import {BoldText, MediumText} from "../Text/Text";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import {PRODUCT_STATUS} from "../../common/constant.mjs";
import {colors} from "../../common/theme.mjs";

const Product = (props) => {

    return (
        <div>
            <Card className={'product'}>
                <CardActionArea>
                <CardContent>
                    <Stack>
                        <div className={'product-image-container'}>
                            <img src={getFirstImage(props.item.images)} alt={"Product-image"} className={'product-image'}/>
                            {
                                props.item.status==PRODUCT_STATUS.VIP || props.item.status==PRODUCT_STATUS.MASTER?
                                    <div className={'status-info'}  style={{background:`${getProductStatusBg(props.item)}`}}>
                                        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} spacing={1}>
                                            <img src={getStatusIcon(props.item)} alt={'status-img'} className={'status-img'}/>
                                            <MediumText value={getProductStatusText2(props.item)} style={{fontSize:'10px',color:'white'}}/>
                                        </Stack>
                                    </div>
                                    :
                                    null
                            }
                            <div className={'fav-button'}>
                                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} sx={{width:'25px',height:'25px'}} />
                            </div>
                            <div className={'product-status'} style={{background:`${getProductStatusBg(props.item)}`}}>
                                <MediumText value={getProductStatusText(props.item)} style={{fontSize:'9px',color:'white'}}/>
                            </div>
                        </div>
                        <div style={{height:'12px'}}></div>
                        <MediumText
                            style={{fontSize:'14px'}}
                            value={`${props.item.product_name}${props.item.product_name.length<=20?'\n':''}`} className={'product-name'}/>
                        <MediumText value={`${props.item.price} TMT`} style={{color:colors.PRIMARY,fontSize:'14px'}}/>
                    </Stack>
                </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export default Product;