import React from 'react'
import './shopping-cart-table.css'
import {connect} from 'react-redux'
import {frameDeletedfromCart, allFramesDeletedfromCart, frameAddedToCart} from '../../actions/'

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, idx) => {
        const {id, name, width, height, count, total} = item;
                        return (
                            <tr key={id}>
                                <td>{idx + 1}</td>
                                <td>{name}</td>
                                <td>{width}</td>
                                <td>{height}</td>
                                <td>{count}</td>
                                <td>{total} Р.</td>
                                <td>
                                    <button 
                                    className="btn btn-outline-danger btn-sm"
                                    onClick = {() => onDelete(id)}>
                                        <i className="fa fa-trash-o"/>
                                    </button>
                                    <button 
                                    className="btn btn-outline-success btn-sm"
                                    onClick = {() => onIncrease(id)}>
                                        <i className="fa fa-plus-circle"/>
                                    </button>
                                    <button 
                                    className="btn btn-outline-warning btn-sm"
                                    onClick = {() => onDecrease(id)}>
                                        <i className="fa fa-minus-circle"/>
                                    </button>
                                </td>
                            </tr>
                        )
    }
    return(
        <div className="shopping-cart-table">
            <h2>Ваш заказ</h2>
            <table className="table table-responsive-sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Предмет</th>
                    <th>Ширина</th>
                    <th>Высота</th>
                    <th>Количество</th>
                    <th>Цена</th>
                    <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {items.map(renderRow)}
                    
                </tbody>
            </table>
            <div className="total">
                Сумма: {total} Р.
            </div>
        </div>
    )
}

const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal
    }
}
const mapDispatchToProps = {
        onIncrease: frameAddedToCart,
        onDecrease: frameDeletedfromCart,
        onDelete: allFramesDeletedfromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)