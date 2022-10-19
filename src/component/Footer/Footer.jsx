import React, {useState, useEffect, useContext} from 'react';
import '../../style/Footer/footer.css';
import {Button, Container, Grid, InputBase, Stack} from "@mui/material";
import Text, {MediumText} from "../Text/Text";
import {colors} from "../../common/theme.mjs";
import {Fonts} from "../../common/fonts.mjs";
import {AppContext} from "../../App";

const Footer = (props) => {
    const {isMobile}=useContext(AppContext);
    return (
        <div className={'footer'} style={{backgroundImage:`url(/img/footer-shape.svg)`}}>
            <div style={{position:'absolute',marginTop:'-40px',width:'100%'}}>
                {/*<div className={'snow-dialog'} style={{backgroundImage:`url(/img/snow-bg.svg)`}}>*/}
                {/*    <label>Hello WOrl</label>*/}
                {/*</div>*/}

            </div>

            <Container>
                <Grid container spacing={2}>

                    <Grid item sm={12} xs={12} md={4}>
                        <img src={"/img/elishi_logo.svg"} alt={"logo"} className={'footer-logo'}/>
                    </Grid>

                    <Grid item sm={12} xs={12} md={2}>
                        <Stack spacing={2}>
                            <MediumText value={'Pages'} style={{color:colors.WHITE,fontSize:"16px"}}/>
                            <Text value={"Home"} style={{color:colors.WHITE,fontSize:"12px",textDecoration:'underline',cursor:'pointer'}}/>
                            <Text value={"Category"} style={{color:colors.WHITE,fontSize:"12px",textDecoration:'underline',cursor:'pointer'}}/>
                            <Text value={"Favorite"} style={{color:colors.WHITE,fontSize:"12px",textDecoration:'underline',cursor:'pointer'}}/>
                            <Text value={"Profile"} style={{color:colors.WHITE,fontSize:"12px",textDecoration:'underline',cursor:'pointer'}}/>
                        </Stack>
                    </Grid>

                    <Grid item sm={12} xs={12} md={2}>
                        <Stack spacing={2}>
                            <MediumText value={'Privacy'} style={{color:colors.WHITE,fontSize:"16px"}}/>
                            <Text value={"Privacy policy"} style={{color:colors.WHITE,fontSize:"12px",textDecoration:'underline',cursor:'pointer'}}/>
                            <Text value={"Terms of use"} style={{color:colors.WHITE,fontSize:"12px",textDecoration:'underline',cursor:'pointer'}}/>
                            <Text value={"About us"} style={{color:colors.WHITE,fontSize:"12px",textDecoration:'underline',cursor:'pointer'}}/>
                            <Text value={"Help"} style={{color:colors.WHITE,fontSize:"12px",textDecoration:'underline',cursor:'pointer'}}/>
                        </Stack>
                    </Grid>

                    <Grid item sm={12} xs={12} md={4}>
                        <MediumText value={'Contact us'} style={{color:colors.WHITE,fontSize:"16px"}}/>
                        <br/>
                        <Text value={"To contact use please enter your fullname, message and\n" +
                            "email address"} style={{color:colors.WHITE,fontSize:"12px"}}/>

                        <Grid container sx={{mt:2}} spacing={2}>
                            <Grid item sm={12} xs={12} md={6}>
                                <InputBase
                                    fullWidth={true}
                                    sx={{fontSize:'12px', fontFamily: Fonts.REGULAR,backgroundColor:colors.WHITE,padding:'6px',borderRadius:'4px'}}
                                    placeholder="Fullname..."
                                />
                            </Grid>
                            <Grid item sm={12} xs={12} md={6}>
                                <InputBase
                                    fullWidth={true}
                                    sx={{fontSize:'12px', fontFamily: Fonts.REGULAR,backgroundColor:colors.WHITE,padding:'6px',borderRadius:'4px'}}
                                    placeholder="Email..."
                                />
                            </Grid>

                            <Grid item sm={12} xs={12} md={12}>
                                <InputBase
                                    fullWidth={true}
                                    sx={{fontSize:'12px', fontFamily: Fonts.REGULAR,backgroundColor:colors.WHITE,padding:'6px',borderRadius:'4px'}}
                                    multiline
                                    rows={5}
                                    placeholder="Your message..."
                                />
                            </Grid>

                            <Grid item sm={12} xs={12} md={12}>
                                <Stack direction={'row'} justifyContent={'flex-end'}>
                                    <Button variant={'contained'} color={'secondary'} style={{color:colors.WHITE,fontFamily:Fonts.MEDIUM, textTransform: 'capitalize'}}>
                                        Send
                                    </Button>
                                </Stack>
                            </Grid>
                        </Grid>

                    </Grid>





                </Grid>
                {
                    isMobile?
                        <div>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                        </div>
                        :
                        <div>
                            <br/>
                            <br/>
                        </div>
                }
            </Container>
        </div>
    )
}

export default Footer;