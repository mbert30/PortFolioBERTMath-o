import './style/portfolioCSS.css';
import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ApiTraduction from "./Controller/apiTraduction";
import Apropos from "./page/Apropos";
import Contact from "./page/Contact";
import Blog from "./page/Blog";

function Index() {

    const [text, setText] = useState(ApiTraduction.getTrad("FR"))
    return (<>
      <BrowserRouter>
          <main>
              <Routes>
                  <Route path='/' element={<Apropos text={text} setText={setText}/>} />
                  <Route path='/Blog' element={<Blog text={text} setText={setText}/>} />
                  <Route path='/Contact' element={<Contact text={text} setText={setText}/>} />
              </Routes>
          </main>
      </BrowserRouter>

    </>);
}

export default Index;
