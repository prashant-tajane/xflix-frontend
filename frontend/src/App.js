import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Box } from "@mui/material";
import Videos from "./components/Videos";
import VideoDetails from "./components/VideoPage";
import ScrollToTop from "./utils/ScrollToTop";

export const config = {
  //Mock server api
  // endpoint: 'https://937eb2d1-2b0f-42e1-af80-2c776b32bcc1.mock.pstmn.io/v1/videos'
  //endpoint: "https://xflixbackendapp.herokuapp.com/v1/videos",
  endpoint: "https://527927ea-127c-45d0-952b-9d05f6dcec7a.mock.pstmn.io/v1/video",
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Box sx={{ backgroundColor: "#181818" }}>
        <Switch>
          <Route path="/" exact component={Videos} />
          <Route path="/video/:id" component={VideoDetails} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
};

export default App;
