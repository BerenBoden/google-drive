import React from 'react'
import AddIcon from "@material-ui/icons/Add"
import "../../styles/SideIcons.css"

const index = () => {
    return (
        <div className="sideIcons">
            <div className="sideIcons__top">
                <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png"/>
                <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-512.png"/>
            </div>
            <hr />
            <div className="sideIcons__plusIcon">
                <AddIcon />
            </div>
        </div>
    )
}

export default index
