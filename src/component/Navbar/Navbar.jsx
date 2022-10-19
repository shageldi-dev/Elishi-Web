import React, {useState, useEffect} from 'react';
import {Box, Button, Container, IconButton, InputBase, Stack, styled, useTheme} from "@mui/material";
import '../../style/Navbar/navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import {Fonts} from "../../common/fonts.mjs";
import {colors} from "../../common/theme.mjs";
import ImageButton from "../Button/ImageButton";
import {blue, green, red} from "@mui/material/colors";
import useMediaQuery from '@mui/material/useMediaQuery';
import {phoneSizes} from "../../common/size.mjs";

export function useWidth() {
    const theme = useTheme();
    const keys = [...theme.breakpoints.keys].reverse();
    return (
        keys.reduce((output, key) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const matches = useMediaQuery(theme.breakpoints.up(key));
            return !output && matches ? key : output;
        }, null) || 'xs'
    );
}

const Navbar = (props) => {
    const width = useWidth();
    return (
        phoneSizes.includes(width) ?
            // Mobile navbar
            <Box sx={{
                top: 0, position: 'fixed', zIndex: '9',
                backdropFilter: 'blur(20px)',
                width: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.56)'
            }}>
                <Container>
                    <Stack sx={{paddingTop: "25px", paddingBottom: "25px", width: "100%"}} direction={'row'}
                           alignItems={'center'} justifyContent={'space-between'}>
                        <Stack direction={'row'} alignItems={'center'} flex={1} sx={{width: "50%"}}>
                            <img alt={"app-logo"} src={'/img/elishi_logo.svg'} className={"app_logo"}/>
                        </Stack>

                        <Stack direction={'row'} spacing={3}>
                            <IconButton>
                                <img src={"/img/search.svg"} alt={"search-icon"}/>
                            </IconButton>

                            <IconButton>
                                <img src={"/img/dark_mode.svg"} alt={"search-icon"}/>
                            </IconButton>

                            <IconButton>
                                <img src={"/img/language.svg"} alt={"search-icon"}/>
                            </IconButton>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
            :
            // Desktop navbar
            <Box sx={{
                top: 0, position: 'fixed', zIndex: '9',
                width:'100%',
                backdropFilter: 'blur(20px)',
                backgroundColor: 'rgba(255, 255, 255, 0.56)'
            }}>
                <Container>
                    <Stack sx={{paddingTop: "25px", paddingBottom: "25px", width: "100%"}} direction={'row'}
                           alignItems={'center'} justifyContent={'space-between'}>
                        <Stack direction={'row'} alignItems={'center'} flex={1} sx={{width: "50%"}}>
                            <img alt={"app-logo"} src={'/img/elishi_logo.svg'} className={"app_logo"}/>

                            <Stack direction={'row'} sx={{
                                border: "0.5px solid #FD654C",
                                borderRadius: "6px",
                                height: '40px',
                                ml: 5,
                                width: "100%"
                            }}>
                                <InputBase
                                    fullWidth={true}
                                    sx={{ml: 1, flex: 1, fontFamily: Fonts.REGULAR}}
                                    placeholder="Search..."
                                    inputProps={{'aria-label': 'search google maps'}}
                                />
                                <Button type="button" variant={'contained'}
                                        sx={{color: colors.WHITE, fontFamily: Fonts.BOLD, textTransform: 'capitalize'}}
                                        aria-label="search">
                                    Search
                                </Button>
                            </Stack>
                        </Stack>

                        <Stack direction={'row'} alignItems={'flex-end'} justifyContent={'flex-end'} flex={1}
                               sx={{width: "100%"}} spacing={4}>
                            <ImageButton text={"Dark mode"} src={"/img/dark_mode.svg"}/>
                            <ImageButton text={"Language"} src={"/img/language.svg"}/>
                            <ImageButton text={"Favorites"} src={"/img/fav.svg"}/>
                            <ImageButton text={"Sign-in"} src={"/img/person.svg"}/>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
    )
}

export default Navbar;