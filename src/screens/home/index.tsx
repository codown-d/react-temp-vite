import './index.less'
import { getAssistantInfo, postVisitor } from "../../server/serviceHelper";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../router';
import useUrlState from '@ahooksjs/use-url-state';
import arrowRight from '../../assets/images/arrow-right.svg';
import homeBg from '../..//assets/images/home-bg.svg';

import { useMemoizedFn } from 'ahooks';

const Home = () => {
  let [phone, setPhone] = useState('')
  let navigate = useNavigate();
  const [state] = useUrlState({ assist_id: '', pk: '' });
  const [assistantInfo, setAssistantInfo] = useState({ prologue: '您好！', guide: '' });
  let getAssistantInfoFn = useMemoizedFn(() => {
    getAssistantInfo(state).then(res => {
      if (res.code == 1000) {
        console.log(res)
        setAssistantInfo(res.data)
      }
    })
  })
  useEffect(() => {
    console.log(state)
    window.localStorage.setItem('urlState', JSON.stringify(state))
    getAssistantInfoFn()
  }, [state])
  return <div className="cont-bg flex-c-c" style={{ justifyContent: 'space-between' }}>
    <div className="flex-c-c" style={{ paddingTop: '20%',width:"100%" }}>
      <div className="title ">{assistantInfo.prologue}</div>
      <div className="desc t-c" style={{width:"100%"}}>{assistantInfo.guide}</div>
    </div>
    <div style={{minHeight:"300px",width:'100%'}} className='p-r flex-r-c'>
      <img src={homeBg} alt="" />
       <div className="number">
      请输入完整的电话号码!
    </div>
    </div>
   
    <div className="input-wrapper">
      <input placeholder="请输入电话号码" type='number' className="input" onChange={(e) => {
        console.log(e.target.value)
        setPhone(e.target.value)
      }} />
      <img src={arrowRight} alt="" className="goto" onClick={() => {
        postVisitor({ phone }).then(res => {
          console.log(res.data)
          if (res.code == 1000) {
            window.localStorage.setItem('assistantInfo', JSON.stringify(res.data))
            navigate(`${Routes.Profile}`);
          }
        })
      }} />

    </div>
  </div>
}
export default Home;
