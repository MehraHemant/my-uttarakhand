import React, { useState } from 'react'

export default function Cards(props) {

    return (
        <section id='card'>
            <div>
                <div className='card-leftside'>
                    <img src={props.visit} />
                </div>
                <div className='rightside-bg'>
                    <h3>{props.name}</h3>
                    <p>{props.cardDesc}</p>
                </div>
            </div>
        </section >
    )
}
