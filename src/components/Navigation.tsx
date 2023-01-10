import React from "react";
import { Link } from "react-router-dom";


export function Navigation() {
    return (
        <>
            <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
                <div className="text-lg">
                    <hr></hr>Dcompany search
                <hr></hr>
                </div>
                <span>
                    <Link to="/" className="mr-2">Home</Link>
                    <Link to="/favourities">Favourities</Link>
                </span>
            </nav>
        </>
    )
}