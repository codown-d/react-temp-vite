import { Container, Typography, Box, Button } from "@mui/material";
import { Link, Routes, Route } from "react-router-dom";
import ProfileOverview from "./ProfileOverview";
import ProfileSettings from "./ProfileSettings";
import { useState } from "react";

let Wen = (props) => {
  let {text} = props
  return <div className="flex-r-c mt40" style={{ justifyContent: 'flex-end' }}><div className="wen">
    {text}
  </div>
  </div>
}
let Da = (props) => {
  let {text} = props
  return <div className="flex-r-c mt40" style={{ justifyContent: 'flex-start' ,alignItems:'flex-end'}}>
    <img src="/public/vite.svg" alt="" />
    <div className="da">
    {text}
  </div>
  </div>
}
const Profile = () => {
  let [list, setList] = useState([{
    type:'wen',
    text:'请问什么时候可以发货？'
  },{
    type:'da',
    text:'已经发货啦，预计后天送达。'
  },{
    type:'wen',
    text:'你好我有商品想要寄卖。'
  },{
    type:'da',
    text:'There are many programming languages ​​in the market that are used in designing and building websites, various applications and other tasks. All these languages ​​are popular in their place and in the way they are used, and many programmers learn and use them.'
  }])
  return <div className="flex-c-c" style={{ justifyContent: 'space-between', height: '100%',padding:'0 20px 0 10px' }}>
    <div>
      <img src="/public/vite.svg" alt="" /><span>小齐</span> <span>Online</span>
    </div>
    <div style={{ flex: 1 }}>{list.map(item => {
      let type=item.type
      return type==='wen'?<Wen text={item.text}/>:<Da text={item.text}/>
    })}</div>
    <div className="input-wrapper">
      <input placeholder="请输入电话号码" className="input" />
      <Link to='/profile'>
        <img src="/public/vite.svg" alt="" className="goto" />
      </Link>

    </div>
  </div>
}

export default Profile;
