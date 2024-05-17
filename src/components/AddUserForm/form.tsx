import React, { useState } from 'react'
import {
  CBadge,
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
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from '@coreui/react'
import { useEffect } from 'react'

interface ResponseProps {
  status : string,
  data : Array<Account>
}

interface Account {
  name : string,
  email : string, 
  password : string,
  names? : string,
  phone? : string,
  address? : string
}

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [names, setNames] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [companies, setCompanies] = useState<Array<string>>([]);
    const [allCompanies, setAllCompanies] = useState<Array<Account>>([]);

    async function sendToDB() {
      await axios.post("../api/adduser", {
        name : name,
        email : email,
        password : password,
        names : names,
        phone : phone,
        address : address,
        companies : companies
      });  
    }

    function addCompany(company : string) {
      let oldArray = JSON.parse(JSON.stringify(companies));
      oldArray.push(company);
      setCompanies(JSON.parse(JSON.stringify(oldArray)));
      console.log(companies);
    }

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/api/getusers');
          const jsdata : ResponseProps = await response.data;
          setAllCompanies(jsdata.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);

    return (       
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={9}>
              <CCard className="mx-auto">
                <CCardBody className="p-4">
                  <div style={{display : 'flex', flexDirection : 'row', gap : 30}}>
                  <CForm style={{width : '22vw'}}>
                    <h1>Login info</h1>
                    <p className="text-medium-emphasis">Create the user account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText >
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

                  <CForm style={{width : '22vw'}}>
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

                  </CForm>

                  </div>
                  <br/>
                  <CForm style={{width : '50vw'}}>
                      <h1>Companies</h1>
                      <p className="text-medium-emphasis">Add any companies related to this user</p>
                      <CDropdown className='mb-3'>
                        <CDropdownToggle href="#" color="secondary">Select companies</CDropdownToggle>
                        <CDropdownMenu>
                          {allCompanies.map(company => {
                            return <CDropdownItem onClick={() => addCompany(company.name)}>{company.name}</CDropdownItem>
                          })}
                        </CDropdownMenu>
                      </CDropdown>
                      <div style={{display : 'inline', justifyContent : 'center', marginLeft : 100}}>
                      {companies.map(company => {
                        return <h4 style={{display : 'inline', marginLeft : 10}}><CBadge color="secondary">{company}</CBadge></h4>
                      })}
                      </div>
                  </CForm>
                  <br/>
                  <div className="d-grid">
                      <CButton color="success" onClick={sendToDB}>Create Account</CButton>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
    )
}