import React from "react"


const TitleContext = React.createContext('')

const Title = () => {
  return (
    <TitleContext.Consumer>
      {/* Consumer直下に関数を置いて、Contextの値を参照している */}
      {(title) =>{
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

// HeaderからTitleへは何も（propsも）データを渡さない
const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}

//Pageコンポーネントの中でContextに値をセット
const Page = () => {
  const pageTitle = 'React Book'

  return (
    <TitleContext.Provider value={pageTitle}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page
