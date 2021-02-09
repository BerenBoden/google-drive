import React from "react";
import "../../styles/FileItem.css";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

//The date in which the file was created
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

//Passing props from firestore database
const FileItem = ({ id, caption, timestamp, fileUrl, size }) => {

  //Create a file date with timestamp prop, using Javascript functions to create readable date
  const fileDate = `${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth()]} ${timestamp?.toDate().getFullYear()}`;

  //Snippet from stack overflow that turns file sizes into readable strings e.g: 35MB , copied from: https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string/10420404
  const getReadableFileSizeString = (fileSizeInBytes) => {
    let i = -1;
    const byteUnits = [" kB", " MB", " GB", " TB", "PB", "EB", "ZB", "YB"];
    do {
      fileSizeInBytes = fileSizeInBytes / 1024;
      i++;
    } while (fileSizeInBytes > 1024);
    return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
  };

  return(
      <div className="fileItem">
        {/** Links to fileUrl prop */}
        <a href={fileUrl} target="_blank" download>
          <div className="fileItem--left">
            <InsertDriveFileIcon />
            <p>{caption}</p>
          </div>
          <div className="fileItem--right">
            <p>{fileDate}</p>
            <p>{getReadableFileSizeString(size)}</p>
          </div>
        </a>
      </div>
    );
};

export default FileItem;
