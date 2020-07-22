import React from "react";
import NavHead from "./nav";
import "../assets/css/menu.css";
import { withRouter } from "react-router-dom";
import govt from "../assets/logo/govt.png";
import home from "../assets/logo/home.png";
import form from "../assets/logo/form.png";
import login from "../assets/logo/login.png";
import help from "../assets/logo/help.png";
import dashboard from "../assets/logo/dashboard.png";
import profile from "../assets/logo/user.png";

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { "backgroundColor": "#022e54" };
    } else {
        return { "backgroundColor": "#0055a9" };
    }
};

const Menu = ({ history }) => {
    const local = localStorage.getItem("jwt");
    const user = JSON.parse(local);
    const MenuChecker = () => {
        if (localStorage.getItem("jwt") === null) {
            return (
                <span>
                    <span className="menu-btn-pad" >
                        <a href="/form">
                            <button className="menu-btn" style={currentTab(history, "/form")}>
                                <div>
                                    <img src={form} alt="home" className="menu-btn-logo" />
                                </div>
                                <div className="menu-btn-text">Register</div>
                            </button>
                        </a>
                    </span>
                    <span className="menu-btn-pad" >
                        <a href="/login">
                            <button className="menu-btn" style={currentTab(history, "/login")}>
                                <div>
                                    <img src={login} alt="home" className="menu-btn-logo" />
                                </div>
                                <div className="menu-btn-text">Login</div>
                            </button>
                        </a>
                    </span>
                </span>
            )
        }
        if (user.ngo.role === 1) {
            return (
                <span>
                    <span className="menu-btn-pad" >
                        <a href="/profile">
                            <button className="menu-btn" style={currentTab(history, "/profile")}>
                                <div>
                                    <img src={profile} alt="home" className="menu-btn-logo" />
                                </div>
                                <div className="menu-btn-text">Profile</div>
                            </button>
                        </a>
                    </span>
                    <span className="menu-btn-pad" >
                        <a href="/ImoDashboard">
                            <button className="menu-btn" style={currentTab(history, "/ImoDashboard")}>
                                <div>
                                    <img src={dashboard} alt="home" className="menu-btn-logo" />
                                </div>
                                <div className="menu-btn-text">Dashboard</div>
                            </button>
                        </a>
                    </span>
                    <span className="menu-btn-pad" >
                        <a href="/LoanForm">
                            <button className="menu-btn" style={currentTab(history, "/LoanForm")}>
                                <div>
                                    <img src={form} alt="home" className="menu-btn-logo" />
                                </div>
                                <div className="menu-btn-text">Loan</div>
                            </button>
                        </a>
                    </span>
                </span>
            )
        }
    }
    return (
        <div>
            <NavHead />
            <div className="menu-head-pad">
                <span className="menu-btn-pad">
                    <a href="/">
                        <button style={currentTab(history, "/")} className="menu-btn">
                            <div>
                                <img src={home} alt="home" className="menu-btn-logo" />
                            </div>
                            <div className="menu-btn-text">Home</div>
                        </button>
                    </a>
                </span>
                {MenuChecker()}
                <span className="menu-btn-pad" >
                    <a href="/help">
                        <button className="menu-btn" style={currentTab(history, "/help")}>
                            <div>
                                <img src={help} alt="home" className="menu-btn-logo" />
                            </div>
                            <div className="menu-btn-text">Help</div>
                        </button>
                    </a>
                </span>

                {/* Footer Section Starts From here*/}


                <div className="footer">
                    <div className="row">
                        <div className="col footer-text">
                            &copy; Ministry of Women and Child development
                    </div>
                        <div className="col text-right margin-logo">
                            <img src={govt} alt="govt-logo" className="govt-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Menu);
