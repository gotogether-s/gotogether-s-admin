import Head from 'next/head'

const HeadInfo = ({ title }: any) => {
  return (
    <Head>
      <title>고투게더 관리자 페이지: {title}</title>
    </Head>
  )
}

export default HeadInfo
