import React, { useRef, useState } from "react"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const UPLOAD_DELAY = 5000


export const ImageUploader = () => {

  //隠されたinput要素にアクセスするためのref
  const inputImageRef = useRef< HTMLInputElement | null >(null)

  //選択されたファイルデータを保持するref
  const fileRef = useRef< File | null>(null)

  const [message, setMessage] = useState< string | null >('')

  //[画像をアップロード]というテキストがクリックされた時のコールバック
  const onClickText = () => {
    if (inputImageRef.current !== null){
      //隠されたinput要素にclickイベント発火
      inputImageRef.current.click()
    }
  }

  //ファイルが選択された後に呼ばれるコールバック
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if ( files !== null && files.length > 0 ){
      //fileRefに値を保存する（再描画されない）
      fileRef.current = files[0]
    }
  }

  //アップロードボタンがクリックされた時に呼ばれるコールバック
  const onClickUpLoadButton = async () => {
    if (fileRef.current !== null) {
      //通常はAPIを読んでファイルサーバーにファイルをアップするが、
      //今回は擬似的に待つ
      await sleep(UPLOAD_DELAY)

      //アップロード成功時のメッセージ
      setMessage(`${fileRef.current.name}はアップロードに成功しました。`)
    }
  }

  return (
    <div>
      <p onClick={onClickText}>
        画像をアップロード
      </p>
      <input
        style={{visibility: 'hidden'}}
        ref={inputImageRef}
        type="file"
        accept="image/*"
        onChange={onChangeImage}
      />
      <br />
      <button onClick={onClickUpLoadButton}>アップロードする</button>
      <p>{message !== null && message}</p>
    </div>
  )
}