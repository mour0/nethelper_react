import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { auth } from "../firebase";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

export default function HistoryBtn({ output, setSnackbarState }) {
  const [open, setOpen] = React.useState(false);
  const [svg, setSVG] = React.useState("");

  const handleShow = async () => {
    const URL = "http://localhost:3001/history";

    let user = auth.currentUser;
    if (!user) {
      setSnackbarState({ open: true, message: "Please Log-In" });
      return;
    }
    let query = `?email=${user.email}`;
    fetch(URL + query)
      .then((response) => response.text())
      .then((data) => {
        // data == undefined => empty history
        //console.log(data)
        if (data === undefined || data === "") {
          setSnackbarState({ open: true, message: "History is empty" });
        } else {
          setOpen(true);
          setSVG(data);
        }
      })
      .catch(() => {
        setSnackbarState({ open: true, message: "Failed to fetch image" });
      });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    // URL + ENDPOINT
    const URL = "http://localhost:3001/save";

    if (output.length === 0) {
      setSnackbarState({ open: true, message: "No generated content" });
      return;
    }

    let n_split = output[0].split(" ");
    let br_split = output[3].split("\n");
    let n = n_split[0];
    let br = br_split[0];
    let h0_temp = n.split(".");
    let h0 =
      h0_temp[0] +
      "." +
      h0_temp[1] +
      "." +
      h0_temp[2] +
      "." +
      (parseInt(h0_temp[3]) + 1);

    let h1_temp = br.split(".");
    let r =
      h1_temp[0] +
      "." +
      h1_temp[1] +
      "." +
      h1_temp[2] +
      "." +
      (parseInt(h1_temp[3]) - 1);
    let h1 =
      h1_temp[0] +
      "." +
      h1_temp[1] +
      "." +
      h1_temp[2] +
      "." +
      (parseInt(h1_temp[3]) - 2);

    let user = auth.currentUser;
    if (!user) {
      setSnackbarState({ open: true, message: "Please Log-In" });
      return;
    }
    let query = `?n=${n}&r=${r}&h0=${h0}&h1=${h1}&br=${br}&email=${user.email}`;
    fetch(URL + query)
      .then((response) => {
        if (response.status === 200) {
          setSnackbarState({ open: true, message: "Saved" });

          // Notification
          Notification.requestPermission().then((perm) => {
            if (perm === "granted") {
              var now = new Date();
              var date =
                now.getFullYear() +
                "-" +
                (now.getMonth() + 1) +
                "-" +
                now.getDate();
              var time =
                now.getHours() +
                ":" +
                now.getMinutes() +
                ":" +
                now.getSeconds();
              var dateTime = date + " " + time;
              const _notification = new Notification("Saved", {
                body: "Saved on " + dateTime,
                tag: "Save message", // Override notification
              });
            }
          });
        }
      })
      .catch(() => {
        setSnackbarState({ open: true, message: "Failed generating image" });
      });
  };

  return (
    <>
      <Grid2 item xs={4}>
        <Button variant="contained" onClick={handleSave} fullWidth>
          Save
        </Button>
      </Grid2>
      <Grid2 item xs={8}>
        <Button variant="contained" onClick={handleShow} fullWidth>
          Show saved network
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          PaperProps={{ sx: { backgroundColor: "secondary.main" } }}
          fullWidth
        >
          <DialogContent>
            <div dangerouslySetInnerHTML={{ __html: svg }} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Grid2>
    </>
  );
}
