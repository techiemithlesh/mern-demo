import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import { Helmet } from "react-helmet";
import { useDarkMode } from "../context/DarkModeContext";

const Layout = ({ children, title, description, keywords, author }) => {
  const {darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : 'light'}`}>
        <Helmet>
        <meta charSet='utf-8'/>
        <meta name='description' content={description}/>
        <meta name='keywords' content={keywords} />
        <meta name='author' content={author} />
        <title>{title}</title>
      </Helmet>
      <Header  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <main className="flex-grow">{children}</main>
      <Footer darkMode={darkMode}/>
      <ScrollToTopButton />
    </div>
  );
};

Layout.defaultProps = {
  title: "Mithlesh Patel",
  description: "A freelancer web developer having expertise in Laravel Mern stack",
  keywords: "Web development, Freelancer, PHP LARAVEL MERN NODEJS EXPRESS JS",
  author: "Mithlesh Patel"
}

export default Layout;
