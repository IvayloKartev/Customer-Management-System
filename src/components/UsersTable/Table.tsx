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
          const response = await axios.get('/api/getusers');
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
      ]
      /*function convertToSmartTable(data : Array<Account>) {
        data.map(user => {
          user._cellProps = { id: { scope: 'row' } };
        })
      }*/

      /*let arr : any = [];
      axios.get("/api/getusers")
      .then(async (response) => {
        const json : ResponseProps = await response.data;
        //convertToSmartTable(json.data)
        //console.log(json.data);
        items = await JSON.parse(JSON.stringify(json.data));
        console.log(items);
        console.log("HERE69  " + JSON.stringify(items));
      }).then(() => {
        console.log("HERE96" + JSON.stringify(items));
        arr = JSON.parse(JSON.stringify(items));
      })*/
      return <CTable striped columns={columns} items={items} />
}