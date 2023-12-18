import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './Component/SearchBar';
import SearchResults from './Component/SearchResult';
import API_KEY from './Api_Key';

const context_key = "9374067ada31d47a3";

const App = () => {
  const [results, setResults] = useState(null);


  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${context_key}&q=${query}`
      );
      console.log(response);
      setResults(response.data.items);
    } catch (error) {
      console.error('Error fetching search results', error);
    }
  };

  return (
    
      <div className="App">

        {results?(<SearchResults onSearch={handleSearch} results={results} />):(<div className="h-screen flex justify-center items-center">
            <SearchBar onSearch={handleSearch} />
        </div>)}
        
         
      </div>
    
  );
};

export default App;
