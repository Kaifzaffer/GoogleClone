import React, { useState } from "react";
import '../Component/ResultBar.css';
import googleImage from "../image/google_image.png";

const SearchResults = ({ results,onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  return (
    <div className="search-results">
      <div className="flex flex-row items-center">
      <img src={googleImage} alt="404" className="w-16" />
       <input
          type="text"
          // InputProps={{
          //   endAdornment: (
          //     <InputAdornment position="start">
          //       <SearchIcon />
          //     </InputAdornment>
          //   ),
          // }}
          placeholder="Search Google"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="border border-inherit  outline-2 rounded-3xl w-96
         p-2 focus:outline-none focus:bg-gray-100 transition-all 
         duration-300 ml-2"
        />
      
          </div>
      {results?.map((result, index) => (
        <div key={index} className="search-result-item">
          <a href={result?.link} className="result-title">{result?.title}</a>
          <p className="result-snippet">{result?.snippet}</p>
          <a href={result?.link} className="result-url">{result?.link}</a>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
