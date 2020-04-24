import React, {Fragment} from 'react'
import './frame-list-item.css'

const FrameListItem = ({frame}) => {
    const {name, color, width, height} = frame
    return (
        <Fragment>
            <span>{name}</span>
            <span>{color}</span>
            <span>{width}</span>
            <span>{height}</span>
        </Fragment>
    )
}

export default FrameListItem