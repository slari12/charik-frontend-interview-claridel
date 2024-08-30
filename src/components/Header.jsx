import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from "../assets/logo-horiz-charik-1.webp";
import { Home, Pricing, About, Resources } from "../pages";

const Header = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-white outer_header">
          <div className="outer_header py-[18px] px-[24px]">
            <div className="flex justify-between items-center header">
              <img src={Logo} alt="" className="logo" />

              <div className="links">
                <Link to="/">Charik</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/about">About</Link>
                <Link to="/resources">Resources</Link>
              </div>
              <label
                class="relative z-40 cursor-pointer px-3 py-6 mobile-nav"
                for="mobile-menu"
              >
                <input class="peer hidden" type="checkbox" id="mobile-menu" />
                <div class="relative z-50 block h-[1px] w-7 bg-black bg-transparent content-[''] before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full before:w-full before:bg-black before:transition-all before:duration-200 before:ease-out before:content-[''] after:absolute after:right-0 after:bottom-[-0.35rem] after:block after:h-full after:w-full after:bg-black after:transition-all after:duration-200 after:ease-out after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 after:peer-checked:transform"></div>
                <div class="fixed inset-0 z-40 hidden h-full w-full bg-black/50 backdrop-blur-sm peer-checked:block">
                  &nbsp;
                </div>
                <div class="fixed top-0 right-0 z-40 h-full w-full translate-x-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-x-0">
                  <div class="float-right min-h-full w-[85%] bg-white px-6 pt-12 shadow-2xl block">
                    <Link to="/">Charik</Link>
                    <br />
                    <Link to="/pricing">Pricing</Link> <br />
                    <Link to="/about">About</Link> <br />
                    <Link to="/resources">Resources</Link>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default Header;
