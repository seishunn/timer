import React, {useEffect, useMemo, useState} from "react";
import './App.css';
import {MyTimerInner} from "./components/MyTimerInner/MyTimerInner";

function App() {
    const [myDate, setMyDate] = useState(null)

    let gap
    const [myTimer, setMytimer] = useState({
        days: {time: null, part: 5 / 18, timeName: 'дни'},
        hours: {time: null, part: 25 / 6, timeName: 'часы'},
        minutes: {time: null, part: 5 / 3, timeName: 'минуты'},
        secondes: {time: null, part: 5 / 3, timeName: 'секунды'},
        millisecondes: {time: null, part: 1 / 10, timeName: 'миллисекунды'}
    })
    useEffect(() => {
        if (myDate) {
            let date = new Date(myDate)
            let now = new Date()
            gap = date - now
        } else {
            gap = 0;
        }
        const timer = setInterval(() => {
            setMytimer(prevState => ({
                days: {...prevState.days, time: Math.floor(gap / (1000 * 60 * 60 * 24))},
                hours: {...prevState.hours ,time: Math.floor(gap / (1000 * 60 * 60)) % 24},
                minutes: {...prevState.minutes ,time: Math.floor(gap / (1000 * 60)) % 60},
                secondes: {...prevState.secondes ,time: Math.floor(gap / 1000) % 60},
                millisecondes:{...prevState.millisecondes ,time: Math.floor(gap) % 1000}
            }))
        }, 1)
        return () => {clearInterval(timer)}
    })
  return (
    <div className="App">
      <div className="wrapper">
          <main className="main">
              <input type="date" className="date" onChange={e => setMyDate(e.target.value)}/>
            <h1>Количество дней до {myDate?<span>{myDate}</span> : <span>...</span>}</h1>
              <div className="timer">
                    <MyTimerInner timeInfo={myTimer.days}/>
                    <MyTimerInner timeInfo={myTimer.hours}/>
                    <MyTimerInner timeInfo={myTimer.minutes}/>
                    <MyTimerInner timeInfo={myTimer.secondes}/>
                    <MyTimerInner timeInfo={myTimer.millisecondes}/>
              </div>
          </main>
      </div>
    </div>
  );
}

export default App;
