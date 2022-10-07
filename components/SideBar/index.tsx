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
    <Drawer
      variant='permanent'
      sx={{ height: '100%' }}
      PaperProps={{
        sx: {
          position: 'unset',
          backgroundColor: '#F4F5F5',
          padding: '2rem',
        },
      }}>
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
  )
}

export default SideBar
