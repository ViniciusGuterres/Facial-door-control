import React from 'react';

export default function Main(props) {
    return (
        <main style={{
            background: '#F8F9FC',
            minHeight: '86vh',
            padding: '30px',
            width: '100%',
        }}>
            {props.children}
        </main>
    )
};
