import React, { useMemo, useState } from "react"


export const UseMemoSample = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState<string[]>([])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  //ボタンクリック時の関数
  const onClickButton = () => {
    setItems((prevItems) => {
      //現在の入力値をItemsに追加する、この時新しい配列を作成して保存する
      return [...prevItems, text]
    })
    setText('')
  }

  //再描画の度にitems.reduceを実行して結果を得る
  const numberOfCharacters1 = items.reduce((sub, item) => sub + item.length, 0)

  //useMemoを使い、itemsが更新されるタイミングでitems.reduceを実行する
  const numberOfCharacters2 = useMemo(() => {
    return items.reduce((sub, item) => sub + item.length, 0)
  }, [items])

  return (
    <div>
      <p>UseMemoSample:</p>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <div>
        <p>Characters1の文字数は：{numberOfCharacters1}</p>
        <p>Characters2の文字数は：{numberOfCharacters2}</p>
      </div>
    </div>
  )
}