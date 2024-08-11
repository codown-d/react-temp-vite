import { Link, useNavigate, } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import './index.less'
import { useMemoizedFn } from "ahooks";
import { getDataList, getVisitorInfo, postChatData } from "../../server/serviceHelper";
import arrowLeft from '../../assets/images/arrow-left.svg';
import send from '../../assets/images/send.svg';

let Wen = (props) => {
  let { text } = props
  return <div className="flex-r-c mt40" style={{ justifyContent: 'flex-end' }}><div className="wen">
    {text}
  </div>
  </div>
}
let Da = (props) => {
  let { text, avatar } = props
  return <div className="flex-r-c mt40" style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}>
    <img src={avatar} alt="" className="profile-avatar" />
    <div className="da ml10">
      {text}
    </div>
  </div>
}
const Profile = () => {
  let [list, setList] = useState([{
    type: 'wen',
    text: ''
  }])
  let [visitorInfo, setVisitorInfo] = useState({})
  let [urlState] = useState(JSON.parse(window.localStorage.getItem('urlState') || JSON.stringify({})))
  let [inputVal, setInputVal] = useState('')
  const endOfListRef = useRef(null);
  let navigate = useNavigate();
  let getVisitorInfoFn = useMemoizedFn(() => {
    getVisitorInfo(urlState).then((res) => {
      if (res.code === 1000) {
        setVisitorInfo(res.data)
      }
    })
  })
  let getDataListFn = useMemoizedFn(() => {
    getDataList(urlState).then((res) => {
      if (res.code == 1000) {
        setList(res.data.items)
        const container = endOfListRef.current;
        container?.scrollTo({
          top: container?.scrollHeight,
        });
      }
    })
  })
  useEffect(() => {
    if (urlState.pk || urlState.assist_id) {
      getVisitorInfoFn()
      getDataListFn()
    }
  }, [JSON.stringify(urlState)])
  let scrollTop = useMemoizedFn((dec) => {
    const container = endOfListRef.current;
    if (container) {
      container?.scrollTo({
        top: dec,
        behavior: 'smooth'
      });
    }
  })
  let scrollToBottom = useMemoizedFn(() => {
    setTimeout(() => {
      scrollTop(endOfListRef.current?.scrollHeight)
    }, 10)
  })
  return <div className="profile flex-c-c">
    <div className="flex-r-c profile-header">
      <img src={arrowLeft} alt="" className="mr18" onClick={() => {
        navigate(-1);
      }} />
      <img src={visitorInfo?.avatar_url} alt="" className="profile-avatar mr18" />
      <span className="profile-name mr18" >{visitorInfo?.name}</span>
      <span className="profile-staue">Online</span>
    </div>
    <div style={{ flex: 1 }} className="profile-content" ref={endOfListRef}>
      {list.map((item, index) => {
        let type = item.type
        return type === 'wen' ? <Wen text={item.text} key={index} /> : <Da text={item.text} avatar={visitorInfo?.avatar_url} key={index} />
      })}</div>
    <div className="profile-footer">
      <input placeholder="Write your message" className="input" onChange={(e) => {
        setInputVal(e.target.value)
      }} />
      <img src={send} alt="" className="profile-footer-send" onClick={() => {
        postChatData({
          ...urlState,
          question: inputVal
        }).then(res => {
          if (res.code == 1000) {
            getDataListFn()
            scrollToBottom()
          }
        })
      }} />
    </div>
  </div>
}

export default Profile;
