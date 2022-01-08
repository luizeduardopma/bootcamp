import react from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo, NewAppBar } from "./navbar.styled";
import logo from "../../../assets/icons/logo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavbarDrawer from "./drawer/drawer.component";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NewAppBar position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <NavbarDrawer />

          <Logo src={logo} />
          <AccountCircleIcon />
        </Toolbar>
      </NewAppBar>
    </Box>
  );
}
