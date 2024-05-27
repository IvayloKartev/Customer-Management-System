import React from "react";
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
  } from '@coreui/react'
  import { cilLockLocked, cilUser, cilPhone, cilAddressBook } from '@coreui/icons'
  import CIcon from '@coreui/icons-react'
  import axios from 'axios';
  import { useState } from "react";

export default function Form() {

    const [bulstat, setBulstat] = useState('');

    async function sendToDB() {
      axios.post('/api/addcompany', {
        bulstat : bulstat
      })
    }
    
    return (
       
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={19} lg={17} xl={6}>
              <CCard className="mx-auto">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Company Info</h1>
                    <p className="text-medium-emphasis">Create company</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Bulstat" autoComplete="bulstat" onChange={t => setBulstat(t.target.value)}/>
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" onClick={sendToDB}>Add Company</CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
    )
}