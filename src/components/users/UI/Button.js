import React from 'react'

export default function Button(props) {
    return (
        <div>
            <button type={props.type} className={props.cssClass}>{props.children}</button>
        </div>
    )
}
