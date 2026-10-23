import { useState } from "react";
import Result from "./Result";

export default function Counter() {
    let [count, setCount] = useState(0);

    return (

        <div>
            <Result count={count} /><br />
            <button onClick={() => {
                setCount(count + 1);
            }}>Increment</button><br />
            <button onClick={() => {
                if (count <= 0) {
                    alert("You can't decrement more");
                }
                setCount(count - 1);

            }}>Decrement</button><br />

        </div>
    );

}