import useWindowResize from '../../Hooks/useWindowResize';

export default function useWindowResizeTest() {
  const { width, height } = useWindowResize();

  return (
    <div>
      <h1>使用視窗調整大小Hook</h1>
      <p>寬度是 {width} px</p>
      <p>高度是 {height} px</p>
    </div>
  );
}
