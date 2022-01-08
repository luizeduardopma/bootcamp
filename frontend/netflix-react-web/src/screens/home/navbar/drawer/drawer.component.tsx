import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LogoutIcon from "@mui/icons-material/Logout";

type Anchor = "left";

export default function NavbarDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{
        marginTop: "20px",
        borderBottom: "1px solid white",
        maxWidth: "80%",
        margin: "0px auto",
      }}
    >
      <Button
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        style={{ fontSize: "12px" }}
      >
        <LogoutIcon
          style={{ minWidth: "35px", minHeight: "35px", marginRight: "10px" }}
        />{" "}
        Sair da conta
      </Button>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key={"left"}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={toggleDrawer("left", true)} />
          </IconButton>

          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            PaperProps={{
              sx: {
                backgroundColor: "#1A1A1A",
                color: "white",
              },
            }}
          >
            {list("left")}
          </Drawer>
        </React.Fragment>
      }
    </div>
  );
}
