import { createSignal } from "solid-js";

export function Counter(props: { count: any; }) {
    const [count, setCount] = createSignal(props.count);
    return (
        <div>
            <div>counter {count}</div>
            <button onClick={()=> setCount(count()+1)}>Add</button>
        </div>
    );
}