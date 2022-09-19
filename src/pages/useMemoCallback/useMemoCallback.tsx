import {useState, useMemo, useCallback} from 'react';

export default function UseMemoTest () {

  const [memo, setMemo] = useState(0)
  const [callback, setCallback] = useState(0)

  
  // memo가 바뀔 때만 useMemo 실행됨
  useMemo(
    () =>{
      console.log('useMemo', memo)
    }, [memo])

  // useCallback은 함수를 반환하기에, 함수를 실행시켜야 함()
  // memo가 변경되어야, callback 값이 반환됨
  useCallback(
    () => {
      console.log('callback', callback)
    },
    [memo]
  )()

  
  return (
  <>
    <button onClick={()=>setMemo(memo+1)}>memo +</button>
    <button onClick={()=>setCallback(callback+1)}>callback +</button>
  </>)
}