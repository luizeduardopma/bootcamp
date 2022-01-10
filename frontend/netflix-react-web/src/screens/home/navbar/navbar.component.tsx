import react from "react";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Logo, NewAppBar } from "./navbar.styled";
import logo from "../../../assets/icons/logo.svg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NavbarDrawer from "./drawer/drawer.component";

export default function Navbar(props: any) {
  const home = props.home;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <NewAppBar
        sx={
          home
            ? { backgroundColor: "#1A1A1A" }
            : {
                marginLeft: "auto",
                marginRight: "auto",
                left: "0",
                right: "0",
                textAlign: "center",
                width: "85vw",
                position: "absolute",
                backgroundColor: "transparent",
              }
        }
        position="sticky"
      >
        <Toolbar style={{ justifyContent: "space-between" }}>
          <NavbarDrawer />

          <Logo onClick={handleClick} src={logo} />
          <AccountCircleIcon />
        </Toolbar>
      </NewAppBar>
    </Box>
  );
}
