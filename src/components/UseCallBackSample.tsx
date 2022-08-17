import React, { useCallback, useState } from "react"

type ButtonProps = {
  onClick: () => void
}

//通常の関数コンポーネントボタン
const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props

  console.log('DecrementButtonが再描画されました')
  return <button onClick={onClick}>Decrement</button>
}


//メモ化した関数コンポーネントボタン
const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('IncrementButtonが再描画されました')
  return <button onClick={onClick}>Increment</button>
})

//メモ化した関数コンポーネントボタン
const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('DoubleButtonが再描画されました')
  return <button onClick={onClick}>Double</button>
})

export const Parent2 = () => {
  const[count, setCount] = useState(0)


  const decrement = () => {
    setCount( (c) => c - 1)
  }
  const increment = () => {
    setCount( (c) => c + 1)
  }
  const double = useCallback(() => {
    setCount( (c) => c * 2)
  },[])


  return (
    <div>
      <p>カウント：{count}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  )
}