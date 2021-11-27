import React, { createRef, useState } from 'react';
import { Button } from 'shards-react';

import './style.css';

export const ImageInput = (props) => {
    const ref = createRef();

    const [fileName, setFileName] = useState(null);

    const selectFile = (e) => {
        e.preventDefault();
        ref.current.click();
        props.onBlur && props.onBlur();
    }

    const handleChangeFile = (e) => {
        const selectedFiles = e.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            setFileName(selectedFiles[0].name);
        } else {
            setFileName(null);
        }

        var reader = new FileReader();
        reader.readAsDataURL(selectedFiles[0]);
        reader.onload = function () {
            props.onChange && props.onChange(props.name, reader.result);
        };
    }

    return (
        <React.Fragment>
            <div className="file-input-container">
                <label>
                    <Button
                        variant="primary"
                        onClick={(e) => selectFile(e)}
                        className="file-input-button"
                    >Seleccionar archivo</Button>
                </label>
                <span className="file-input-text">{fileName ? fileName: 'Ningún archivo seleccionado'}</span>
                <input
                    ref={ref}
                    accept="image/*"
                    type="file"
                    name={props.name}
                    className={props.className ? `file-input ${props.className}` : 'file-input'}
                    onChange={handleChangeFile}/>
            </div>
            {props.message && <span className="form-control-message">{props.message}</span>}
        </React.Fragment>
    );
}