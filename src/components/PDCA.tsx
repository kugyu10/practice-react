import { useReducer } from "react"

//deducerが受け取るactionの型を定義
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

//現在状態とactionにもとづいて次の状態を返します
const reducer = (currentState: number, action: Action) => {

  switch (action) {
    case 'INCREMENT':
      return (currentState + 1) % 4 
    case 'DECREMENT':
      // 負の数 % 4 = 負の数になっちゃうので今回は+3で代用
      return (currentState + 3) % 4 
    case 'DOUBLE':
      return (currentState + 2) % 4
    case 'RESET':
      return 0
    default:
      return currentState
  }
}

type CounterProps = {
  initialState: number
}

//
const PDCA = (props: CounterProps) => {
  const { initialState } = props
  const [count, dispatch] = useReducer(reducer, initialState)

  enum PDCAState {
    PLAN,
    DO,
    CHECK,
    ACTION,
  }

  return (
    <div>
      <p>State: {PDCAState[count]} </p>
        <button onClick={ () => dispatch('DECREMENT') }>Decrement</button>
        <button onClick={ () => dispatch('INCREMENT') }>Increment</button>
        <button onClick={ () => dispatch('DOUBLE') }>Double</button>
        <button onClick={ () => dispatch('RESET') }>Reset</button>
    </div>
  )
}

export default PDCA

