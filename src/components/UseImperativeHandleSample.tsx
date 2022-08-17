import React, { useRef, useState, useImperativeHandle } from "react"

const Child = React.forwardRef((props, ref) => {
  const [message, setMessage] = useState<String | null>(null)

  //親のrefから参照できる値を指定。
  useImperativeHandle(ref, () => ({
    showMessage: () => {
      const date = new Date()
      const message = `Hello, It's ${date.toLocaleDateString()} now`
      setMessage(message)
    },
  }))
return (
  <div>
    {message != null ? <p>{message}</p> : null}
  </div>
)
})

export const Parent4 = () => {
  const childRef = useRef<{ showMessage: () => void }>(null)
  const onClick = () => {
    if (childRef.current !== null){

      //子のuseImperativeHandleで指定した値を参照
      childRef.current.showMessage()
    }
  }

  return (
    <div>
      <button onClick={onClick}>メッセージを見る</button>
      <Child ref={childRef} />
    </div>
  )
}
