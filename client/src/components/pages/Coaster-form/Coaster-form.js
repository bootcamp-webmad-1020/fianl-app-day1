import React, { Component } from 'react'
import CoastersService from './../../../service/coasters.service'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'

class CoasterForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            description: '',
            inversions: '',
            length: '',
            imageUrl: ''
        }
        this.coastersService = new CoastersService()
    }

    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })

    handleSubmit = e => {
        e.preventDefault()

        this.coastersService
            .saveCoaster(this.state)
            .then(res => {
                this.props.updateList()
                this.props.closeModal()
            })
            .catch(err => console.log(err))
    }


    render() {

        return (
            <>
                <h1>Nueva montaña rusa</h1>
                <hr />

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="title">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="text" name="description" value={this.state.description} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="length">
                        <Form.Label>Longitud</Form.Label>
                        <Form.Control type="number" name="length" value={this.state.length} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="inversions">
                        <Form.Label>Inversiones</Form.Label>
                        <Form.Control type="number" name="inversions" value={this.state.inversions} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group controlId="imageUrl">
                        <Form.Label>Imagen (URL)</Form.Label>
                        <Form.Control type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} />
                    </Form.Group>
                    <Button variant="dark" type="submit">Crear montaña rusa</Button>
                </Form>
            </>
        )
    }
}

export default CoasterForm