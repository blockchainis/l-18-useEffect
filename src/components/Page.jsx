import { useState } from "react";
function Page() {
  const [count, setCount] = useState(0);
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
