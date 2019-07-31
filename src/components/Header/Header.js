import './Header.scss'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class Header extends Component {
   render() {
      return (
         <div id="header">
            <div className="flex header-wrapper">
               <Link className="logo no-underline" to={{
                  url: '/'
               }}>
                  GIFt'ed
               </Link>
               <img alt="cool cat" className="header-pic" src={require('styles/img/nyan.gif')} />
            </div>
         </div>
      )
   }
}
