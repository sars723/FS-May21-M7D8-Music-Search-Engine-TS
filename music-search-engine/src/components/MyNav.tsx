import { Navbar,Nav,Form,FormControl,Button } from "react-bootstrap"
import { useState } from "react"

interface MyNavProps{
   getSearchQuery:(searchQuery:string)=>any
}
const MyNav = ({getSearchQuery}:MyNavProps) => {
    const [searchQuery,setSearchQuery]=useState('')
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />
          <Button variant="outline-info" onClick={()=>getSearchQuery(searchQuery.toLocaleLowerCase())}>Search</Button>
        </Form>
      </Navbar>
    )
}

export default MyNav
