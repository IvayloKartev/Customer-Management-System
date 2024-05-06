import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">🄯 2024 Ivaylo Kartev GNU GPLv3</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
