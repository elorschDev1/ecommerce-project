import {useRef} from 'react';
const SearchBar = () => {
   let availableMovies=[/inception/i,/ex machina/i,/ex-machina/i,/arrival/i,/her/i,/the matrix/i,/edge of tomorrow/i,/wrath of man/i,/operation fortune/i,/falcon rising/i,/blood and bone/i,/heart of stone/i,/damaged/i,/hidden strike/i,/year one/i,/the lost one/i,/damsel/i,/triple frontier/i,/the revenant/i,/revenant/i,/the change up/i,/the other guys/i,/grown ups/i,/a family affair/i,/family affair/i,/lift/i,/upgraded/i,/the watchers/i,/a quiet place/i,/quiet place/i,/immaculate/i,/arcadian/i,/sting/i,/abigail/i];
   let movieSearchResult;
   let searchButtonRef=useRef("");
   let searchBarRef=useRef("");
   let handleClick=()=>{
   if(searchBarRef.current.value==="")alert("You cannot search for a blank category.");
   movieSearchResult=availableMovies.some(availableMovie=>availableMovie.test(searchBarRef.current.value));
   if(!movieSearchResult&&searchBarRef.current.value!=="")alert(`Sorry the movie ${searchBarRef.current.value} is currently unavailable`);
   }
  return (
    <div>
        <input type="search" className="searchArea" placeholder="Search For A Movie Here..." ref={searchBarRef} name="searchArea" />
        <button className="searchButton" onClick={handleClick} ref={searchButtonRef}>Check Movie</button>
    </div>
  )
}
export default SearchBar;