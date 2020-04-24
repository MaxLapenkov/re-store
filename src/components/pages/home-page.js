import React from 'react'
import FrameList from '../frame-list'
import {withFrameStoreService} from '../hoc'
const HomePage = ({frameStoreService}) => {
    const items = frameStoreService.getFrames()
    return (
        <FrameList frames ={items}/>
    )
}
export default withFrameStoreService()(HomePage)