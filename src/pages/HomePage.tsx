import React, { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
import { useSearchUsersQuery } from "../store/gitHub/gitHub.api";

export function HomePage() {
  const [search, setSearch] = useState("")
  const debounced = useDebounce(search)
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3
  })

  useEffect( () => {
    console.log(debounced)
  }, [debounced])  

  return (
    <>
      <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
        {isError && (
          <p className="text-center text-red-600">Errored check your wifu</p>
        )}
        <div className="relative w-[560px]">
          <input
            value={search}
            onChange = {e => setSearch(e.target.value)}
            type="text"
            className="border py-2 px-4 w-full h-[42px] mb-2"
            placeholder="Seacrh Github user..."
          />
          <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
            lorem
          </div>
        </div>
      </div>
    </>
  );
}
