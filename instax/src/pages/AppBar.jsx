import { Typography } from "@mui/material";
import { AppBar } from "react-admin"


export const MyAppBar = () =>
    <AppBar sx={{
        backgroundColor: "#faddfeff",
        color: "black"
    }} >
        <Typography fontWeight={"bold"} fontStyle={"italic"} sx={{flexGrow: 1}}>INSTAX</Typography>

    </AppBar>;