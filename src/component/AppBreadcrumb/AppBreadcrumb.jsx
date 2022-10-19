import React, {useState, useEffect} from 'react';
import {Breadcrumbs, Link} from "@mui/material";
import {Fonts} from "../../common/fonts.mjs";
import {MediumText} from "../Text/Text";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {lisChecker} from "../../common/utils.mjs";
import {useNavigate} from "react-router-dom";

const AppBreadcrumb = (props) => {
    const [breadcrumbs, setBreadcrumbs] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        let temp = lisChecker(props.pages).map((item, i) => {
            return (
                i < lisChecker(props.pages).length - 1 ?
                    <Link
                        underline="hover"
                        key={i}
                        sx={{fontFamily: Fonts.REGULAR}}
                        color="custom.contrastText"
                        onClick={()=>{
                            navigate(item.to);
                        }}
                    >
                        {item.name}
                    </Link>
                    :
                    <MediumText key={i} value={item.name} sx={{color: 'custom.contrastText'}}/>
            )
        })

        setBreadcrumbs(temp);

    }, []);

    return (
        <div>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="medium" color={"primary"}/>}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </div>
    )
}

export default AppBreadcrumb;