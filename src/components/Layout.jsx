import { Outlet } from "react-router-dom";

import {Header} from "./Header";
import { Navigate } from "./Navigate";

export default function Layout() {
    return (
        <>
                <Header />
                
                <main className='Main'>
                    <Navigate />
                    <Outlet />
                </main>

                
         

        </>
    )
}