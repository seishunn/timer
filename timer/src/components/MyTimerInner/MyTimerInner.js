import React from "react";
import cl from './MyTimerInner.module.css'

export function MyTimerInner({timeInfo}) {

    return(
        <div className={cl.timer_part}>
            <div className={cl.time}>
                <svg>
                    <circle cx="70" cy="70" r="70"/>
                    <circle cx="70" cy="70" r="70" style={{strokeDashoffset:`calc(440 - (440 * ${timeInfo.time} * ${timeInfo.part}) / 100)`}}/>
                </svg>
                <div className={cl.number}>
                    <h2>{timeInfo.time}<span>{timeInfo.timeName}</span></h2>
                </div>
            </div>
        </div>
    )
}