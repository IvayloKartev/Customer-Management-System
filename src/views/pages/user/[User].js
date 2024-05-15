import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../../../components/index';
import Sheet from '@/components/User';
import { Routes, Route, useParams } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { setRequestMeta } from 'next/dist/server/request-meta';

const User = () => {

  const {userId} = useParams();
  const [user, setUser] = useState(null);

  let need = "";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/getusers');
        const jsdata = response.data;
        //setItems(jsdata.data);
        console.log(jsdata.data);
        for(let i=0; i<jsdata.data.length; i++) {
            if(jsdata.data[i].id == userId){
               setUser(jsdata.data[i]);
               console.log(jsdata.data[i].names)
               need = jsdata.data[i].names;
            }
        }
        //console.log(user.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])

  if(user === null) return (<div>
    <p>Hi</p>
  </div>)
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <Sheet names={user.names} email={user.email} password={user.password} address={user.address}/>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}


export default User