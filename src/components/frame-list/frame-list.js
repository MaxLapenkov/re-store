import React, {Component} from 'react'
import FrameListItem from '../frame-list-item/'
import {connect} from 'react-redux'
import './frame-list.css'
import {withFrameStoreService} from '../hoc'
import {framesLoaded, framesRequested, widthChanged, heightChanged} from '../../actions'
import {compose} from '../../utils'
import Spinner from '../spinner'
class FrameList extends Component {

    
    componentDidMount() {
        const {frameStoreService, framesLoaded, framesRequested} = this.props;
        framesRequested();
        frameStoreService.getFrames()
            .then((data) => framesLoaded(data))           
    }

 
    render() {
        const {frames, loading, widthChanged, heightChanged} = this.props;
        
        if(loading) {
            return(
                <Spinner/>
            )
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
const mapStateToProps = ( {frames, loading}) => {
    return{frames, loading}
}
const mapDispatchToProps = {
    framesLoaded,
    framesRequested, 
    widthChanged,
    heightChanged
}

export default compose(
    withFrameStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FrameList)


