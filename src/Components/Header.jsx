import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useLanguageContext } from "../Contexts/LanguageContext";


const Header = () => {
  const {languages, language, setLanguage } = useLanguageContext();
  return (
    <div className="header">
      <header>
      <select value = {language} onChange = {(e) => setLanguage(e.target.value)}>
      <option value = {languages[0]}>GEORGIAN</option>
      <option value = {languages[1]}>ENGLISH</option>

      </select>
        
      </header>
    </div>
  )
}

export default Header;