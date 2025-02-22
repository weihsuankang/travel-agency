import React from 'react';
import TripCard from '../components/TripCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import backgroundPicture from '../images/backgroundPicture.jpg';
import homePagePicture from '../images/homepage.jpg';
import pattayaPicture from '../images/pattaya.jpg';
import shrimpPicture from '../images/shrimp.jpg';

const trips = [
  { id: 1, title: '泰便宜 5 天', description: '格蘭島｜班尼克藝術屋｜爽泰莊園｜芭達雅老虎園｜愛侶灣四面佛｜金東尼人妖秀', image: pattayaPicture },
  { id: 2, title: '泰大城 6 天', description: 'UNESCO世界醫材大城府｜古蹟樹中佛｜J Park日本村｜All Star 全明星號遊輪【無購物】', image: homePagePicture },
  { id: 3, title: '爆笑鐵支路 6 天', description: '丹能沙朵水上市場｜安帕瓦爆笑鐵路市場｜J Park日本村｜All Star 全明星號遊輪【無購物】', image: shrimpPicture },
  { id: 4, title: '泰大城 6 天', description: 'UNESCO世界醫材大城府｜古蹟樹中佛｜J Park日本村｜All Star 全明星號遊輪【無購物】', image: homePagePicture },
];

const Home = () => {
  return (
    <div>
      <Box sx={{ width: '100%', height: '400px', 
        backgroundImage: `url(${backgroundPicture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
      }}>
        <Typography
          variant="h1"
          color="white"
          align="center"
          sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, fontWeight: 'bold'}}
        >
          To Travel is to Live.
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 5,
        width: '100%'
      }}>
        <Box sx={{ width: { xs: '90%', md: '50%' }, mt: 3, textAlign: 'center' }}>
          <Typography variant="h4">
            熱門行程
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ width: { xs: '90%', md: '50%' } }}>
          {trips.map((trip) => (
            <Grid item key={trip.id} xs={12} sm={6} md={4}>
              <TripCard {...trip} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;