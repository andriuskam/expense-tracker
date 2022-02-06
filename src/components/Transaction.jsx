import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}> 
            <h4>{ transaction.text } </h4>
            <span className="amount">{sign}{ Math.abs(transaction.amount) } €</span> 
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id) }>x</button> 
        </li>
    )
}