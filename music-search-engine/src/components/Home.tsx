import {useEffect, useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import SongCard from './SongCard'
interface Songs{
    album:{
        cover_medium:string,
        title:string
        id:string
    }
}
interface HomeProps{
    searchQuery:string
}

const Home = ({searchQuery}:HomeProps) => {
    const [songs,setSongs]=useState<Songs[]>([])
    const fetchData=async()=>{
        try {
            let response=await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+(searchQuery?searchQuery:"eminium"))
            if(response.ok){
                let fetchedData=await response.json()
                console.log(fetchedData.data)
                setSongs(fetchedData.data)
            }
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        fetchData()
    },[searchQuery])
    return (
        <div>
           
            <Container className="mt-5">
               <Row>
                    {songs&&songs.map(song=>
                   <SongCard song={song}/>)}
            
               </Row>
            </Container>
           
          
        </div>
    )
}

export default Home
