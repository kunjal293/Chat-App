import React from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

const Conversation = () => {
  const theme = useTheme();
  return (
    <div>
      <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
        {/* chat Header */}
        <Header />
        {/* msg */}
        <Box width={"100%"} sx={{ flexGrow: 1 ,height:"100%",overflow:"scroll"}}>

            <Message menu={true}/>
        </Box>
        
        {/* chatfooter */}
        <Footer />
      </Stack>
    </div>
  );
};

export default Conversation;
