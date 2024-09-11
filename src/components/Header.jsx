import React, { useEffect } from 'react';
function Header() {
    useEffect(() => {
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const currentTheme = localStorage.getItem('theme');

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            
            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }

        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }    
        }

        toggleSwitch.addEventListener('change', switchTheme, false);

        // Cleanup the event listener when component unmounts
        return () => {
            toggleSwitch.removeEventListener('change', switchTheme, false);
        };
    }, []);

    return (
        <div>
            <header id="site-header" className="header-w3l fixed-top">
                <div className="container">
                    <nav className="navbar navbar-expand-lg stroke">
                        <a className="navbar-brand" href="index.html">
                            Induz.
                        </a>
                        {/* if logo is image enable this */}
                        {/* <a className="navbar-brand" href="#index.html">
                            <img src="image-path" alt="Your logo" title="Your logo" style={{ height: '35px' }} />
                        </a> */}
                        <button
                            className="navbar-toggler collapsed bg-gradient"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                            <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mx-lg-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/services">
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">
                                        Contact
                                    </a>
                                </li>
                                <li className="nav-item mr-lg-3 mr-4" title="Search">
                                    <a href="#search" className="search-btn">
                                        <span className="fa fa-search" aria-hidden="true"></span>
                                    </a>
                                </li>
                                {/*/search-right*/}
                                {/* search popup */}
                                <div id="search" className="pop-overlay">
                                    <div className="popup">
                                        <form
                                            action="#"
                                            method="GET"
                                            className="w3l-hnyform d-sm-flex"
                                        >
                                            <input
                                                type="search"
                                                placeholder="Search.."
                                                name="search"
                                                required="required"
                                                autoFocus
                                            />
                                            <button type="submit">Search</button>
                                            <a className="close" href="#url">
                                                &times;
                                            </a>
                                        </form>
                                    </div>
                                </div>
                                {/* /search popup */}
                                {/*//search-right*/}
                            </ul>
                        </div>
                        {/* toggle switch for light and dark theme */}
                        <div className="mobile-position">
                            <nav className="navigation">
                                <div className="theme-switch-wrapper">
                                    <label className="theme-switch" htmlFor="checkbox">
                                        <input type="checkbox" id="checkbox" />
                                        <div className="mode-container">
                                            <i className="gg-sun"></i>
                                            <i className="gg-moon"></i>
                                        </div>
                                    </label>
                                </div>
                            </nav>
                        </div>
                        {/* //toggle switch for light and dark theme */}
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;
