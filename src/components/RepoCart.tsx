import React from "react";
import { Irepo } from "../models/modeles";

export function RepoCard({ repo }: { repo: Irepo }) {
  return (
    <>
      <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
        <a href={repo.html_url} target={"_blank"}>
          <h2 className="text-lg font-bold">{repo.full_name}</h2>
          <p className="text-sm">
            Forks: <span className="font-bold mr-2">{repo.forks}</span>
            Wathers: <span className="font-bold">{repo.watchers}</span>
          </p>
          <p className="text-sm font-thin">{repo?.description}</p>
        </a>
      </div>
    </>
  );
}
