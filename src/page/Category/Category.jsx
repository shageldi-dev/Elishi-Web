import React, {useState, useEffect, useContext} from 'react';
import {Box, Card, CardActionArea, Grid, Paper, Stack} from "@mui/material";
import {BoldText, MediumText} from "../../component/Text/Text";
import {AxiosInstance} from "../../api/AxiosInstance.mjs";
import {URL_PATHS} from "../../api/Api.mjs";
import '../../style/Category/category.css';
import {AppContext} from "../../App";
import MainCategory from "../../component/Home/MainCategory";
import {getImageFullUrl, getLanguage, getRandomInt, lisChecker} from "../../common/utils.mjs";
import SubCategory from "../../component/Category/SubCategory";
import {placeholderColors} from "../../common/theme.mjs";

const Category = (props) => {
    const {isMobile} = useContext(AppContext);
    const [list, setList] = useState([]);
    const getCategory = () => {
        AxiosInstance.get(URL_PATHS.GET_CATEGORIES)
            .then(response => {
                setList(response.data.body);
                console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        getCategory();
    }, []);

    const [height, setHeight] = useState(300);
    return (
        <Box>
            <br/>
            <center>
                <BoldText value={"All categories"} style={{fontSize: '24px'}}/>
            </center>


            {
                lisChecker(list).map((item, i) => {
                    return(
                        <Box sx={{mt:8}} key={`category-${i}`}>
                            <Grid container spacing={2} sx={{mt: 3}}>
                                <Grid item sm={12} md={4} sx={{width:'100%'}}>
                                    <Card sx={{borderRadius:'16px',width:'100%',height: isMobile ? '170px' : '300px',
                                        background:`url(${getImageFullUrl(item.image)}),${placeholderColors[getRandomInt(1,placeholderColors.length-1)]}`,
                                        backgroundSize:isMobile?'cover':'cover',
                                        backgroundRepeat:'no-repeat',
                                        backgroundPosition:'center'
                                    }}>
                                        <CardActionArea sx={{height: isMobile ? '170px' : '300px'}}>
                                            <Stack sx={{width:'100%',height: isMobile ? '170px' : '300px'}} alignItems={'flex-end'} justifyContent={'flex-start'} direction={'row'}>
                                                <div className={'sub-category-glass'}>
                                                    <MediumText value={item[`category_name_${getLanguage()}`]} style={{fontSize:'20px'}}/>
                                                </div>
                                            </Stack>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item sm={12} md={8}>
                                    <Grid container spacing={2}>
                                        {
                                            lisChecker(item.sub_category).map((sub,index)=>{
                                                return(
                                                    <Grid item xs={6} sm={6} md={4} key={`sub-category${index}`}>
                                                        <SubCategory setHeight={setHeight} wHeight={height}
                                                                     image={getImageFullUrl(sub.image)}
                                                                     text={sub[`sub_category_name_${getLanguage()}`]}/>
                                                    </Grid>
                                                )
                                            })
                                        }
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    )
                })
            }

            <br/>
            <br/>
            <br/>
            <br/>

        </Box>
    )
}

export default Category;