import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav" id='nav'>
        <img src={require('./img/nav-logo.png')} alt="" />
        <div class="nav-links">
          <a href='#nav'>首页</a>
          <a href='#news'>新闻</a>
          <a href='#about'>关于新翼</a>
          <a href='#vp'>新翼观点</a>
          <a href='#adv'>新翼优势</a>
          <a href='#cases'>新翼案例</a>
          <a href='#more'>了解更多</a>
        </div>
      </div>
      <div className="mm">
        <h1 className='mm-mainTitle'>品牌增长新势力</h1>
        <h1 className='mm-subtitle'>新翼品牌传播</h1>
        <img src={require('./img/mm.png')} alt="" />
      </div>
      <div className="news" id='news'>
        <div className='title2'>
          <div className='title2-point'></div>
          <h1 className='title2-text'>新翼新闻</h1>
        </div>
        <div className='mainSpace-news'>
          <div className='subSpace-news'>
            <img src={require('./img/news1.png')} alt="" />
            <h1 className='subNews-title'>新翼集团携手WUCG 用电竞打开中国校园市场</h1>
            <h1 className='subNews-time'>2022-3-30</h1>
            <div className='subNews-text'></div>
          </div>
          <div className='subSpace-news'></div>
          <div className='subSpace-news'></div>
        </div>
      </div>
      <div className="about" id='about'>
        <div className='title2'>
          <div className='title2-point'></div>
          <h1 className='title2-text'>关于新翼</h1>
        </div>
      </div>
      <div className="vp" id='vp'>
        <div className='title2'>
          <div className='title2-point'></div>
          <h1 className='title2-text'>新翼优势</h1>
        </div>
      </div>
      <div className="adv" id='adv'>
        <div className='title2'>
          <div className='title2-point'></div>
          <h1 className='title2-text'>新翼新闻</h1>
        </div>
      </div>
      <div className="cases" id='cases'>
        <div className='title2'>
          <div className='title2-point'></div>
          <h1 className='title2-text'>新翼案例</h1>
        </div>
      </div>
      <div className="more" id='more'>
        <div className='title2'>
          <div className='title2-point'></div>
          <h1 className='title2-text'>了解更多</h1>
        </div>
      </div>
      <div className="ifo"></div>
    </div>
  );
}

export default App;
