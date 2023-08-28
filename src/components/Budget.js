
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);

    const setbudget = (val) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);


        if (val < totalExpenses) {
            alert("budget should be more than spending!");
        }
        else if(val > 20000){
            alert("budget does not exceed 20000!");
        }
        else {
            dispatch({
                type: 'SET_BUDGET',
                payload: val,
            })
        }
    }
    return (
        <div className='alert alert-secondary'>
            Budget: {currency}<input
                type='number'
                step='10'
                value={budget}
                style={{ width: 80 }}
                onChange={(event) => setbudget(event.target.value)}>
            </input>

        </div>
    );
};
export default Budget;