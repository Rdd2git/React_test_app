import React, { useEffect, useState } from 'react';
import axios from 'axios';

const INITIAL_MESSAGE = [];

const GetList = () => {
  const [message, setMessage] = useState(INITIAL_MESSAGE);

  useEffect(() => {
    loadMessage();
  }, []);

  const loadMessage = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
      setMessage(response.data);
    } catch (e) {
      setMessage(e.message);
    }
  };
   const avatarList = message.map( el => <p key={el.id}>{el.id}.{el.title}</p>);
  return <div>{avatarList}</div>;
};

export default GetList;