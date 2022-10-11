import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import SignIn from '@pages/signin'
import SideBar from '@components/SideBar'
import style from './Layout.module.scss'

type ALLOWED_PATH = '/signin' | '/signup'
const pageWithoutSidebar: ALLOWED_PATH[] = ['/signin', '/signup']

const Layout = ({ children }: any) => {
  const { asPath } = useRouter()
  const [currentPath, setCurrentPath] = useState<ALLOWED_PATH | null>(null)

  useEffect(() => {
    if (asPath !== currentPath) setCurrentPath(asPath as ALLOWED_PATH)
  }, [asPath, currentPath])

  return currentPath && pageWithoutSidebar.includes(currentPath) ? (
    <SignIn />
  ) : (
    <Grid
      container
      sx={{ display: 'flex', minHeight: '100vh' }}>
      <Grid
        item
        xl={2}
        lg={3}
        md={4}
        sm={5}
        xs={6}>
        <SideBar />
      </Grid>
      <Grid
        item
        xl={10}
        lg={9}
        md={8}
        sm={7}
        xs={6}>
        <Box>{children}</Box>
      </Grid>
    </Grid>
  )
}

export default Layout
