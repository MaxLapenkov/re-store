import React, {Component} from 'react'
import FrameListItem from '../frame-list-item/'
import ErrorIndicator from '../error-indicator'
import {connect} from 'react-redux'
import './frame-list.css'
import {withFrameStoreService} from '../hoc'
import * as actions from '../../actions'
import {compose} from '../../utils'
import Spinner from '../spinner'
import { bindActionCreators } from 'redux'
class FrameList extends Component {

    
    componentDidMount() {
        this.props.fetchFrames();        
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
const mapDispatchToProps = (dispatch, ownProps) => {
    const {frameStoreService} = ownProps;
    const {framesRequested, framesLoaded, framesError, widthChanged, heightChanged} = bindActionCreators(actions, dispatch)
    
    return{
        fetchFrames: () => {
            dispatch(framesRequested());
            frameStoreService.getFrames()
            .then((data) => dispatch(framesLoaded(data)))
            .catch((err) => dispatch(framesError(err)))  
        },
        widthChanged,
        heightChanged
    }
    
}

export default compose(
    withFrameStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FrameList)


