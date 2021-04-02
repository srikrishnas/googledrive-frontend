import React from 'react'
import '../../styles/FileItem.css'

const FileItem = ({name,lastModified,size}) => {
    return (
        <div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">File Name:{name}</h5>
                    <p className="card-text">Last Modified:{lastModified}</p>
                    <p className="card-text">Size:{size}</p>
                </div>
            </div>
        </div>
    )
}

export default FileItem
