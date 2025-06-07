"use client"
import { useEffect, useState} from 'react';
import {setInterval} from "node:timers";

const Page = () => {
    const [secondsRemaining, setSecondsRemaining] = useState(5);
    const interval = setInterval(()=>{setSecondsRemaining(secondsRemaining-1)}, 1000);

    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = '/';
        }, 5000);
        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    return (
        <div>
            <h5>You have successfully logged out!</h5>
            <p>Redirecting in {secondsRemaining} seconds...</p>
        </div>
    )
}
export default Page;