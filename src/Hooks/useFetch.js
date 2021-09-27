import { useState , useEffect } from 'react'

// useFetch에url받아와서 모든 에러와 데이터를 처리후
// 결과를 return해줌

const useFetch = (url) => {
 const [isLoading, setIsLoading] = useState(true);
 // 로딩의 초기값을 트루로 줌
 const [data, setData] = useState();
 const [err, serErr] = useState();

 useEffect(() => {
   //모든 렌더(데이터에 변화가 있을 떄) 실행됨
   fetch(url)
     .then((res) => {
      //  console.log(res);
       // 만약 응답이 에러라면 여기서 에러를 던져주고 아래에서 catch에서 잡는다
       if (!res.ok) {
         throw Error("에러입니다.");
       }
       return res.json();
     })
     .then((data) => {
      //  console.log(data);
       setData(data);

       // 데이터가 있을 때만 로딩 메세지가 있어야하니까 여기서 로딩은 false로 해줌
       // 그럼 데이터가 없을 떄만 로딩이 화면에 나옴
       setIsLoading(false);
       serErr(null);
     })
     .catch((err) => {
       // catch로 에러 표시하기
       // console.log(err.mes sage);
       serErr(err.message);
       setIsLoading(false);
       // 에러메세지를 창에 띄우기 위해 에러 상태를 setErr에 전달해즘
     });
 }, [url]);

 return {data, isLoading, err}
}

export default useFetch
