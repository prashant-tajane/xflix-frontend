import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

const SearchBar = ({ handleSearch }) => {
  // const [search, setSearch] = useState("")
  return (
    <Box>
      <Box
        className="search-bar-mobile">
        <input
          type="text"
          id="search"
          autoComplete="off"
          name="search"
          // value={search}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search"
          className="search-input"
        />
        <button type="submit" className="search-button">
          <SearchIcon />
        </button>
      </Box>
    </Box>
  );
};

export default SearchBar;
