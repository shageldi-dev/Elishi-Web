import React, {useState, useEffect,createContext} from 'react';
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import { BottomNavigationAction, Box, Container, CssBaseline, Typography} from "@mui/material";
import Navbar, {useWidth} from "../../component/Navbar/Navbar";
import Footer from "../../component/Footer/Footer";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {phoneSizes} from "../../common/size.mjs";
import BottomNavigation from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation/dist/index.css';

export const breadcrumbNameMap = {
    '/': 'Home',
    '/category': 'Category',
    '/products': 'Products',
    '/product': 'Product',
    '/sign-in': 'Sign-in',
};

export const IndexContext=createContext();

const Index = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);
    window.addEventListener('load', (event) => {
        setIsLoaded(true);
    });
    const [value, setValue] = React.useState(0);

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


    const bottomNavItems = [
        {
            title: '',
            icon: <img src={'/img/icons/home.svg'} alt={'bottom-bar'} style={{ fontSize: '18px' }} />,
            activeIcon:<img src={'/img/icons/home_active.svg'} alt={'bottom-bar'} style={{ fontSize: '18px' }} />
        },
        {
            title: '',
            icon: <img src={'/img/icons/category.svg'} alt={'bottom-bar'} style={{ fontSize: '18px' }} />,
            activeIcon:<img src={'/img/icons/category_active.svg'} alt={'bottom-bar'} style={{ fontSize: '18px' }} />,
            onClick: () => {}
        },
        {
            title: '',
            icon: <img src={'/img/icons/fav.svg'} alt={'bottom-bar'} style={{ fontSize: '18px' }} />,
            activeIcon:<img src={'/img/icons/fav_active.svg'} alt={'bottom-bar'} style={{ fontSize: '18px' }} />,
            onClick: () => {}
        },
        {
            title: '',
            icon: <img src={'/img/icons/profile.svg'} alt={'bottom-bar'} style={{ fontSize: '18px' }} />,
            activeIcon:<img src={'/img/icons/profile_active.svg'} alt={'bottom-bar'} style={{ fontSize: '18px' }} />,
            onClick: () => {}
        }
    ];

    const location = useLocation();
    const [pages,setPages]=useState([]);

    const getObject=(path)=>{
        let t=pages.filter(item=>item.to===path);
        if(t.length===0){
            return{
                to:path,
                name:breadcrumbNameMap[`${path}`]
            }
        } else {
            return null;
        }
    }


    useEffect(()=>{
        let temp=location.pathname==='/'?[]:pages;
        if(getObject(location.pathname)!=null){
            temp.push(getObject(location.pathname));
        }
        setPages(temp);
    },[location]);


    return (
       <IndexContext.Provider value={{
           pages:pages
       }}>
           <React.Fragment>
               <CssBaseline/>
               {
                   // !isLoaded ?
                   //     <Typography>Loading...</Typography>
                   //     :
                   <div>
                       <Navbar/>
                       <Container>

                           <div style={{marginTop:'120px'}}>
                               <Outlet/>
                           </div>
                       </Container>
                       <Footer/>
                       {
                           isMobile ?
                               <Box sx={{width: "100%", position: 'fixed', bottom: 0}}>
                                   <BottomNavigation
                                       items={bottomNavItems}
                                       defaultSelected={0}
                                       noActiveBg={true}
                                       onItemClick={(item) => {}}
                                   />
                               </Box>
                               :
                               null
                       }
                   </div>
               }
           </React.Fragment>
       </IndexContext.Provider>
    )
}

export default Index;