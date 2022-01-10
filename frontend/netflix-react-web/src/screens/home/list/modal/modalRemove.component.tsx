import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Modal from "@mui/material/Modal";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import { MovieEmptyRemove } from "../list.styled";
import { moviesBackend } from "../../../../store/user/user.selectors";
import MovieIcon from "@mui/icons-material/Movie";
import { userActions } from "../../../../store/user/user.slice";
import { listBackend } from "../../../../store/user/user.selectors";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ListModalRemove() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<any>({
    name: "",
  });

  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddMovie = () => {
    dispatch(userActions.removeList(value._id));

    setValue({ name: "" });
  };

  const listFromBackEnd = useSelector(listBackend);

  return (
    <div>
      <MovieEmptyRemove onClick={handleOpen}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <DoDisturbIcon
            style={{ height: "40px", width: "40px", flexBasis: "100%" }}
          />
          <h5>Remover filme</h5>
        </div>
      </MovieEmptyRemove>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ display: "flex" }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={listFromBackEnd || []}
              getOptionLabel={(option: { [name: string]: any }) => option.name}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Movie" />}
              value={value}
              onChange={(event: any, newValue: any) => {
                setValue(newValue);
                console.log(newValue);
              }}
            />
            <Button
              style={{ marginLeft: "10px" }}
              variant="outlined"
              color="error"
              endIcon={<MovieIcon />}
              onClick={handleAddMovie}
            >
              Remover
            </Button>
          </div>
          {value && value.name && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <img
                src={value.poster}
                alt="poster"
                style={{ height: "100px" }}
              />
              <h6 style={{ marginLeft: "10px" }}>{value.description}</h6>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
