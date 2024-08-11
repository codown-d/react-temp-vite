import error from '../../assets/images/error.svg';
import './index.less'

const Permission = () => {
  return <div className='permission flex-c-c' style={{ justifyContent: 'flex-start' }}>
    <div className='error-txt' style={{ marginTop: '30%' }}>发生异常</div>
    <div className='error-desc mt60 mb20'>
      请从正确的分享链接进入
    </div>
    <img src={error} alt="" />
  </div>
}

export default Permission;
