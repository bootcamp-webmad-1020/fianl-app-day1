import { Col, Card, Button } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const CoasterCard = ({ title, imageUrl, _id }) => {
    return (
        <Col lg={4}>
            <Card className="coaster-card">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Link className="btn btn-dark btn-block btn-sm" to={`/montañas/${_id}`}>Ver detalles</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CoasterCard