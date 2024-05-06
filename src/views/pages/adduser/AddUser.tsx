import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../../../components/index';
import Form from '@/components/AddUserForm';

const AddUser = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
            <Form/>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default AddUser