import React, {Component} from 'react'
import FrameListItem from '../frame-list-item/'
import './frame-list.css'

export default class FrameList extends Component {

    render() {
        const {frames} = this.props;
        return (
            <ul>
                {
                    frames.map((frame) => {
                        return (
                            <li key={frame.id}><FrameListItem frame={frame}/></li>
                        )
                    })
                }
            </ul>
        )
    }
}
