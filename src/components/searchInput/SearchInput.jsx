"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("a");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchText) {
      setLoading(true);
      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSearchResult(data.meals || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
      setSearchResult([]);
    }
  }, [searchText]);

  console.log(searchResult);

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="join mt-10">
          <input
            className="input input-bordered join-item bg-black/20 rounded-l-full"
            placeholder="Email"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="btn join-item rounded-r-full bg-cyan-400 hover:bg-cyan-300 text-black">
            Search
          </button>
        </div>
      </div>
      <div className="mt-10 text-left grid grid-cols-3 gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : searchResult.length !== 0 ? (
          searchResult.map(
            ({ idMeal, strMealThumb, strInstructions, strMeal }) => (
              <div key={idMeal} className="card glass w-96">
                <figure className="h-48 w-full overflow-hidden">
                  <div className="relative w-full h-48">
                    <Image
                      src={strMealThumb}
                      alt={strMeal}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{strMeal}</h2>
                  <p>{strInstructions.slice(0, 100)}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-cyan-400 hover:bg-cyan-300 border-none font-bold">
                      See More!
                    </button>
                  </div>
                </div>
              </div>
            )
          )
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
