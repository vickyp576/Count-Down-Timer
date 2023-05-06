import { useEffect } from "react";
import { useState } from "react"


export default function CountTimer() {

    const [time, setTime] = useState(0);

    function decrementTimer(e){
        if (e.key === 'Enter') {
            const inputTime = Math.floor(e.target.value);
            if (isNaN(inputTime)) {
                setTime(0);
            } else {
                setTime(inputTime)
            }
        }
    }
    useEffect(() => {
        let interval = 0;
        if (time > 0) {
            interval = setInterval(() => {
                setTime((time) => time - 1)
            }, 1000)
        } else {
            setTime(0)
        }
        return () => clearInterval(interval)
    }, [time])
    return (
            <div>
                <h1> CountDown Timer </h1>
                <label for='timecount'>Time Count : </label>
                <input id="timecount" onKeyDown={decrementTimer} placeholder="Enter the time count" />
                <div id="current-time">Current Time :<span>  {time} Sec</span></div>
            </div>
    );
}