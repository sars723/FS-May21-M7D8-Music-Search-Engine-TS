import React from 'react'
import { Col,Row } from 'react-bootstrap'
import {RouteComponentProps,withRouter} from 'react-router-dom'
interface SongCardProps /* extends RouteComponentProps */{
   song:{
        album:{
            cover_medium:string,
            title:string,
            id:string
        }
    }
}

type MixedProps=RouteComponentProps & SongCardProps
const SongCard = ({song,history}:MixedProps) => {
    return (
        <Col xs={12} sm={6} md={4} lg={3}>
        <img onClick={()=>history.push("/detailPage/"+song.album.id)} src={song.album.cover_medium} alt="" />
<p>{song.album.title}</p>
   </Col> )
    
}

export default withRouter(SongCard)
