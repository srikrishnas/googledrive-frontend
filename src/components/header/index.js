import React from 'react'
import GDrivelogo from '../../media/Google_Drive_icon.png'

import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import '../../styles/Header.css'

const index = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={GDrivelogo} width="40" height="40" className="d-inline-block align-top" alt="" />
                    <span>Drive</span>
                </a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <SearchIcon />
                    <ExpandMoreIcon />
                </form>
                <span className="pr-2">
                    <HelpOutlineIcon className="mr-4"/>
                    <SettingsIcon className="mr-4"/>
                    <AppsIcon className="mr-4"/>
                    <AccountCircleIcon className="mr-4"/>
                    {/* <img src="" className="mr-4" alt="user Photo" /> */}
                </span>
            </nav>
        </>
    )
}

export default index
