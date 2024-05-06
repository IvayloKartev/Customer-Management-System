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

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [names, setNames] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    async function sendToDB() {
      console.log('here')
      await axios.post("../api/adduser", {
        name : name,
        email : email,
        password : password,
        names : names,
        phone : phone,
        address : address
      });  
    }

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
                      <CFormInput placeholder="Username" autoComplete="username" onChange={e => {setName(e.target.value)}}/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput placeholder="Email" autoComplete="email" onChange={e => {setEmail(e.target.value)}}/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        onChange={e => {setPassword(e.target.value)}}
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
                      <CFormInput placeholder="Name and Surname" autoComplete="name" onChange={e => {setNames(e.target.value)}}/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                      <CIcon icon={cilPhone} />
                      </CInputGroupText>
                      <CFormInput placeholder="Phone number" autoComplete="phone" onChange={e => {setPhone(e.target.value)}}/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilAddressBook}/>
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Address"
                        autoComplete="address"
                        onChange={e => {setAddress(e.target.value)}}
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" onClick={sendToDB}>Create Account</CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
    )
}