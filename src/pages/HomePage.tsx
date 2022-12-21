import React from "react";
import { useSearchUsersQuery } from "../store/gitHub/gitHub.api";

export function HomePage () {
    const {isLoading, isError, data} = useSearchUsersQuery('deniPa') 
    console.log(data)
    return (
        <>
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
        {isError && <p className="text-center text-red-600">Errored check your wifu</p>}
        <div>
           <input type="text" //error: 407
           />
        </div>
    </div>
        </>
    )
}