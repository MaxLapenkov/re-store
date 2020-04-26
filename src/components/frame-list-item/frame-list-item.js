import React from 'react'
import './frame-list-item.css'

const FrameListItem = ({frame, widthChanged, heightChanged}) => {
    const {name, color, image, price, width, height} = frame
    // const [width, setWidth] = useState(20);
    // const [height, setHeight] = useState(20);

    const cost = Math.round(width*height/100*price);
    
    return (
        <div href="/" className="frame-list-item">
            
            <div className="frame-cover">
                <img src={image} alt="Рамка" width="200" height="200"/>
            </div>

            <div className="frame-description">
                <h3 className="title">{name}</h3> 
                <span>Цвет: {color}</span>
                <span>Цена за метр: {price} рублей</span>
                
                    <label>
                        <p>Ширина(cм):</p>
                        <input type="number"  defaultValue={width} onChange={widthChanged}/>
                    </label>

                    <label >
                        <p>Высота(cм):</p>
                        <input type="number"  defaultValue={height} onChange={heightChanged}/>
                    </label>
                
                <span>Цена: {cost}</span>
                

                <button className="btn btn-info add-to-cart">Добавить в корзину</button>
            </div>
            
        </div>
    )
}

export default FrameListItem