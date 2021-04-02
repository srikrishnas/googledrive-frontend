import React,{useState,useContext,useEffect} from 'react';
import AddIcon from '@material-ui/icons/Add';
import '../../styles/NewFile.css'
import {addFile} from '../interactions'
import { WrapperContext } from '../../App';

const NewFile = () => {

    const { user,token } = useContext(WrapperContext)
    const [file, setFile] = useState({});

    const fileHandler = (event) => {
        const data = event.target.files[0];
        
        console.log("FILE FROM NEW FILE::::",file)

        addFile(event.target.files[0],user,token).then((data) => {
            console.log(data);
        })
        setFile(data);
        console.log("SELECTED::::",file)
    }

    return (
        <div className='newFile'>
            <div className='newFile_container'>
                <AddIcon fontSize='large' />
                <input className="uploadFile" type="file" name="file"  onChange={fileHandler}/>
                <p className="new">New</p>
            </div>
        </div>
    )
}

export default NewFile
