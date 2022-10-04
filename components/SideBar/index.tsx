import {
  Drawer,
  Box,
  ListItemAvatar,
  Avatar,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import style from './SideBar.module.scss'

const SideBar = () => {
  return (
    <>
      <Drawer
        variant='permanent'
        PaperProps={{
          sx: {
            width: { xl: '15%', lg: '20%', md: '25%', sm: '30%', xs: '35%' },
            height: '100%',
            backgroundColor: '#F4F5F5',
            padding: '2rem',
          },
        }}
        open>
        <div className={style['logo']}>로고</div>
        <Box>
          <List>
            <ListItem
              sx={{
                padding: '0',
              }}>
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText
                primary='이름'
                secondary='admin@gotogether-s.com'
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default SideBar
