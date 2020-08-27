import React from 'react'

export default function About() {
    return (
        <div style={aboutStyle}>
            <h1>About</h1>
            <p>This is a simple react project following the Traversy Media react crash course tutorial.</p>
        </div>
    )
}

const aboutStyle = {
    background: '#444',
    color: '#ddd',
    padding: '20px 10px'
}
