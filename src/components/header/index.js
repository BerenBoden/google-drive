import React from 'react'
import '../../styles/Header.css'
import googledrive from '../../media/google-drive.png'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';

//Destructuring props, importing userPhoto from App.js
const index = ({ userPhoto }) => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={googledrive} alt="Google Drive logo"/>
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <div>
                        <SearchIcon />
                        <input type="text" placeholder="Search in drive..."/>
                    </div>
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <AppsIcon />
                <img src={userPhoto} alt="User photo"/>
            </div>
        </div>
    )
}

export default index