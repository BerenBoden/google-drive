import React, {useState, useEffect} from 'react';
import { db } from '../../firebase';
import FileItem from './FileItem';
import FileCard from './FileCard';
import "../../styles/FilesView.css";

const FilesView = () => {
    //Create state that stores the users files
    const [files, setFiles] = useState([])

    //Use effect hook
    useEffect(() => {
        //Go to database, into collections and load files from myFiles collections
        db.collection('myFiles').onSnapshot(snapshot => {//Create snapshot and give setFiles a value that contains an id and item
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])

    console.log(files)

    return (
        <div className="fileview">
            <div className="fileview__row">
                {/** Slice function will only display first 5 files that the user has uploaded */}
                {
                    files.slice(0,5).map(({id, item}) => (
                        <FileCard name={item.caption} />
                    ))
                }
            </div>
            <div className="fileview__titles">
                <div className="fileview__titles--left">
                    <p>Name</p>
                </div>
                <div className="fileview__titles--right">
                    <p>Last modified</p>
                    <p>File size</p>
                </div>
            </div>
            {
                files.map(({ id, item }) => (
                    <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
                ))
            }
        </div>
    )
}

export default FilesView
