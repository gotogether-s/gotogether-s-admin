import ReactQuill from 'react-quill'
import { useState } from 'react'
import 'react-quill/dist/quill.snow.css'

function Editor() {
  const ReactQuill =
    typeof window === 'object' ? require('react-quill') : () => false

  const [value, setValue] = useState('')

  return (
    <ReactQuill
      theme='snow'
      value={value}
      onChange={setValue}
    />
  )
}

export default Editor
