import React, {FC, ReactNode} from "react";
import Logo from "../../components/Logo";
import "./layout.scss";

type LayoutProps = {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className="layout__wrapper">
            <Logo/>
            {children}
        </div>
    )
}

export default Layout;