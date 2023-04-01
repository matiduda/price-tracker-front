import React, { PropsWithChildren, ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";

const Layout = ({ children }: PropsWithChildren): ReactElement => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default Layout;