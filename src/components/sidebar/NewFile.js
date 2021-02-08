import React from "react";
import AddIcon from "@material-ui/icons/Add";
import "../../styles/NewFile.css";
import firebase from "firebase";
import { storage, db } from "../../firebase";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

//Functions and styles for modal API copied from Material UI: https://material-ui.com/components/modal/
function getModalStyle() {
  return {
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.pallete.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const NewFile = () => {
    //For styling
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);

  const [open, setOpen] = useState(false); //Open Modal when this state is true
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
      if (e.target.files[0]){
          setFile(e.target.files[0])
      }
  }

  return (
    <div className="newFile">
      <div className="newFile__container" onClick={handleOpen}>
        {/** On click, fire the handleOpen function @line39 which will set setOpen to true*/}
        <AddIcon />
        <p>New File</p>
        {/** Material UI Modal API */}
        <Modal
          open={open} //Modal will open when state setOpen = true
          onClose={handleClose} //Modal will close by firing handleClose function setting setOpen to false
          aria-labelledby="simple-modal-title" //SEO
          aria-describedby="simple-modal-description" //SEO
        >
          <div style={modalStyle} className={classes.paper}>
            {/** Uses modal style from useStyles constant */}
            <p>Select the files you would like to upload</p>
            {uploading ? (
              <p>Uploading...</p> //If uploading a file show this
            ) : (
              <>
                {/** If nothing is uploading, show input and button to upload your files */}
                <input type="file" onChange={handleChange} />
                <button onClick={handleUpload}>Upload</button>
              </>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default NewFile;
