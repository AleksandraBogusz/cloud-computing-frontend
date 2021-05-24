import styles from './UploadPage.module.css';
import { useState, useRef } from 'react';
import axios from 'axios';

const UploadPage = (props) => {

    const [ file, setFile ] = useState(null);
    const fileRef = useRef();

    const upload = async (event) => {
        const url = `${process.env.REACT_APP_BACKEND_SERVICE}/upload-service/upload`;
        const token = localStorage.getItem('_secret');
        const options = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const form = new FormData();
        form.append('image', file);

        const response = await axios.post(url, form, options);

        setFile(null);
        fileRef.current.value = '';
    }

    return (
        <div className={styles['main']}>
            <img
                src={file === null ? '/solid-gray.svg' : URL.createObjectURL(file)}
                className={styles['preview-image']}
            />
            <form onSubmit={(event) => event.preventDefault()}>
                <input type="file" ref={fileRef} onChange={event => { setFile(event.target.files[0])}}/>
                <input type="submit" value="Upload" onClick={upload} />
            </form>
        </div>
    )
}

export default UploadPage;