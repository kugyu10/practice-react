/** 無名関数でコンポーネントを定義し、Textという変数に代入する */
const Text = (Props: {content: string}) => {
  //propからcontentという値を取り出す
  const { content } = Props
  return (
    <p className="text">{content}</p>
  )
}

const Message = (Props: {}) => {
  const content1 = 'これは親コンポーネントです'
  const content2 = 'メッセージはTextコンポーネントを使います'

  return (
    <div>
      <Text content={content1} />
      <Text content={content2} />
    </div>
  )
}

export default Message