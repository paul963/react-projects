import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses.js';
import NewExpense from './components/NewExpense/NewExpense.js';
import { dummy_expenses } from './components/Expenses/DummyExpenses';

const App = () => {
    const [expenses, setExpenses] = useState(dummy_expenses);

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;