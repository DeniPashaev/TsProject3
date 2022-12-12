import React from "react";
import { useSearchUsersQuery } from "../store/gitHub/gitHub.api";

export function HomePage () {
    const {isLoading, isError, data} = useSearchUsersQuery('deniPa') 
    return (
        <>
            <div>
        home
            </div>
        </>
    )
}