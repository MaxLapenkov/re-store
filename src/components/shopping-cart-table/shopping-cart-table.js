import React from 'react'
import './shopping-cart-table.css'

const ShoppingCartTable = () => {
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
                    <tr>
                    <td>1</td>
                    <td>Белоснежка Flora</td>
                    <td>20</td>
                    <td>20</td>
                    <td>1</td>
                    <td>200</td>
                    <td>
                        <button className="btn btn-outline-danger btn-sm">
                            <i className="fa fa-trash-o"/>
                        </button>
                        <button className="btn btn-outline-success btn-sm">
                            <i className="fa fa-plus-circle"/>
                        </button>
                        <button className="btn btn-outline-warning btn-sm">
                            <i className="fa fa-minus-circle"/>
                        </button>
                    </td>
                    </tr>
                </tbody>
            </table>
            <div className="total">
                Сумма: 200 Р.
            </div>
        </div>
    )
}

export default ShoppingCartTable