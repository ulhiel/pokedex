import React from 'react'

export default function Spinner(props) {
    return (
        <div className="container d-flex mt-5">
            <div className="lds-roller ml-auto mr-auto"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}
