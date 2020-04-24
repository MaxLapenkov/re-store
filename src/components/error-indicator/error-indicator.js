import React from 'react';
import './error-indicator.css'
import icon from './error-picture.png';
const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error-icon" width="64"/>
            <span className="boom">Извините<br/> У нас возникли технические трудности</span>
            <span>Работа скоро будет восстановлена</span>
        </div>
    )
}
export default ErrorIndicator;