import React from 'react'
import { Nav } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Nav >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/student/create'>Student</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='/teacher/create'>Teacher</Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  )
}
