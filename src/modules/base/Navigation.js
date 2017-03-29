import React from 'react';

import {Link} from 'react-router'

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div className="col-sm-offset-0 col-sm-12 col-md-offset-2 col-md-9">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                            <Link to="/" className="navbar-brand">
                                <img src="https://www.netlime.eu/wp-content/themes/netlime/public/images/logo.png"
                                     alt="Erik Kubica NetLime" className="img-responsive"/>
                            </Link>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul id="menu-menu-1" className="nav navbar-nav navbar-right">
                                <li><Link to="/" activeClassName="active">Domov</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;


