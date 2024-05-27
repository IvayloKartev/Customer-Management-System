import { CTable } from "@coreui/react"
import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEdit } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react";
import { CBadge } from "@coreui/react";

interface Account {
  id : number
  name? : string,
  email? : string, 
  password? : string,
  names? : string,
  phone? : string,
  address? : string
  _cellProps? : Object
}

interface Company {
  id : number,
  name : string,
  bulstat : string,
  owner : Array<any>,
  actions? : ReactElement
}

interface ResponseProps {
  status : string,
  data : Array<Company>
}

export default function Table() {

    const [items, setItems] = useState<Array<Account>>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/api/getcompanies');
          const jsdata : ResponseProps = response.data;
          addGeneratedButtons(jsdata.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      function generateButton(id : number) {
        return (
          <div style={{display : 'flex', flexDirection : 'row', gap : 10}}>
            <a href={`/#/company/${id}`}>
                <div style={{width : 30, height : 30, backgroundColor : '#3399ff', borderRadius : 10, display : 'flex', justifyContent : 'center', alignItems: 'center'}}>
                  <FontAwesomeIcon icon={faEye} color={"white"}/>
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
  
       async function addGeneratedButtons(itemsO : Array<Company>) {
          let newArr : Array<Company> = [];
          for(let i=0; i<itemsO.length; i++) {
           console.log(itemsO[i]+" "+itemsO[i].id+" "+itemsO[i].name)
           const id = itemsO[i].id;
           console.log("id = " + id);
           itemsO[i].actions = generateButton(id);
           itemsO[i].owner = itemsO[i].owner?.map(c => generateBadge(c.user.name))
           newArr.push(itemsO[i]);
          }
          //console.log(newArr);
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
          key: 'name',
          _props: { scope: 'col' },
        },
        {
          key: 'bulstat',
          _props: { scope: 'col' },
        },
        {
          key: 'owner',
          _props: { scope: 'col' },
        },
        {
          key: 'actions',
          _props: { scope: 'col' },
        },
      ]
      return <CTable striped columns={columns} items={items} />
}