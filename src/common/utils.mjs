import {IMAGE_BASE_URL} from "../api/AxiosInstance.mjs";
import {PRODUCT_STATUS} from "./constant.mjs";
import {colors} from "./theme.mjs";

export const getImageFullUrl = (url) => {
    return `${IMAGE_BASE_URL}${url}`;
}

export const getLanguage = () => {
    return 'ru';
}

export const lisChecker = (list) => {
    try {
        let t=list.length + "" + list[0];
        return list;
    } catch (err) {
        return [];
    }
}

export const getProductStatusBg=(product)=>{
    if(product.status==PRODUCT_STATUS.ACTIVE){
        return 'transparent';
    }
    if(product.status==PRODUCT_STATUS.MASTER){
        return colors.GREEN_2;
    }
    if(product.status==PRODUCT_STATUS.VIP){
        return "linear-gradient(147.72deg, #FFAC5F 1.97%, #FF4D3C 92.47%)";
    }
}

export const getProductStatusText=(product)=>{
    if(product.status==PRODUCT_STATUS.MASTER){
        return "Master tarapyndan kepillendilen";
    }
    if(product.status==PRODUCT_STATUS.VIP){
        return "VIP";
    }
    return "";
}
export const getStatusIcon=(product)=>{
    if(product.status==PRODUCT_STATUS.MASTER){
        return "/img/master.svg";
    }
    if(product.status==PRODUCT_STATUS.VIP){
        return "/img/vip.svg";
    }
    return "";
}

export const getProductStatusText2=(product)=>{
    if(product.status==PRODUCT_STATUS.MASTER){
        return "Master";
    }
    if(product.status==PRODUCT_STATUS.VIP){
        return "VIP";
    }
    return "";
}

export const cutString=(str)=>{
    return str.length<=20?str:str.substring(0,20)
}

export const getFirstImage = (list) => {
    try {
        let img = list.filter(item => item.is_first);
        if (typeof img === 'undefined' || img == null || img.length <= 0 || img === '') {
            img = list;
        }
        return getImageFullUrl(img[0].small_image);
    } catch (err) {
        return "";
    }
}

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}