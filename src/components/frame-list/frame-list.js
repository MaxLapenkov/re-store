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

const FrameList = ({frames, widthChanged, heightChanged, onAddedToCart}) => {
    return (
        <ul className="frame-list">
                {
                    frames.map((frame) => {
                        return (
                            <li key={frame.key}><FrameListItem 
                            frame={frame} 
                            widthChanged={(e) => widthChanged(frame.id, Number(e.target.value))}
                            heightChanged={(e) => heightChanged(frame.id, Number(e.target.value))}
                            onAddedToCart={() => onAddedToCart(frame.id)}/></li>
                        )
                    })
                }
            </ul>
    )
}
class FrameListContainer extends Component {

    
    componentDidMount() {
        this.props.fetchFrames();        
    }

 
    render() {
        const {frames, loading, error, widthChanged, heightChanged, onAddedToCart} = this.props;
        
        if(loading) {
            return(
                <Spinner/>
            )
        }
        if (error) {
            return <ErrorIndicator/>
        }
        return (
           <FrameList frames={frames} widthChanged={widthChanged} heightChanged={heightChanged} onAddedToCart={onAddedToCart}/>
        )
    }
}


const mapStateToProps = ( {frameList: {frames, loading, error}}) => {
    return{frames, loading, error}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const {frameStoreService} = ownProps;
    const {framesRequested, framesLoaded, framesError, widthChanged, heightChanged, frameAddedToCart} = bindActionCreators(actions, dispatch)
    
    return{
        fetchFrames: () => {
            framesRequested();
            frameStoreService.getFrames()
            .then((data) => framesLoaded(data))
            .catch((err) => framesError(err)) 
        },
        widthChanged,
        heightChanged,
        onAddedToCart: frameAddedToCart
    }
    
}

export default compose(
    withFrameStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(FrameListContainer)


