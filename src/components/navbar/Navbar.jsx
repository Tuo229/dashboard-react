import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NightlightIcon from '@mui/icons-material/Nightlight';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ListIcon from '@mui/icons-material/List';

import { useContext } from "react";
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

    const {dispatch} = useContext(DarkModeContext)

    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...'/>
                    <SearchIcon className='icon'/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className='icon'/>
                        English
                    </div>
                    <div className="item">
                        <NightlightIcon className='icon' onClick={() => dispatch({type: "TOGGLE"})}/>
                    </div>
                    <div className="item">
                        <FullscreenExitIcon className='icon'/>
                    </div>
                    <div className="item">
                        <NotificationsIcon className='icon'/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <MessageIcon className='icon'/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListIcon className='icon'/>
                    </div>
                    <div className="item">
                        <img 
                            src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar