import { useState, useRef } from "react";

import './MousePointerEvent.scss'

export default function MousePointerEvent () {

  const [isOpen, setIsOpen] = useState(false);
  const toggleContainer = useRef<HTMLElement>(null);

  const openHandler = (e:any) => {
    setIsOpen(!isOpen)
  }

  const handleClickOutside = (e:any) => {
    if(isOpen && toggleContainer.current?.contains(e.target)) {
      setIsOpen(!isOpen)
    }
  }

  return (
    <>
      <div className="mousePointer">
        <button onClick={openHandler} className="modal-button">옵션을 선택해주세요</button>
        {isOpen && (
          <div className="modal">
            <ul className="modal-content">
              <span className="close" onClick={openHandler}>&times;</span>
              <li>선택1</li>
              <li>선택2</li>
              <li>선택3</li>
            </ul>
          </div>)
        }
      </div>

      <div className="mousePointer">
        <button>전송하기</button>
      </div>

      <div className="mousePointer">
        <button>삭제하기</button>
      </div>
    </>
  )
}
