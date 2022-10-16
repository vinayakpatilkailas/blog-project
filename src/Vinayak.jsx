import React,{useState,useEffect} from 'react'
import axios from 'axios'


 const Vinayak = () => {
    const[api, setApi] = useState([])
    const fetchData = async () => {
        try {
          const response = await axios.get("https://vinayakpatil.herokuapp.com/api/details");
          return response.data;
        } catch (error) {}
      };
      useEffect(() => {
        const apiFetch = async () => {
            setApi(await fetchData());
        };
        apiFetch();
      }, [api]);
      console.log(api);



  return (
    <div>











    </div>
  )
}
export default Vinayak ;
