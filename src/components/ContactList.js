import { render } from '@testing-library/react';
import React from 'react';
import Contact from './Contact';


const userData = [
    {
        name: 'Robert Reyes',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        online: false
    },
    {
        name:'Nelie Caldwell',
        avatar:'https://randomuser.me/api/portraits/women/17.jpg',
        online: true
    },
    {
        name:'Vernon Mason',
        avatar:'https://randomuser.me/api/portraits/men/84.jpg',
        online: true
    },
    {
        name:'Erica Hunt',
        avatar:'https://randomuser.me/api/portraits/women/87.jpg',
        online: false
    },
    {
     name:'Juanita Phillips',
     avatar:'https://randomuser.me/api/portraits/women/55.jpg',
     online: true   
    }
];


const userList = () => (
    <div>
      {userData.map(item => (
    <Contact
    name={item.name}
    avatar={item.avatar}
    online={item.online}
    />
      ))}
    </div>
  );

export default userList;