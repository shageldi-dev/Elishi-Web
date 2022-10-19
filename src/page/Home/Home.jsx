import "../../style/Home/home.css";
import Carausel from "../../component/Carausel/Carausel";
import Footer from "../../component/Footer/Footer";
import HorizontalProduct from "../../container/Product/HorizontalProduct";
import MainCategory from "../../component/Home/MainCategory";
import Product from "../../component/Product/Product";
import PropTypes from "prop-types";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Text, { MediumText } from "../../component/Text/Text";
import { useNavigate } from "react-router-dom";
import { useDraggable } from "react-use-draggable-scroll";
import { URL_PATHS } from "../../api/Api.mjs";
import { AxiosInstance } from "../../api/AxiosInstance.mjs";
import { Fonts } from "../../common/fonts.mjs";
import { phoneSizes } from "../../common/size.mjs";
import { colors } from "../../common/theme.mjs";
import { getImageFullUrl, getLanguage, lisChecker } from "../../common/utils.mjs";
import { useWidth } from "../../component/Navbar/Navbar";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                ...sx,
            }}
            {...other}
        />
    );
}

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

const Home = (props) => {

    const [height, setHeight] = useState(0)
    const [home, setHome] = useState({
        banner: [
            {
                id: "temp",
                banner_image_tm: "/img/banner/temp.png",
                banner_image_ru: "/img/banner/temp.png",
                banner_image_en: "/img/banner/temp.png",
                order: 0,
                status: 1,
                siteURL: "",
                created_at: "2022-09-20T02:59:31.894Z",
                updated_at: "2022-09-20T02:59:31.894Z"
            }
        ]
    });
    const [isFirst, setIsFirst] = useState(true);


    const wwidth = useWidth();
    const checker = (w) => {
        return phoneSizes.includes(w);
    }
    const [isMobile, setIsMobile] = useState(checker(wwidth));
    useEffect(() => {
        try {
            setIsMobile(checker(wwidth));
        } catch (err) {
        }
    }, [wwidth]);

    const [categories, setCategories] = useState([]);

    const getHome = () => {
        AxiosInstance.get(URL_PATHS.GET_HOME)
            .then(response => {
                setHome(response.data.body);
                console.log(response.data);
                setCategories(response.data.body.main_category);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        setIsFirst(false);
        getHome()
    }, []);


    const navigate = useNavigate();

    function gotoCategory() {
        navigate("/category");
    }

    return (
        <div>
            <Grid container sx={{ mt: isMobile ? 0 : 3 }} spacing={2}>
                <Grid item sm={12} xs={12} md={7}>
                    <Carausel setHeight={setHeight} images={home.banner} />
                </Grid>
                <Grid item sm={12} xs={12} md={5}>
                    <Grid container spacing={2} direction="row">
                        {
                            lisChecker(categories).map((item, i) => {
                                return (
                                    i >= 4 ? null :
                                        <Grid item sm={6} xs={6} md={6} key={`main-cat-${i}`}>
                                            <MainCategory setHeight={setHeight} wHeight={height}
                                                image={getImageFullUrl(item.image)}
                                                text={item[`category_name_${getLanguage()}`]} />
                                        </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>

            <Grid container sx={{ mt: 1 }} spacing={2}>
                {
                    lisChecker(categories).map((item, i) => {
                        return (
                            i < 4 ? null :
                                <Grid item sm={6} xs={6} md={3} key={`main-cat-${i}`}>
                                    <MainCategory setHeight={setHeight} wHeight={height}
                                        image={getImageFullUrl(item.image)}
                                        text={item[`category_name_${getLanguage()}`]} />
                                </Grid>
                        )
                    })
                }
            </Grid>
            {
                lisChecker(categories).length <= 4 ? <div><br /></div> : null
            }
            <Stack direction={'row'} sx={{ p: 3 }} alignItems={'center'} justifyContent={'center'}>
                <Button onClick={gotoCategory} variant={'contained'} sx={{ color: colors.WHITE, fontFamily: Fonts.MEDIUM, fontSize: '14px' }}>
                    All categories
                </Button>
            </Stack>


            <HorizontalProduct list={home.newProducts} title={'New products'} />

            <HorizontalProduct list={home.trendProducts} title={'Trend products'} />


            {
                lisChecker(home.eventProducts).map((item, i) => {
                    return (
                        <HorizontalProduct list={item.products} title={item.event[`title_${getLanguage()}`]}
                            key={`key-${i}`} />
                    )
                })
            }


            <Grid container spacing={2} style={{ marginTop: '16px' }}>
                {
                    lisChecker(home.events).map((item, i) => {
                        return (
                            <Grid item sm={12} xs={12} md={4} key={`event-${i}`}>
                                <Stack>
                                    <img src={getImageFullUrl(item.event_image)} alt={"event-image"}
                                        style={{ width: '100%', borderRadius: '16px 16px 0 0' }}
                                    />
                                    <Stack
                                        sx={{
                                            backgroundColor: colors.BLACK,
                                            borderRadius: '0 0 16px 16px',
                                            padding: '4px'
                                        }}>
                                        <Text value={item[`title_${getLanguage()}`]}
                                            style={{ color: colors.WHITE, fontSize: '14px', marginLeft: '12px' }} />
                                    </Stack>
                                </Stack>

                            </Grid>
                        )
                    })
                }
            </Grid>

            <br />
            <br />
            <br />
            <br />


        </div>
    )
}

export default Home;