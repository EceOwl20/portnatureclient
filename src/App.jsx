import React from "react";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import Footer from "./components/header/Footer";
import BookPhoneSection from "./components/BookPhoneSection";
import ScrollToTopButton from "./components/ScrollToTopButton"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useSelector } from "react-redux";
import "./App.css"
import Rooms from "./pages/Accommodation/Rooms";
import SubRooms from "./pages/Accommodation/SubRooms";

import StandardRooms from "./pages/Accommodation/StandardRooms";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";

import FoodDrinkPage from "./pages/Food/FoodDrinkPage";
import AlacartePage from "./pages/Food/AlacartePage";

import CoffeePage from "./pages/Food/CoffeePage";
import CoffeeBarsMainPage from "./components/food/CoffeeBarsMainPage";
import MainRestaurant from "./pages/Food/MainRestaurant";

import PubBarPage from "./pages/Food/PubBarPage";
import KidsConceptPage from "./pages/Kids/KidsConceptPage";

import AquaPark from "./pages/aquapark/AquaPark";

import MiniAlaCarte from "./pages/Kids/MiniAlaCarte";
import MiniClub from "./pages/Kids/MiniClub";

import Beach from "./pages/Beach/Beach";
import { LanguageProvider } from "./context/LanguageContext";
import Offers from "./pages/Offers/Offers";
import Entertainment from "./pages/Entertainment/Entertainment";
import Activities from "./pages/Activities/Activities";

import SpaPage from "./pages/Spa/SpaPage";
import IndoorpoolPage from "./pages/Indoorpool/IndoorpoolPage";
import MeetingPage from "./pages/Meeting/MeetingPage";
import ContactPage from "./pages/Contact/ContactPage";
import ConcertPage from "./pages/Concert/ConcertPage";
import CookiePopup from "./components/CookiePopup";

const App = () => {
 const { activeUser } = useSelector((state) => state.user);

  return (
    <>
      <HelmetProvider>
        <BrowserRouter>
       <LanguageProvider>

              <Header />

          <main>
          {/* <ScrollToTop /> */}
           <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/rooms" element={<Rooms />}/>
            <Route path="/family-room" element={<SubRooms page="familyroom"/>}/>
            <Route path="/king-suite-room" element={<SubRooms page="kingsuiteroom"/>}/>
            <Route path="/standard-rooms" element={<StandardRooms />}/>
            <Route path="/standard-sea-view-room" element={<SubRooms page="standardseaview"/>}/>
            <Route path="/standard-side-view-room" element={<SubRooms page="standardsideview"/>}/>
            <Route path="/standard-land-view-room" element={<SubRooms page="standardlandview"/>}/>
            <Route path="/food-drinks" element={<FoodDrinkPage />}/>
            <Route path="/davidoff-cafe" element={<CoffeePage  page="davidoffcafe" />}/>
            <Route path="/kit-kat-cafe" element={<CoffeePage  page="kitkatcafe" />}/>
            <Route path="/script-chivas-lounge" element={<CoffeePage  page="chivas"/>}/>
            <Route path="/born9-hennessy-lounge" element={<CoffeePage  page="hennessy"/>}/>
            <Route path="/nespresso-cafe" element={<CoffeePage  page="nespresso"/>}/>
            <Route path="/pastahouse" element={<CoffeePage  page="pastahouse"/>}/>
            <Route path="/bars-cafes" element={<CoffeeBarsMainPage />}/>
            <Route path="/alacarte-restaurant" element={<AlacartePage/>}/>
            
            <Route path="/main-restaurant" element={<MainRestaurant page="mainrestaurant"/>}/>
            <Route path="/all-day-dining-alacarte-restaurant" element={<MainRestaurant page="allDayDining"/>}/>
            <Route path="/far-east-alacarte-restaurant" element={<MainRestaurant page="farEastAlacarte"/>}/>
            <Route path="/french-alacarte-restaurant" element={<MainRestaurant page="frenchalacarte"/>}/>
            <Route path="/mini-club-alacarte-restaurant" element={<MainRestaurant page="minialacarte"/>}/>
            <Route path="/seaside-alacarte-restaurant" element={<MainRestaurant page="seasidealacarte"/>}/>

            <Route path="/irish-pub" element={<PubBarPage page="irishpub"/>}/>
            <Route path="/lobby-bar" element={<PubBarPage page="lobbybar"/>}/>
            <Route path="/flamingo-bar" element={<PubBarPage page="flamingobar"/>}/>

            <Route path="/kids-concept" element={<KidsConceptPage/>}/>
            <Route path="/aquapark" element={<AquaPark />}/>
            {/* <Route path='/minialacarte' element={<MiniAlaCarte/>}/> */}
            <Route path='/miniclub' element={<MiniClub/>}/>
            <Route path='/beach' element={<Beach/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/entertainment" element={<Entertainment/>}/>
            <Route path="/activities" element={<Activities/>}/>
            <Route path="/contacts" element={<ContactPage/>}/>
            <Route path="/spa-wellness" element={<SpaPage/>}/>
            <Route path="/indoor-pool" element={<IndoorpoolPage/>}/>
            <Route path="/meeting-congress" element={<MeetingPage/>}/>
            <Route path="/concert" element={<ConcertPage/>}/>

            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
        
           </Routes>
          </main>
          <BookPhoneSection/>
          <div className="flex items-center w-screen justify-center mb-4">
          <ScrollToTopButton/>
          </div>
          <CookiePopup/>
          <Footer/>
       </LanguageProvider>
        </BrowserRouter>
      </HelmetProvider>
    </>

          
  );
};

export default App;
