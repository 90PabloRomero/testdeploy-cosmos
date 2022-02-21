import { Nav, Alert, SideBar, Modal } from "../components";
import { useState } from "react";

const AppLayout = ({children}) => {
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const sideBarOpen = () => {
        setSideBarVisible(false)
    }
    return (
        <div className={`app-container`}>
            <Nav />
            <div className="tooltip-wrapper">
                <SideBar
                    sideBarVisible={sideBarVisible}
                    onOutsideClick={() => sideBarOpen}
                />
                <div className={`layout ${sideBarVisible ? " layout-modal-mode" : ""} `}>
                    <Alert />

                    <>
                        {children}
                    </>
                </div>
            </div>
        </div>
    );
}

export default AppLayout;