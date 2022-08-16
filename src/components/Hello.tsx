/** クリックするとアラートを返すテキストdiv */
const Hello = () => {
  const onClick = () => {
    alert('Hello!')
  }
  const text = 'Hello, React'

  return (
    <div onClick={onClick}>
      {text}
    </div>
  )
}

//外部から読み込めるようにexportする
export default Hello