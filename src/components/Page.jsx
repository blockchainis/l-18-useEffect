import { useState, useEffect } from "react";
function Page() {
  const [count, setCount] = useState(0);
  console.log("렌더링", count);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    console.log("effect 실행!", count);
    //count 0 => count 1
    return () => {
      console.log("effect clean up", count);
    };
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
