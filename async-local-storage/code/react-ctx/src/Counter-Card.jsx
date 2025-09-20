import { useContext } from "react";
import { CounterCtx } from "./context";

export default function CounterCard() {
    const ctx = useContext(CounterCtx)
    return <p style={{textAlign:"center"}}>Current Number Is : {ctx.number}</p>
}