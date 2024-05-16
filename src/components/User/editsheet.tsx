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
    idA : number
    nameA? : string,
    emailA? : string, 
    passwordA? : string,
    namesA? : string,
    phoneA? : string,
    addressA? : string
    companiesA : any
}

export default function EditSheet({idA, nameA, emailA, passwordA, namesA, phoneA, addressA, companiesA} : Account) {

    const [name, setName] = useState(nameA);
    const [email, setEmail] = useState(emailA);
    const [password, setPassword] = useState(passwordA);
    const [names, setNames] = useState(namesA);
    const [phone, setPhone] = useState(phoneA);
    const [address, setAddress] = useState(addressA);

    async function sendToDB() {
      console.log('here')
      await axios.delete("../api/deleteuser", {
        data : {
          id : idA
        }
      }).then(
      await axios.post("../api/adduser", {
        name : name,
        email : email,
        password : password,
        names : names,
        phone : phone,
        address : address
      }));  
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
                      <CFormInput value={name} placeholder="Username" autoComplete="username" onChange={e => {setName(e.target.value)}}/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput value={email} placeholder="Email" autoComplete="email" onChange={e => {setEmail(e.target.value)}}/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        value={password}
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
                      <CFormInput value={names} placeholder="Name and Surname" autoComplete="name" onChange={e => {setNames(e.target.value)}}/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                      <CIcon icon={cilPhone} />
                      </CInputGroupText>
                      <CFormInput value={phone} placeholder="Phone number" autoComplete="phone" onChange={e => {setPhone(e.target.value)}}/>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilAddressBook}/>
                      </CInputGroupText>
                      <CFormInput
                      value={address}
                        placeholder="Address"
                        autoComplete="address"
                        onChange={e => {setAddress(e.target.value)}}
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" onClick={sendToDB}>Save Changes</CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
    )
}