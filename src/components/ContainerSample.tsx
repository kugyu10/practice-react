//propsの型を定義
type ContainerProps = {
  title: string
  children: React.ReactNode
}

const Container = ( props: ContainerProps ) :JSX.Element => {
  const {title, children} = props
  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

const Parent = () => {
  return (
    <Container title="ここはContainerSampleだよ">
      <p>ここの部分が背景色で囲まれます</p>
    </Container>

  )
}

export default Parent