import React, { useEffect, useState } from 'react';

// Styled component
import NotificationContainer from './Notification';

export default function Notification(props) {

    const [showCard, setShowCard] = useState('');

    useEffect(() => {
        setShowCard('translate(-300px, 0)');

        setTimeout(() => {
            setShowCard('translate(300px, 0)');

        }, 4000);
    }, [])


    return (
        <NotificationContainer
            style={{ transform: showCard }}
            type={props.type || ''}
        >
            <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{props.title || ''}</span><br />
            <span>{props.subtitle || ''}</span>
        </NotificationContainer>
    )
}