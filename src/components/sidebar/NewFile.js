import { useState } from "react";
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
    backgroundColor: theme.palette.background.paper,
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

  //When file is selected
  const handleChange = (e) => {
    //If file selected
    if (e.target.files[0]) {
      setFile(e.target.files[0]); //Put file inside the setFile state
    }
  };

  //When user uploads file
  const handleUpload = () => {
    setUploading(true); //Set the setUploading state to true
    //.ref uploads file to specific location firebase database e.g: files/{filename}. .put will write the data to the location. Once that is complete take a snapshot of data
    storage
      .ref(`files/${file.name}`)
      .put(file)
      .then((snapshot) => {
        //file.name is the name of the user's file being uploaded
        console.log(snapshot); //Check console for a snapshot of the data being uploaded

        //Storage keeps the files in storage
        storage
          .ref("files")
          .child(file.name)//Looking into specific file that has just been uploaded
          .getDownloadURL()//Asynchronously retrieves a long lived download URL with a revokable token for file that is uploaded
          //Once file is added, save it to database
          .then((url) => {
            db.collection("myFiles").add({//Saves to myFiles collection on Firebase storage
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),//Adds timestamp for when file was added in specific area
              caption: file.name,//Stores a caption of the filename
              fileUrl: url,//The url of the file that has been uploaded so you are able to download the file aswell
              size: snapshot._delegate.bytesTransferred,//Size of file that has been uploaded
            });
            //Setting state to update UI interface after handleChange is completed
            setUploading(false);
            setOpen(false);
            setFile(null);
          });
      });
  };

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
