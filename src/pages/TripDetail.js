import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const tripDetails = {
  1: {
    title: '泰便宜5天',
    description: '丹能沙朵水上市場.安帕瓦爆笑鐵路市場. J Park日本村.All Star全明星號遊輪.爽泰莊園.格蘭島出海【無購物】',
    itinerary: [
      {
        day: '第一天',
        description: '桃園/曼谷。今天集合於桃園國際機場搭機飛往泰國首都~曼谷，抵達後送往飯店休息。',
        meals: { breakfast: 'XXX', lunch: 'XXX', dinner: '傳統泰國東北餐+泰式奶茶350B' },
        hotel: '曼谷 Sriwaree Airport / IBIS Style 50/ Jazzotel /New Town In Town/ Medison/Iconic Ari或同等'
      },
      {
        day: '第二天',
        description: '曼谷~丹能沙朵歐式水上市場~安帕瓦爆笑鐵路市場~愛侶灣四面佛~中央百貨~BIG C。',
        meals: { breakfast: '飯店內', lunch: '湄公河花園泰式餐350B', dinner: '方便逛街 敬請自理' },
        hotel: '曼谷 Sriwaree Airport / IBIS Style 50/ Jazzotel /New Town In Town/ Medison/Iconic Ari或同等'
      },
      // 添加更多天數的詳細信息...
    ]
  },
  // 添加更多行程...
};

const TripDetail = () => {
  const { id } = useParams();
  const trip = tripDetails[id];

  if (!trip) {
    return <Typography variant="h5" align="center">行程不存在</Typography>;
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>{trip.title}</Typography>
      <Typography variant="body1" gutterBottom>{trip.description}</Typography>
      {trip.itinerary.map((day, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          <Typography variant="h6">{day.day}</Typography>
          <Typography variant="body1">{day.description}</Typography>
          <Typography variant="body2">早餐：{day.meals.breakfast}</Typography>
          <Typography variant="body2">午餐：{day.meals.lunch}</Typography>
          <Typography variant="body2">晚餐：{day.meals.dinner}</Typography>
          <Typography variant="body2">酒店：{day.hotel}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default TripDetail;