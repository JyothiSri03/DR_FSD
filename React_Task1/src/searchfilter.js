import React, { useState } from 'react';
function SearchFilter(){
  const fruits = [
    'Banana',
    'Apple',
    'Orange',
    'Cherry',
    'Mango',
    'Pineapple',
    'Watermelon',
    'Dragonfruit'
  ]; 
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStrings, setFilteredStrings] = useState(fruits);
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filteredList = fruits.filter((str) =>
      str.toLowerCase().includes(searchTerm)
    );
    setFilteredStrings(filteredList);
  };
  return(
    <div>
      <label style={{fontSize:'30px'}}>Search:</label>
      <input style={{border:'1px solid black',height:'30px'}}
        type="text"
        placeholder="Search A Fruit"        
        value={searchTerm}
        onChange={handleSearch}
      />
      <>
        {filteredStrings.length === 0 ? (
          <p>No data found</p>
        ) : (
          filteredStrings.map((str, index) => (
            <h3 key={index}>{str}</h3>
          ))
        )}
      </>
    </div>
  );
}
export default SearchFilter;