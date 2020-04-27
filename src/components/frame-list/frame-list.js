import React, {Component} from 'react'
import FrameListItem from '../frame-list-item/'
import ErrorIndicator from '../error-indicator/'
import {connect} from 'react-redux'
import './frame-list.css'
import {withFrameStoreService} from '../hoc'
import {framesLoaded, framesRequested, framesError, widthChanged, heightChanged} from '../../actions'
import {compose} from '../../utils'
import Spinner from '../spinner'
class FrameList extends Component {

    
    componentDidMount() {
        const {frameStoreService, framesLoaded, framesRequested, framesError} = this.props;
        framesRequested();
        frameStoreService.getFrames()
            .then((data) => framesLoaded(data))
            .catch((err) => framesError(err))           
    }

 
    render() {
        const {frames, loading, error, widthChanged, heightChanged} = this.props;
        
        if(loading) {
            return(
                <Spinner/>
            )
        }
        if (error) {
            return <ErrorIndicator/>
        }
        return (
            <ul className="frame-list">
                {
                    frames.map((frame) => {
                        return (
                            <li key={frame.id}><FrameListItem 
                            frame={frame} 
                            widthChanged={(e) => widthChanged(frame.id, Number(e.target.value))}
                            heightChanged={(e) => heightChanged(frame.id, Number(e.target.value))}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}
const mapStateToProps = ( {frames, loading, error}) => {
    return{frames, loading, error}
}
const mapDispatchToProps = {
    framesLoaded,
    framesRequested,
    framesError, 
    widthChanged,
    heightChanged
}

export default compose(
    withFrameStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FrameList)


