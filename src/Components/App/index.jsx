import { React, useState, useEffect } from 'react'
import ClassroomsList from '../ClassroomsList';
import TopNavBar from '../TopNavBar'
import ClassroomAPI from '../../API/classroom-api'
import './index.scss'

const API_URL = ClassroomAPI.url


export default function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(API_URL)
          .then(res => { return res.json()})
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className='container-fluid'>
                <TopNavBar brandName="My Classrooms" />
                <div className="container">
                    <ClassroomsList items={items}/>
                </div>
            </div>
        );
    }
}