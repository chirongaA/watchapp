"use client"

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "@/state/store"
import {increment, decrement } from "@/state/counter/counterSlice"

const Count = () => {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>{count}</h1>
        <div>
            <button onClick={() => dispatch(increment())}>+Add</button>
            <br />
            <button onClick={() => dispatch(decrement())}>-SUB</button>
        </div>
    </div>
  )
}

export default Count