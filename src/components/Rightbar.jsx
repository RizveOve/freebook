import { Avatar, AvatarGroup, Box, Divider, IconButton, ImageList, ImageListItem, ImageListItemBar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import {Info} from '@mui/icons-material';
import React from 'react'

export const Rightbar = () => {


  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
      cols: 2,
    },
  ];

  return (
    <Box flex={2} p={2} sx={{display: {xs: "none", sm: "block"}}}>
      <Box position= 'fixed' width={400}>

        <Box marginBottom={4}>
          <Typography variant='h6' fontWeight={100} marginBottom={2}>Online Friends</Typography>
          <AvatarGroup max={8}>
            <Avatar alt="Remy Sharp" src="https://scontent.fbgo1-1.fna.fbcdn.net/v/t39.30808-6/298765649_5359054687547675_2861659793674159272_n.jpg?stp=cp1_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OJlYPVwvZ-kAX-KY0BE&_nc_ht=scontent.fbgo1-1.fna&oh=00_AT_JGXQ_wI-bmJOsLnkE-BVSEE51RzwLD-7UYhsP2Fc2_w&oe=63078C21" />
            <Avatar alt="Travis Howard" src="https://scontent.fosl4-1.fna.fbcdn.net/v/t1.6435-9/193306933_2459369324208729_8222541910220198235_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=WrunIAHz2J8AX-vYLFu&_nc_ht=scontent.fosl4-1.fna&oh=00_AT9EQvkz0_UsLPXkGQKwePASjozqFYeRl8dwJ7ckSZg4ww&oe=632709CC" />
            <Avatar alt="Cindy Baker" src="https://scontent.fbgo1-1.fna.fbcdn.net/v/t39.30808-6/280875445_4994930467288458_6632553815752180753_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mYkGLS8AJ1QAX9sNYe2&tn=ayWKXwUcGBeqAXiK&_nc_ht=scontent.fbgo1-1.fna&oh=00_AT_x1W8j4uBgWZWEqcDFaUwdAnRjWG_zL0G7LnugFWTMjg&oe=63077953" />
            <Avatar alt="Agnes Walker" src="https://scontent.fbgo1-1.fna.fbcdn.net/v/t39.30808-6/275850787_3193894414163861_7367087386921842192_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JL59XCYNqBgAX_RakCX&_nc_ht=scontent.fbgo1-1.fna&oh=00_AT_SIafMyigQFbJzuGz-w9tHZN1enLiaUWkHT6ipIOFr-w&oe=63066FFC" />
            <Avatar alt="Trevor Henderson" src="https://scontent.fbgo1-1.fna.fbcdn.net/v/t39.30808-6/286674470_791709161792093_3440679459997455926_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=E9Xjr6DGuCEAX_GhBbi&_nc_ht=scontent.fbgo1-1.fna&oh=00_AT-l4mAyAJn43qtF0w06OZfebHVSI7Ue4240hhfHAPD-tg&oe=630641BE" />
            <Avatar alt="Agnes Walker" src="https://scontent.fbgo1-1.fna.fbcdn.net/v/t1.6435-9/36546389_1245625958906636_5386436322636333056_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=U9hdz_25AO0AX95OqFD&_nc_ht=scontent.fbgo1-1.fna&oh=00_AT_LJDnbCi7x0sBQK8kOJyuSyt5jrWkNThOZTNxQNflRbA&oe=63286F89" />
            <Avatar alt="Trevor Henderson" src="https://scontent.fbgo1-1.fna.fbcdn.net/v/t1.6435-9/80818311_2421101378141758_8773171795361529856_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8rnSo0u2nr0AX8TF9JJ&_nc_ht=scontent.fbgo1-1.fna&oh=00_AT837OPp-CJXjc1fYKpfwh6VIZ-HE-wX6BWFlqGq8b3fKw&oe=6326E491" />
            <Avatar alt="Trevor Henderson" src="https://scontent.fbgo1-1.fna.fbcdn.net/v/t39.30808-6/286674470_791709161792093_3440679459997455926_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=E9Xjr6DGuCEAX_GhBbi&_nc_ht=scontent.fbgo1-1.fna&oh=00_AT-l4mAyAJn43qtF0w06OZfebHVSI7Ue4240hhfHAPD-tg&oe=630641BE" />
            <Avatar alt="Trevor Henderson" src="https://scontent.fbgo1-1.fna.fbcdn.net/v/t39.30808-6/286674470_791709161792093_3440679459997455926_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=E9Xjr6DGuCEAX_GhBbi&_nc_ht=scontent.fbgo1-1.fna&oh=00_AT-l4mAyAJn43qtF0w06OZfebHVSI7Ue4240hhfHAPD-tg&oe=630641BE" />
          </AvatarGroup>
        </Box>
        <Typography variant='h6' fontWeight={100}>Recent Chats</Typography>
        <List>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://scontent.fbgo1-1.fna.fbcdn.net/v/t39.30808-6/298765649_5359054687547675_2861659793674159272_n.jpg?stp=cp1_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OJlYPVwvZ-kAX-KY0BE&_nc_ht=scontent.fbgo1-1.fna&oh=00_AT_JGXQ_wI-bmJOsLnkE-BVSEE51RzwLD-7UYhsP2Fc2_w&oe=63078C21" />
        </ListItemAvatar>
        <ListItemText
          primary="Ohidul Islam"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"Are you free in this saturday night?"}
            </React.Fragment>
          }
        />
      </ListItem>
      
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://scontent.fbgo1-1.fna.fbcdn.net/v/t39.30808-6/280875445_4994930467288458_6632553815752180753_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mYkGLS8AJ1QAX9sNYe2&tn=ayWKXwUcGBeqAXiK&_nc_ht=scontent.fbgo1-1.fna&oh=00_AT_x1W8j4uBgWZWEqcDFaUwdAnRjWG_zL0G7LnugFWTMjg&oe=63077953" />
        </ListItemAvatar>
        <ListItemText
          primary="Tanvir Hossain"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {'The turnover of my company reached 100M this year. Im throghing a party tonight.'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://scontent.fbgo1-1.fna.fbcdn.net/v/t39.30808-6/275850787_3193894414163861_7367087386921842192_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JL59XCYNqBgAX_RakCX&_nc_ht=scontent.fbgo1-1.fna&oh=00_AT_SIafMyigQFbJzuGz-w9tHZN1enLiaUWkHT6ipIOFr-w&oe=63066FFC" />
        </ListItemAvatar>
        <ListItemText
          primary="Raiikibul Hasan"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {'I have inveted a new algorithm to impress girl more effeciantly. Im sending you the algorithm shortly.'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

    <ImageList>
      <ImageListItem key="Subheader" cols={2}>
      <Typography variant='h6' fontWeight={100} marginBottom={2}>Sponsored</Typography>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <Info />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  



      </Box>
    </Box>
  )
}
