import React, { Component } from 'react'
import CoastersService from './../../../service/coasters.service'

import CoasterCard from './Coaster-card'
import Loader from './../../shared/Spinner/Loader'
import CoasterForm from './../Coaster-form/Coaster-form'

import { Container, Row, Button, Modal } from 'react-bootstrap'


import './Coaster-list.css'

class CoasterList extends Component {

    constructor() {
        super()
        this.state = {
            coasters: undefined,
            showModal: false
        }
        this.coastersService = new CoastersService()
    }

    componentDidMount = () => this.refreshCoasters()

    refreshCoasters = () => {
        this.coastersService
            .getCoasters()
            .then(res => this.setState({ coasters: res.data }))
            .catch(err => console.log(err))
    }

    handleModal = visible => this.setState({ showModal: visible })

    render() {
        return (
            <>
                <Container>

                    <h1>Listado de montañas rusas</h1>

                    <Button onClick={() => this.handleModal(true)} variant="dark" size="sm">Crear nueva montaña rusa</Button>

                    <Row>
                        {
                            this.state.coasters
                                ?
                                this.state.coasters.map(elm => <CoasterCard key={elm._id} {...elm} />)
                                :
                                <Loader />
                        }
                    </Row>
                </Container>


                <Modal show={this.state.showModal} onHide={() => this.handleModal(false)}>
                    <Modal.Body>
                        <CoasterForm closeModal={() => this.handleModal(false)} updateList={this.refreshCoasters} />
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}

export default CoasterList