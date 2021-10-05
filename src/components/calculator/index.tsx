import React, { useState } from "react"
import "./calculator.css"
import Button from "../button"

const Calculator = () => {
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <div className="count">
                <h3>Count:</h3>
                <h1 data-cy="calculator-count-h1">{count}</h1>
            </div>
            <div className="buttons">
                <Button title={"-"} task={decrementCount} />
                <Button title={"+"} task={incrementCount} />
            </div>
        </div>
    );
}

export default Calculator