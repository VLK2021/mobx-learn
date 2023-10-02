import React from 'react';
import {observer} from "mobx-react-lite";

import './CounterStyle.css';
import counter from '../../store/counter';


const Counter = () => {


    return (
        <div className={'counter'}>
            <div>
                <button className={'increment btn'} onClick={() => counter.increment()}>+</button>
                <span className={'current'}>{counter.count}</span>
                <button className={'decrement btn'} onClick={() => counter.decrement()}>-</button>
            </div>
        </div>
    );
};

export default observer(Counter) ;