import { useState, useEffect } from "react";
function Page() {
  const [count, setCount] = useState(0);
  console.log(`${count} 랜더링`);
  
  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    console.log("effect 시작", count);
    return () => console.log("effect 클린업", count);
  }, [count]);

  return (
    <>
      <p>안녕하세요</p>
      <p>이 페이지에 들어오신지</p>
      <p>
        <strong>{count}</strong>초 되었습니다.
      </p>
    </>
  );
}

export default Page;
