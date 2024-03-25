import React, { useState } from "react";
import googleImage from "../image/google_image.png";

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odit perferendis culpa quas voluptates incidunt, consectetur suscipit aliquam odio! Dolorum nesciunt enim tempore dignissimos consequuntur iste quod accusantium porro sint, sapiente quam ea reprehenderit sunt, atque autem molestiae. Fuga quisquam quam provident, ad deleniti sunt quasi quos rerum quis, odit quo harum quidem iure hic assumenda adipisci obcaecati molestiae ut, expedita repellendus accusantium esse aspernatur minus! Aperiam sint commodi dolorem iste iusto, deleniti officia quam facilis illum iure.

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(query);
    }
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <img
        src={googleImage}
        alt="404"
        className="mx-auto mb-2.5 w-48 sm:w-32 md:w-40 lg:w-64"
      />
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Search Google"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="border border-inherit outline-2 rounded-3xl w-full md:w-96
         p-2 focus:outline-none focus:bg-gray-100 transition-all 
         duration-300 mb-2 md:mr-2"
        />
        <div className="flex flex-col md:flex-row justify-center md:m-2">
          <button
            onClick={handleSearch}
            className="mb-2 md:mb-0 border border-transparent hover:border-inherit hover:bg-gray-200 w-full md:w-28 rounded-sm"
          >
            Search
          </button>
          <button className="border border-transparent hover:border-inherit hover:bg-gray-200 w-full md:w-32 rounded-sm">
            I'm feeling lucky
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
