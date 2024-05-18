import './App.css';
import Accordion from './components/Accordion/Accordion';
import RandomColor from './components/RandomColor/RandomColor';
import StarRating from './components/StarRating/StarRating';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import ScrollIndicator from './components/scroll-indicator';
import TreeView from './components/tree-view';
import Tabs from './components/tabs';
import ModalTest from './components/modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutoComplete from './components/SearchAutoComplete';
import TicTacToe from './components/tic-tac-toe';
import UseFetchHookTest from './components/test-fetch/text';
import UseOnclickOutsideTest from './components/test-outside-click/test';
import UseWindowResizeTest from './components/test-window-resize/test';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';
import ScrollToSection from './components/scroll-to-top-and-bottom/scroll.to-section';

function App() {
  return (
    <div className="App">
      {/* 滾動到指定區域 */}
      <ScrollToSection />
      {/* 手風琴元件*/}
      <Accordion />
      {/* 隨機顏色元件 */}
      <RandomColor />
      {/* 星級元件 */}
      <StarRating />
      {/* 圖像滑塊元件 */}
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} />
      {/* 加載產品元件 */}
      <LoadMoreData />
      {/* 樹視圖元件 */}
      <TreeView />
      {/* QR Code產生器 */}
      <QRCodeGenerator />
      {/* 切換深色模式 */}
      <LightDarkMode />
      {/* 滾動指示器元件 */}
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
      {/* 選項卡元件 */}
      <Tabs />
      {/* 自訂義模型元件 */}
      <ModalTest />
      {/* Github 個人資料查找元件 */}
      <GithubProfileFinder />
      {/* 搜尋元件 */}
      <SearchAutoComplete />
      {/* 井字遊戲 */}
      <TicTacToe />
      {/* 自訂義請求Hook 測試*/}
      <UseFetchHookTest />
      {/* 外部點擊Hook 測試 */}
      <UseOnclickOutsideTest />
      {/* 視窗調整大小Hook 測試 */}
      <UseWindowResizeTest />
      {/* 滾動到頂部和底部 */}
      <ScrollToTopAndBottom />
    </div>
  );
}

export default App;
