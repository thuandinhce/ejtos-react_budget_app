import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const currencyChange = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    };
    return (
        <div id="Currency">
            <span className='alert alert-success'>Currency
                <select className='alert alert-success dropdown-toggle'
                    // name="Currency"
                    // id="Currency"
                    // value={currency}
                    style={{ border: 0 }}
                    onChange={(event) => currencyChange(event.target.value)}>
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="T">T Ruppee</option>
                </select>
            </span>
        </div>
    );
};

export default Currency; 