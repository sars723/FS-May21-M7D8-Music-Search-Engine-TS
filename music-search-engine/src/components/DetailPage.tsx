import {RouteComponentProps,withRouter} from 'react-router-dom'
import {useEffect,useState} from 'react'
import {Card,Container,ListGroup,ListGroupItem,Row,Col} from 'react-bootstrap'

interface DetailPageProps /* extends RouteComponentProps */{
    id:string,
    match:any,
   

}


interface AlbumData{
    duration:number,
    rank:number,
   
    album:{
            cover_big:string,
            title:string,
            release_date:string, 
            tracklist:string,
        },
    artist:{
            name:string
            }
}
type mixedProps=RouteComponentProps & DetailPageProps&AlbumData
const DetailPage = ({match}:mixedProps) => {
    const [data, setData]=useState<AlbumData| null>(null)
     {console.log(match.params.id)}

     const fetchData=async()=>{
         try {
            const response=await fetch("https://striveschool-api.herokuapp.com/api/deezer/track/"+match.params.id)
            if(response.ok){
                const fetchedData=await response.json()
                console.log("fetcheddata",fetchedData)
                setData(fetchedData)
                console.log("data",data)
            }
         } catch (error) {
             console.log(error)
         }

     }

     useEffect(()=>{
         fetchData()
     },[])
    return (
        <div>
           {data&&
          <Container>
              <Row>
                  <Col xs={6} className="mx-auto">
                  <Card >
                      {console.log(data.album.title)}
        <Card.Img variant="top" src={data.album.cover_big} /> 
           <Card.Body>
             <Card.Title>Album Detail</Card.Title>
             <Card.Text>
             Artist Name:{data.artist.name}
             </Card.Text>
           </Card.Body>
           <ListGroup className="list-group-flush">
             <ListGroupItem>Title:{data.artist.name}</ListGroupItem>
             <ListGroupItem>{}</ListGroupItem>
             <ListGroupItem>{}</ListGroupItem>
           </ListGroup>
           <Card.Body>
             <Card.Link href="#"> TrackList:{data.album.tracklist}</Card.Link>
             <Card.Link href="#">{}</Card.Link>
           </Card.Body>
         </Card>
                  </Col>
              </Row>
          </Container>
           }
        </div>
    )
}

export default DetailPage
