import { useRef, useEffect } from 'react';

export default function Focus () {

  const textInput = useRef<HTMLInputElement>(null)
    
  const handleFocus = () => {
    textInput.current?.focus();
  }

  useEffect(() => {
    handleFocus()
  }, [])
  

  return (
    <>
      <section className="focusSection">
        <div className='focusInput'>
          <label>
            test1 : 
            <input 
              type="text"
            />
          </label>
        </div>
        <div className='focusInput'>
          <label>
            test2 : 
            <input 
              type="text"
            />
          </label>
        </div>
        <div className='focusInput'>
          <label>
            test3 : 
            <input 
              type="text"
              ref={textInput}
            />
          </label>
        </div>
      </section>
    </>
  )
}