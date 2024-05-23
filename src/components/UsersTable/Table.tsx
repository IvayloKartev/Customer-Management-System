import { CBadge, CTable } from "@coreui/react"
import axios from "axios";
import { useState, useEffect, ReactElement } from "react";
import {
  cilViewColumn
} from '@coreui/icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";

interface ResponseProps {
  status : string,
  data : Array<Account>
}

interface Account {
  id : number
  name? : string,
  email? : string, 
  password? : string,
  names? : string,
  phone? : string,
  address? : string,
  companies? : Array<any>,
  _cellProps? : Object,
  actions? : ReactElement
}

interface AccountResp {
  id : number
  name? : string,
  email? : string, 
  password? : string,
  names? : string,
  phone? : string,
  address? : string,
  companies? : Array<Company>,
}

interface TableProps {
  isDelete : boolean
}

interface Company {
  id : number,
  name : string,
  ownerId : number
}

export default function Table({isDelete} : TableProps) {

    const [items, setItems] = useState<Array<Account>>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/api/getusers');
          const jsdata : ResponseProps = response.data;
          console.log(jsdata.data);
          addGeneratedButtons(jsdata.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      function generateButton(id : number) {
          return (
            <div style={{display : 'flex', flexDirection : 'row', gap : 10}}>
              <a href={`/#/user/${id}`}>
                  <div style={{width : 30, height : 30, backgroundColor : '#3399ff', borderRadius : 10, display : 'flex', justifyContent : 'center', alignItems: 'center'}}>
                    <FontAwesomeIcon icon={faEye} color={"white"}/>
                  </div>
              </a>
              <a href={`/#/edituser/${id}`}>
                <div style={{width : 30, height : 30, backgroundColor : 'green', borderRadius : 10, display : 'flex', justifyContent : 'center', alignItems: 'center'}}>
                      <FontAwesomeIcon icon={faEdit} color={"white"}/>
                </div>
              </a>
            </div>
          ) 
     }

     function generateBadge(name : string) {
      return (
        <CBadge color="info">{name}</CBadge>
      )
     }

     async function addGeneratedButtons(itemsO : Array<Account>) {
        let newArr : Array<Account> = [];
        for(let i=0; i<itemsO.length; i++) {
         console.log(itemsO[i]+" "+itemsO[i].id+" "+itemsO[i].names)
         const id = itemsO[i].id;
         console.log("id = " + id);
         itemsO[i].actions = generateButton(id);
         itemsO[i].companies = itemsO[i].companies?.map(c => generateBadge(c.name))
         newArr.push(itemsO[i]);
        }
        console.log(newArr);
        setItems(newArr);
     }

     fetchData();
    }, []);

    const columns = [
        {
          key: 'id',
          _props: { scope: 'col' },
        },
        {
          key: 'names',
          _props: { scope: 'col' },
        },
        {
          key: 'name',
          _props: { scope: 'col' },
        },
        {
          key: 'email',
          _props: { scope: 'col' },
        },
        {
          key: 'phone',
          _props: { scope: 'col' },
        },
        {
          key: 'companies',
          _props: { scope: 'col' },
        },
        {
          key : 'actions',
          _props : { scope : 'col'}
        }
      ]
      


      return <CTable striped columns={columns} items={items} />
}