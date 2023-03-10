import "./loading.css";
import React, { useState } from "react";
import { CircularProgress, Stack } from "@mui/material";

const Loading = () => {
    const [timer, setTimer] = useState(0);
    setTimeout(() => {
        let time = timer + 1;
        if (time > 6) time = 0;
        setTimer(time);
    }, 1000);
    return (
        <Stack className="load" alignItems={'center'} justifyContent={'center'}>
            <ul>
                <li>
                    <input type="checkbox" checked={timer >= 1} />
                    <div>E</div>
                </li>
                <li>
                    <input type="checkbox" checked={timer >= 2} />
                    <div>L</div>
                </li>
                <li>
                    <input type="checkbox" checked={timer >= 3} />
                    <div>I</div>
                </li>
                <li>
                    <input type="checkbox" checked={timer >= 4} />
                    <div>S</div>
                </li>
                <li>
                    <input type="checkbox" checked={timer >= 5} />
                    <div>H</div>
                </li>
                <li>
                    <input type="checkbox" checked={timer >= 6} />
                    <div>I</div>
                </li>
            </ul>
            <CircularProgress />
        </Stack>
    )
}

export default Loading