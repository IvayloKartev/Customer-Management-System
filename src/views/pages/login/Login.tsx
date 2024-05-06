import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import prisma from 'prisma/db';
import type { InferGetServerSidePropsType, GetServerSideProps, GetStaticProps } from 'next'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { setUser } from '@/redux/actions'

let nameG = "";

interface UserProp {
  user : User
}

interface User {
  name : string,
  email : string,
  password : string
}

interface Props {
  props : UserProp
}

interface RespProp {
  login : string,
  user : User
}
const Login = (props : Props) => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  async function checkUser() {
    await axios.post("../api/loginuser", {
      name : name,
      password : password
    }).then(async (response) => {
      const data : RespProp = await response.data;
      if(data.login === "OK") {
        console.log(data.user.name);
        dispatch(setUser(data.user));
        window.location.href = "/#/dashboard";
      }
      else console.log(data.login);
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" onChange={(e) => {
                        setName(e.target.value)
                        nameG = e.target.value 
                        }}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={checkUser}>
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export const getStaticProps : GetStaticProps =  async (context) => {
  const user = await prisma.user.findUnique({
    where : {
      name : nameG
    }
  })
  const all = await prisma.user.findMany();
  console.log(" == "+all);
  return {
    props: {user}
  };
}

export default Login
