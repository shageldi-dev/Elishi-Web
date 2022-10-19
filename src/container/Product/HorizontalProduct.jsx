import React, {useState, useEffect} from 'react';
import {MediumText} from "../../component/Text/Text";
import {lisChecker} from "../../common/utils.mjs";
import Product from "../../component/Product/Product";
import {useRef} from "react";
import {useDraggable} from "react-use-draggable-scroll";

const HorizontalProduct = (props) => {
    const scrollRef = useRef(); // We will use React useRef hook to reference the wrapping div:
    const {events} = useDraggable(scrollRef, {
        applyRubberBandEffect: true,
        isMounted: true,
    });
    return (
        <div>
            <div className={'product-container'}>
                <div className={'glass-gradient'}>
                </div>
                <div className={'glass-background'}>
                    <MediumText value={props.title} style={{fontSize: '22px'}}/>
                    <div className="scroll-container"   {...events} ref={scrollRef}>
                        {
                            lisChecker(props.list).map((item, i) => {
                                return (
                                    <Product item={item} key={`product-${i}-key`}/>
                                )
                            })
                        }
                    </div>


                </div>
            </div>
        </div>
    )
}

export default HorizontalProduct;