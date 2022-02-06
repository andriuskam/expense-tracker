import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function AddTransaction() {
    const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    
    function onSubmit(e) {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setText('');
        setAmount('');
    }

    return (
        <div className="addTransactions">
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="input-fields">
                    <div className="form-control">
                        <label htmlFor="text">Text</label>
                        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." required/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="amount">
                            Amount <br/>
                            <span className="naming-span">negative amount - expense,<br/> positive amount - income</span>
                        </label>
                        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." required/>
                    </div>
                </div>
                <button className="addButton">Add transaction</button>
            </form>
        </div>
    )
}