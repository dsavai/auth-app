import React, { useRef, useState } from 'react'
import { Container, Card, Button, Form, Alert } from "react-bootstrap"

export default function Signup() {
    const nameRef = useRef("")
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const confirmPasswordRef = useRef("")
    const [error, setError] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault()
        if (passwordRef !== confirmPasswordRef) {
            return setError("Password do not match")
        }
    }

    
    
    return (
        <>
            <Container style={{ height: "100vh", width: "500px" }} className="d-flex justify-content align-items-center">
                <Card style={{ width: "100vw"}} className="p-4">
                    <Card.Text style={{ fontSize: "30px" }}>Sign up</Card.Text>
                    {error ? <Alert variant="danger">{error}</Alert> : null}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" ref={nameRef} placeholder="Please enter your name" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef}  placeholder="Please enter your email" required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" ref={confirmPasswordRef} required />
                        </Form.Group>
                        <Button type="submit" variant="primary" className="d-block w-100 py-3">Submit</Button>
                    </Form>
                </Card>
            </Container>
        </>
    )
}
