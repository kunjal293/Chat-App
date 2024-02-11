import React from "react";
import {
  TextField,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  Fab,
  Tooltip,
} from "@mui/material";
import { Image,Camera, LinkSimple, PaperPlaneTilt, Smiley, Sticker,User,File } from "phosphor-react";
import { useTheme, styled } from "@mui/material/styles";

const Actions=[
  {
    color:"#4da5fe",
    icon:<Image size={24}/>,
    y:102,
    title:"Photo/Video"
  },
  {
    color:"#1b8cfe",
    icon:<Sticker size={24}/>,
    y:172,
    title:"Stickers",
  },
  {
    color:"#0172e4",
    icon:<Camera size={24}/>,
    y:242,
    title:"Image",
  },
  
  {
    color:"#0159b2",
    icon:<File size={24}/>,
    y:312,
    title:"Document",
  },
  {
    color:"#013f7f",
    icon:<User size={24}/>,
    y:382,
    title:"Contact",
  },
];


const ChatInput = ({ setOpenPicker }) => {
const [openActions,setOpenActions]=React.useState(false);
  return (

    <StyledInput
      fullWidth
      placeholder="Write a message..."
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{width:'max-content'}}>
            <Stack sx={{position:"relative",display:openActions?"inline-bock":"none"}}>
              {Actions.map((el)=>(
                <Tooltip placement="right" title={el.title}>
                   <Fab sx={{position:"absolute",top:-el.y,backgroundColor:el.color}}>
                  {el.icon}
                </Fab>

                </Tooltip>
               
              ))}

            </Stack>
              <InputAdornment>
            <IconButton onClick={()=>{
              setOpenActions((prev)=>!prev);
              
            }}>
              <LinkSimple />
            </IconButton>
          </InputAdornment>
          </Stack>
        
        ),
        endAdornment: (
          <InputAdornment>
            <IconButton
              onClick={() => {
                setOpenPicker((prev) => !prev);
              }}
            >
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
const StyledInput = styled(TextField)(({ theme }) => ({
  "&.MuiInputBase-input": {
    paddingTop: "12px",
    paddingBottom: "12px",
  },
}));

const Footer = () => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = React.useState(false);
  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "lightBlue"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack direction="row" alignItems={"center"} spacing={3}>
        <Stack sx={{ width: "100%" }}>
          <Box
            sx={{
              display: openPicker ? "inline" : "none",
              zIndex: 10,
              position: "fixed",
              bottom: 81,
              right: 100,
            }}
          >
            {/* <Picker  theme={theme.palette.mode}data={data} onEmojiSelect={console.log}/> */}
          </Box>

          {/* chat input */}
          <ChatInput setOpenPicker={setOpenPicker} />
        </Stack>

        <Box
          sx={{
            height: 48,
            width: 48,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            sx={{ height: "100%", width: "100%" }}
            alignItems="center"
            justifyContent="center"
          >
            <IconButton>
              <PaperPlaneTilt color="white" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;