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
  import axios from 'axios'

export default function Form() {
    return (
       
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={19} lg={17} xl={6}>
              <CCard className="mx-auto">
                <CCardBody className="p-4">
                  <CForm>
                    <h1>Login info</h1>
                    <p className="text-medium-emphasis">Create the user account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username"/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput placeholder="Email" autoComplete="email"/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                      />
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
                      <CFormInput placeholder="Name and Surname" autoComplete="name"/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                      <CIcon icon={cilPhone} />
                      </CInputGroupText>
                      <CFormInput placeholder="Phone number" autoComplete="phone"/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilAddressBook}/>
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Address"
                        autoComplete="address"
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success">Create Account</CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
    )
}