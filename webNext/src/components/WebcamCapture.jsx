import React, { Component, useState } from 'react';

import WebCam from 'react-webcam';

const WebcamComponent = () => <WebCam />;

const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: 'user'
};

const WebcamCapture = () => {
    const [image, setImage] = useState('');

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();

            setImage(imageSrc);
        },
        [webcamRef]
    );
    
    console.log('image::', image)
    return (
        <div>
            {
                image == ''
                    ?
                    <WebCam
                        audio={false}
                        height={200}
                        ref={webcamRef}
                        screenshotFormat='image/png"'
                        width={220}
                        videoConstraints={videoConstraints}
                    />
                    :
                    <img src={image} />
            }

            <button
                onClick={e => {
                    e.preventDefault();
                    capture();
                }}
                style={{
                    width: '150px',
                    height: '30px',
                    background: 'tomato',
                    color: '#fff',
                    borderRadius: '3px'
                }}
            >
                Capturar rosto
            </button>
        </div>
    )
}

export default WebcamCapture;