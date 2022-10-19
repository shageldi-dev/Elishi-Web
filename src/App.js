import "./App.css";
import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import Home from "./page/Home/Home";
import Index from "./page/Index/Index";
import {colors} from "./common/theme.mjs";
import {useWidth} from "./component/Navbar/Navbar";
import {phoneSizes} from "./common/size.mjs";
import {useEffect, useState,createContext} from "react";
import Category from "./page/Category/Category";
import Products from "./page/Product/Products";



const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.PRIMARY,
      light: colors.PRIMARY_LIGHT,
      lighter: colors.PRIMARY_LIGHT,
      dark: colors.PRIMARY_DARK,
      darker: colors.PRIMARY_DARK
    },
    secondary: {
      main: colors.PRIMARY,
      light: colors.PRIMARY_LIGHT,
      lighter: colors.PRIMARY_LIGHT,
      dark: colors.PRIMARY_DARK,
      darker: colors.PRIMARY_DARK
    },
    info: {
      main: colors.PRIMARY,
      light: colors.PRIMARY_LIGHT,
      lighter: colors.PRIMARY_LIGHT,
      dark: colors.PRIMARY_DARK,
      darker: colors.PRIMARY_DARK
    },
    success: {
      main: '#54D62C',
      light: '#AAF27F',
      lighter: '#E9FCD4',
      dark: '#229A16',
      darker: '#08660D'
    },
    warning: {
      main: '#FFC107',
      light: '#FFE16A',
      lighter: '#FFF7CD',
      dark: '#B78103',
      darker: '#7A4F01'
    },
    error: {
      main: '#FF4842',
      light: '#FFA48D',
      lighter: '#FFE7D9',
      dark: '#B72136',
      darker: '#7A0C2E'
    },
    grey: {
      "100": "#F9FAFB",
      "200": "#F4F6F8",
      "300": "#DFE3E8",
      "400": "#C4CDD5",
      "500": "#919EAB",
      "600": "#637381",
      "700": "#454F5B",
      "800": "#212B36",
      "900": "#161C24",
    },
    custom:{
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: '#000000',
      contrastText: '#000000',
      notActive:"#C5C5C5",
      alwaysWhite:'#FFFFFF'
    },
    typography: {
      fontFamily: 'AppBold',
    },
  },
});
export const AppContext=createContext();
function App() {
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




  return (
     <AppContext.Provider value={{
       isMobile:isMobile
     }}>
       <ThemeProvider theme={lightTheme}>
         <CssBaseline />
         <Box
             sx={{
               fontFamily: 'AppBold',
             }}
         >
           <BrowserRouter>
             <Routes>
               <Route path={"/"} element={<Index/>}>
                 <Route index element={<Home/>}/>
                 <Route path={"/category"} element={<Category/>}/>
                 <Route path={"/products"} element={<Products/>}/>
               </Route>
             </Routes>
           </BrowserRouter>
         </Box>

       </ThemeProvider>
     </AppContext.Provider>
  );
}

export default App;



