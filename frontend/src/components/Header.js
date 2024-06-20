import React from "react";
import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";
// import UploadIcon from '@mui/icons-material/Upload';
import SearchIcon from "@mui/icons-material/Search";
import UploadVideo from "./UploadVideo";
import logo from "../assest/Logo.png";

const Header = ({ handleSearch, videoDetails, children }) => {
  return (
    <Box
      sx={{
        position: "sticky",
        backgroundColor: "#202020",
        top: 0,
        overflowX: "hidden",
        // justifyContent: "space-between",
      }}
    >
      <Stack
        p={2}
        alignItems="center"
        sx={{
          position: "sticky",
          backgroundColor: "#202020",
          top: 0,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Link to="/">
          <img src={logo} alt="logo" height={45} />
        </Link>
        {!videoDetails && (
          <Box className="search-bar-desktop">
            <input
              className="search-input"
              placeholder="Search"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button type="submit" className="search-button">
              <SearchIcon />
            </button>
          </Box>
        )}

        {/* {!videoDetails && <SearchBar handleSearch={handleSearch} />} */}
        {/* <Stack alignItems="center" justifyContent="space-between" sx={{padding: {sm :"0", xs: "0 1rem"}, width: {sm: "60vw", xs :"100vw"}, gap: "1rem", flexDirection: {sm: "row", xs: "column"} }}>
          <Link to="/">
            <img src="/images/Logo.svg" alt="logo" height={45} />
          </Link>

          {!videoDetails && <SearchBar handleSearch={handleSearch} />}
        </Stack> */}

        {/* <Box sx={{ display: "flex", alignItems: "center", gap: "4px", backgroundColor: "#4ca3fc", padding: "8px 16px", cursor: "pointer" }}>
                <UploadIcon />
                <Typography variant="p">Upload</Typography>
            </Box> */}
        <Box>
          <UploadVideo />
        </Box>
      </Stack>
    </Box>
  );
};

export default Header;
