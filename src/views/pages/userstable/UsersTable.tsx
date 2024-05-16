import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../../../components/index';
import Table from '@/components/UsersTable/Table';
import DeleteTable from '@/components/UsersTable/DeleteTable';

interface UsersTableProps {
  isDelete : boolean
}

const UsersTable = ({isDelete} : UsersTableProps) => {
  return (
    <div>
      <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
            <div className="body flex-grow-1 px-3">
              {isDelete ? <DeleteTable isDelete={isDelete}/> : <Table isDelete={isDelete}/> }
            </div>
          <AppFooter />
        </div>
    </div>
  )
}

export default UsersTable