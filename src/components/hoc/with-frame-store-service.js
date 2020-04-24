import React from 'react'
import {FrameStoreServiceConsumer} from '../frame-store-service-context'

const withFrameStoreService = () => (Wrapped) => {
    return (props) => {
        return (
        <FrameStoreServiceConsumer>
            {
                (frameStoreService) => {
                    return (
                        <Wrapped {...props} frameStoreService={frameStoreService}/>
                    )
                }
            }
        </FrameStoreServiceConsumer>
        );
    }
}

export default withFrameStoreService