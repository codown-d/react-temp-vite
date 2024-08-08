import { Container, Input, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Home = () => (
  <div className="cont-bg flex-c-c" style={{ justifyContent: 'space-between' }}>
    <div className="flex-c-c" style={{ paddingTop: '20%' }}>
      <div className="title ">您好!</div>
      <div className="desc ">感谢您选择深圳市齐光同辰科技有限公司。为了给您提供更好的服务，请您留下您的联系电话，方便我们遇到问题时及时回访。</div>

    </div>
    <div className="number">
      请输入完整的电话号码!
    </div>
    <div className="input-wrapper">
      <input placeholder="请输入电话号码" className="input" />
      <Link to='/profile'>
        <img src="/public/vite.svg" alt="" className="goto" />
      </Link>

    </div>
  </div>
);
export default Home;
