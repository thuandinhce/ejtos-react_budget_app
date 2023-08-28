import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const DecreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'SUB_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button style={{ border:0, background:0 }} onClick={event => increaseAllocation(props.name)}>
                <img src="https://static-00.iconduck.com/assets.00/plus-icon-2048x2048-z6v59bd6.png"
                style={{ width: 25, height: 25, border:0 }}
                alt="plus"/>
            </button></td>
            <td><button style={{ border:0, background:0 }} onClick={event => DecreaseAllocation(props.name)}>
            <img src="https://icons.veryicon.com/png/o/internet--web/circle-round/subtract-39.png"
                style={{ width: 25, height: 25, border:0 }}
                alt="sub"/>
                </button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;