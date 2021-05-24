import style from './NavBar.module.css';
import { useState } from 'react';

const NavBar =  (props) => {
    const [ panelIsVisible, setPanelIsVisible ] = useState(false);
    const { links, ...rest } = props;

    const ResponsivePanel = (props) => {
        const { isVisible, ...rest } = props;

        if (isVisible === false) {
            return null;
        }

        return (
            <div className={style['nav-responsive-panel']}>
                    {links.map(link => <a className={style['nav-responsive-element']} href={link.url}>{link.value}</a>)}
            </div>
        )
    }

    return (
        <div className={style['main']}>
            <div className={style['nav-container']}>
                <div className={style['nav-logo-container']}>
                    <img src="logo-white.svg" alt="logo" className={style['nav-logo']}/>
                </div>
                <div className={style['nav-elements']}>
                    {links.map(link => <a className={style['nav-element']} href={link.url}>{link.value}</a>)}
                    <img className={style['nav-element-responsive']} src="hamburger-white.svg" onClick={() => setPanelIsVisible(!panelIsVisible)}/>
                </div>
            </div>
            <ResponsivePanel isVisible={panelIsVisible}/>
        </div>
    );

    
}



export default NavBar;