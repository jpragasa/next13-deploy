"use client"
import React from 'react'
import { useState } from 'react'
import {logOut,logIn, toggleModerator} from "@/redux/features/auth-slice"
import {useDispatch} from 'react-redux'
import { AppDispatch } from '@/redux/store'
import { useAppSelector } from '@/redux/store'
const LogIn = () => {
    const [username, setUsername] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);
const onClickLogin = () => {
    dispatch(logIn(username))
}

const onClickToggle = () => {
    dispatch(toggleModerator())
}

const onClickLogout = () => {
    dispatch(logOut());
}

  return (
    <div>
        <input type='text' onChange={(e) => setUsername(e.target.value)} style={{borderColor:"black"}}/>
        <br></br>
        <button onClick={onClickLogin}>Log In</button>
        <br></br>
        <button onClick={onClickLogout}>Log Out</button>
        <br></br>
        {isAuth && 
        (<button onClick={onClickToggle}>Toggle Moderator Status</button>)
        }
        
    </div>
  )
}

export default LogIn