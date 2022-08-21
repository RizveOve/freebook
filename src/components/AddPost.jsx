import {Add, LocationOn, Image, VideoCameraBack, EmojiEmotions} from '@mui/icons-material';
import { Avatar, Box, Button, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react'

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     width: 400,
    
//     bgcolor: 'background.paper',
//     boxShadow: 24,
//     p: 4,
//     borderRadius: '10px'
//   };

export default function AddPost() {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const MyModal= styled (Modal) ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    })

    const UserBox= styled(Box) ({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '20px'
    })
  return (
    <>
        <Tooltip title="Add post"
            onClick={e=>setOpen(true)}
            sx={{position: 'fixed', 
            bottom: '20px',
            left:{xs: 'calc(50% - 25px)', sm: '30px'}
            }}
            >
            <Fab color="primary" aria-label="add">
                <Add />
            </Fab>
        </Tooltip>

      <MyModal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor= 'white' p={3} borderRadius= '10px'>
          <Typography variant='h5' textAlign='center' color= 'gray'>Create post</Typography>
          <UserBox>
            <Avatar></Avatar>
            <Typography>Mr. Nobody</Typography>
          </UserBox>

          <TextField 
          sx={{width:"100%"}}
          id="standard-textarea"
          placeholder="Whats on your mind?"
          multiline
          variant="standard"
        />

        <Stack direction= 'row' alignItems='flex-end' justifyContent='flex-end' gap={2} mt={2} mb={4}>
            <EmojiEmotions color= 'primary'/>
            <LocationOn color= 'secondary'/>
            <Image color= 'error'/>
            <VideoCameraBack color= 'success'/>

        </Stack>
        <Button fullWidth variant="contained">Post</Button>


        </Box>
      </MyModal>
    </>
  )
}
