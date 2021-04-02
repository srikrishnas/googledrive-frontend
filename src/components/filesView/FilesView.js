import React, { useState, useEffect, useContext } from 'react'
import { getFiles } from '../interactions'
import FileItem from "./FileItem";
import { WrapperContext } from '../../App';

const FilesView = () => {

    const [files, setFiles] = useState([]);
    const { user,token } = useContext(WrapperContext);


    useEffect(() => {
        getFiles(user,token).then((res) => {
            setFiles(res.data.Contents)
        })
    },[])

    return (
        <div className='fileView'>
            <div className="container">
                <div className="row">
                    {/* <form method="post" action="#" id="#"> */}
                            {/* <input type="file" class="form-control" hidden /> */}
                            {files.map((file) => {
                                return (<FileItem key={file.Key} name={file.Key} lastModified={file.LastModified} size={file.Size} />)
                            })}
                    {/* </form> */}
                </div>
            </div>
        </div>
    )
}

export default FilesView
