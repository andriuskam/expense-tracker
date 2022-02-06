import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

export default function TransactionList() {
    const { transactions } = useContext(GlobalContext);

    return (
        <div className='history'>
            <h3>History</h3>
            <ul className="list">
                {   transactions.length === 0 ?
                    <h4>Nothing to show yet</h4> :
                    transactions.map(
                        transaction => ( 
                            <Transaction 
                                key={ transaction.id } 
                                transaction={ transaction }
                            /> 
                        )
                    )
                }
            </ul>
        </div>
    )
};
