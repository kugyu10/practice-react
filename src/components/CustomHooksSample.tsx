import React, { useState, useCallback, useDebugValue } from 'react'

//Input向けにコールバックと現在の入力内容をまとめたカスタムフック
const useInput = () => {
  const [state, setState] = useState('')
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }, [])

  //デバッグ用に値を出力する
  useDebugValue(`Input: ${state}`)

  //現在の入力内容とコールバック関数だけ返す
  return [state, onChange] as const
}

export const Input = () => {
  const [text, onChangeText] = useInput()
  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <p>Input: {text}</p>
    </div>
  )
}