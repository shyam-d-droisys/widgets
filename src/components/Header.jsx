import React from "react";
//import Accordion from "./Accordion";
//import Search from "./Search";
//import Dropdown from "./Dropdown";
//import Translate from './Translate';

const Header = () => {
  return (
    <div className='ui secondary  pointing menu'>
      <a href='/' className='item'>
        Accordion
      </a>
      <a href='/list' className='item'>
        Search
      </a>
      <a href='/dropdown' className='item'>
        Dropdown
      </a>
      <a href='/translate' className='item'>
        Translate
      </a>
    </div>
  );
};

export default Header;
