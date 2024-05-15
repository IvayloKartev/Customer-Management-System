import React, { useState } from 'react'
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
import axios from 'axios'

interface Account {
    id : number
    name? : string,
    email? : string, 
    password? : string,
    names? : string,
    phone? : string,
    address? : string
    companies : any
}

export default function Sheet({id, name, email, password, names, phone, address, companies} : Account) {

    return (
       
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-auto">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Login info</h1>
                    <p className="text-medium-emphasis">Create the user account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                        <p>{name}</p>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <p>{email}</p>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <p>{password}</p>
                    </CInputGroup>
                    <div className="d-grid">
                    </div>
                  </CForm>

                    <br/>
                    <br/>

                  <CForm>
                    <h1>Personal info</h1>
                    <p className="text-medium-emphasis">Add personal information for the account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <p>{names}</p>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                      <CIcon icon={cilPhone} />
                      </CInputGroupText>
                      <p>{names}</p>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilAddressBook}/>
                      </CInputGroupText>
                      <p>{address}</p>
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success">OK</CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
    )
}