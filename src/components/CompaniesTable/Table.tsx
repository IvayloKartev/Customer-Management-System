import { CTable } from "@coreui/react"
import axios from "axios";
import { useState, useEffect } from "react";

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
  address? : string
  _cellProps? : Object
}

export default function Table() {

    const [items, setItems] = useState<Array<Account>>([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/api/getcompanies');
          const jsdata : ResponseProps = response.data;
          setItems(jsdata.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
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
          key: 'owner',
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
          key: 'blank',
          _props: { scope: 'col' },
        },
      ]
      return <CTable striped columns={columns} items={items} />
}