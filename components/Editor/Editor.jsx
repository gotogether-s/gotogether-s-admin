import { useCallback, useMemo, useState } from 'react'
import { createEditor } from 'slate'
import { withHistory } from 'slate-history'
import { Editable, Slate, withReact } from 'slate-react'
import withEmbeds from './plugins/withEmbeds.js'
import withLinks from './plugins/withLinks.js'
import withTables from './plugins/withTable.js'
import Toolbar from './Toolbar/Toolbar'
import { fontFamilyMap, sizeMap } from './utils/SlateUtilityFunctions.js'
// import '@styles/Editor.css'
import en from '@public/locales/en/addProduct.json'
import ko from '@public/locales/ko/addProduct.json'
import { update } from '@store/addProductSlice'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import Image from './Elements/Image/Image'
import Link from './Elements/Link/Link'
import Video from './Elements/Video/Video'

const Element = props => {
  const { attributes, children, element } = props

  switch (element.type) {
    case 'headingOne':
      return <h1 {...attributes}>{children}</h1>
    case 'headingTwo':
      return <h2 {...attributes}>{children}</h2>
    case 'headingThree':
      return <h3 {...attributes}>{children}</h3>
    case 'blockquote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'alignLeft':
      return (
        <div
          style={{ textAlign: 'left', listStylePosition: 'inside' }}
          {...attributes}>
          {children}
        </div>
      )
    case 'alignCenter':
      return (
        <div
          style={{ textAlign: 'center', listStylePosition: 'inside' }}
          {...attributes}>
          {children}
        </div>
      )
    case 'alignRight':
      return (
        <div
          style={{ textAlign: 'right', listStylePosition: 'inside' }}
          {...attributes}>
          {children}
        </div>
      )
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'orderedList':
      return (
        <ol
          type='1'
          {...attributes}>
          {children}
        </ol>
      )
    case 'unorderedList':
      return <ul {...attributes}>{children}</ul>
    case 'link':
      return <Link {...props} />

    case 'table':
      return (
        <table>
          <tbody {...attributes}>{children}</tbody>
        </table>
      )
    case 'table-row':
      return <tr {...attributes}>{children}</tr>
    case 'table-cell':
      return <td {...attributes}>{children}</td>
    case 'image':
      return <Image {...props} />
    case 'video':
      return <Video {...props} />
    default:
      return <p {...attributes}>{children}</p>
  }
}
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }
  if (leaf.strikethrough) {
    children = (
      <span style={{ textDecoration: 'line-through' }}>{children}</span>
    )
  }
  if (leaf.underline) {
    children = <u>{children}</u>
  }
  if (leaf.superscript) {
    children = <sup>{children}</sup>
  }
  if (leaf.subscript) {
    children = <sub>{children}</sub>
  }
  if (leaf.color) {
    children = <span style={{ color: leaf.color }}>{children}</span>
  }
  if (leaf.bgColor) {
    children = <span style={{ backgroundColor: leaf.bgColor }}>{children}</span>
  }
  if (leaf.fontSize) {
    const size = sizeMap[leaf.fontSize]
    children = <span style={{ fontSize: size }}>{children}</span>
  }
  if (leaf.fontFamily) {
    const family = fontFamilyMap[leaf.fontFamily]
    children = <span style={{ fontFamily: family }}>{children}</span>
  }
  return <span {...attributes}>{children}</span>
}

const Editor = () => {
  const router = useRouter()
  const { locale } = router
  const translate = locale === 'en' ? en : ko

  const editor = useMemo(
    () =>
      withHistory(withEmbeds(withTables(withLinks(withReact(createEditor()))))),
    []
  )

  const [value, setValue] = useState([
    {
      type: 'paragaph',
      children: [{ text: '' }],
    },
  ])

  const renderElement = useCallback(props => <Element {...props} />, [])

  const renderLeaf = useCallback(props => {
    return <Leaf {...props} />
  }, [])

  const dispatch = useDispatch()

  const updateAddProductStateFromEditor = newValue => {
    setValue(newValue)
    dispatch(update({ name: 'info', value: JSON.stringify(newValue) }))
  }

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={newValue => updateAddProductStateFromEditor(newValue)}>
      <Toolbar />
      <div
        className='editor-wrapper'
        style={{ border: '1px solid #f3f3f3', padding: '1.6rem' }}>
        <Editable
          placeholder={translate['여행 상세정보를 입력해주세요']}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
        />
      </div>
    </Slate>
  )
}

export default Editor
