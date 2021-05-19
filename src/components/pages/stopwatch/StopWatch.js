import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import './stopWatch.scss'

function StopWatch(props) {
    let [active, setActive] = useState(false);
    let [pause, setPause] = useState(true);
    let [time, setTime] = useState(0);

    let dispatch = useDispatch();
    let state = useSelector(state => state.watch);

    useEffect(() => {
        let interval = null;
        if (active && !pause) {
            interval = setInterval(() => {
                setTime(time => time + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [active, pause]);

    function clickStart() {
        setActive(true);
        setPause(false);
    }

    function clickPause() {
        setPause(!pause);
    }

    function clickReset() {
        setActive(false);
        setTime(0);
    }

    //redux
    useEffect(() => {
        let interval = null;
        let { active, pause } = state;
        if (active && !pause) {
            interval = setInterval(() => {
                dispatch({type: 'time', payload: 10});
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [active, pause]);

    return (
        <div className='watch-container'>
           <div className='watch-timer'>
               <h1>stopwatch react hooks</h1>
               <span>&nbsp;{('0' + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
               <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
               <span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}&nbsp;</span>
               <div className='timer-button'>
                   {!active ? <button onClick={clickStart}>start</button> : null}
                   {active ?
                       <button onClick={clickPause}>{pause ? 'resume' : 'pause'}</button>
                       : null
                   }
                   <button onClick={clickReset}>reset</button>
               </div>
           </div>

          <div className='watch-timer'>
              <h1>stopwatch redux</h1>
              <span>&nbsp;{('0' + Math.floor((state.time / 60000) % 60)).slice(-2)} : </span>
              <span>{('0' + Math.floor((state.time / 1000) % 60)).slice(-2)} : </span>
              <span>{('0' + Math.floor((state.time / 10) % 100)).slice(-2)}&nbsp;</span>
              <div className='timer-button'>

                  {
                      !state.active ?
                          <button onClick={() => dispatch({type: 'start'})}>start</button>
                          : null}
                  {
                      state.active ? <button onClick={() => dispatch({type: 'pause'})}>
                              {state.pause ? 'resume' : 'pause'}</button>
                          : null
                  }
                  <button onClick={() => dispatch({type: 'reset'})}>reset</button>
              </div>
          </div>
        </div>
    );
}

export default StopWatch;
