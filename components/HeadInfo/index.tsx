import en from '@public/locales/en/headInfo.json'
import ko from '@public/locales/ko/headInfo.json'
import Head from 'next/head'
import { useRouter } from 'next/router'

const HeadInfo = ({ title }: any) => {
  const router = useRouter()

  const { locale } = router
  const translate = locale === 'en' ? en : ko

  return (
    <Head>
      <title>
        {translate['고투게더 관리자']}: {title}
      </title>
    </Head>
  )
}

export default HeadInfo
