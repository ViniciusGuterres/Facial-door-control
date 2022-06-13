import React, { useEffect, useState } from 'react';


export default function Notification(props) {

    const [showCard, setShowCard] = useState('');

    useEffect(() => {
        setShowCard('translate(-300px, 0)');

        setTimeout(() => {
            setShowCard('translate(300px, 0)');

        }, 4000);
    }, []);

    const handleBgColor = (type) => {
        switch (type) {
            case 'sucess':
                return '#29A746';
            case 'alert':
                return '#DC3646';
            case 'warning':
                return '#EFC137'
            default:
                return '#29A746'
        }
    }

    const style = {
        backgroundColor: handleBgColor(props.type),
        position: 'absolute',
        top: '0',
        right: '-300px',
        height: '70px',
        width: '300px',
        color: '#fff',
        padding: '10px',
        borderRadius: '5px',
        boxShadow: '-8px 7px 16px 0px rgba(0,0,0,0.2)',
        fontSize: '13px',
        transition: '1s',
        transform: showCard
    };

    return (
        <div
            style={style}
            type={props.type || ''}
        >
            <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{props.title || ''}</span><br />
            <span>{props.subtitle || ''}</span>
        </div>
    )
}
