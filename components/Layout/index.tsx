import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import SideBar from '@components/SideBar'
import style from './Layout.module.scss'

const Layout = ({ children }: any) => {
  return (
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
