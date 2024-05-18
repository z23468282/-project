import useFetch from '../../Hooks/useFetch';

export default function useFetchHookTest() {
  const { data, error, pending } = useFetch('https://dummyjson.com/products');

  return (
    <div>
      <h1>使用請求HOOK</h1>
      {pending && <h3>處理中請稍後...</h3>}
      {error && <h3>{error}</h3>}
      {data && data.products.map((item) => <p key={item.id}>{item.title}</p>)}
    </div>
  );
}
