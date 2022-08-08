import React from "react";
import styled from "styled-components";
import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

const MainBody = styled.div`
/* background-color: #f7f6f1; */
background: yellow;
width: 3000px;
height: 1500px;
position:relative;

`

const MainBox = styled.div`
position: absolute;
top: 50%;
bottom: 50%;
width: 1000px;
height: 1000px;
border: 2px solid black;
margin-left: 500px;
margin-bottom: 1000px;
`


const Write = () => {
    const [writes, setWrites] = useState(null)
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const [nickName,setNickName] = useState('')
    const [password,setPassword] = useState('')

    const onSubmitHandler = (todo) => {
        axios.post("http://localhost:3001/todos", todo);
      };
    



const getData = axios.get("http://localhost:3001/todos").then((res)=>res.data).then((res)=>console.log(res))
//값 가져오기
console.log(getData)



// useEffect(()=>{
// userMemoris()},[]
// )
 

return(
    <MainBody>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <input></input>
        <button ></button>
    </MainBody>
    )
}
export default Write


//axios.get으로 유저 정보값 가져오고
//input값들을 api설계에 맞춰서 정리한 후 
//가져온 get에서 이메일값을 추가 한후  post
// {
//     emotion_id: ‘’, state
//     emotion_title: ‘’, state
//     emotion_content: ‘’, state
//     emotion_link: ‘’,
//     emotion_password: ‘’, state
//     emotion_createDate: ’’,
//     emotion_createMonth: ’’,
//     user_email: ‘’,  ** 이 값을 get에서 가져온후 다시 입력해서 보냄
//     user_nickName: ‘’,
//   }
