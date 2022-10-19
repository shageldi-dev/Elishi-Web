import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import React, {useCallback, useEffect, useState} from "react";
import { Stack } from "@mui/material";
import {getImageFullUrl, getLanguage, lisChecker} from "../../common/utils.mjs";
import useSize from '@react-hook/size'

const Carausel = (props) => {

    const target = React.useRef(null)
    const [width, height] = useSize(target);


    useEffect(()=>{
        props.setHeight(height);
    },[height]);

    return (
        <div>
            <OwlCarousel
                className='owl-theme'
                loop={true}
                autoplaySpeed={1000}
                margin={0}
                items={1}
                autoplay
                // onChanged={e => console.log(e)}
                callbacks={true}
                dots={false}
                lazyLoad={true}>
                {
                    lisChecker(props.images).map((item, i) => {
                        return (
                            <div key={`${i}`} ref={target}>
                                <img src={
                                    item.id=="temp"?
                                        item.banner_image_tm
                                        :
                                        getImageFullUrl(item[`banner_image_${getLanguage()}`])
                                } alt={"slide-image"} className={"slider-image-app"}/>
                            </div>
                        )
                    })
                }
            </OwlCarousel>

            {/* <Stack className={"my-dots"} alignItems={'center'} justifyContent={'center'}>
                <span className="app-banner-dots"></span>
            </Stack> */}
        </div>
    )
}

export default Carausel;