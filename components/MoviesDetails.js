import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const MoviesDetails = (props) => {
    return (
        <>
            <Container>
                <Row>
                    {props.movie?.poster &&
                        <Col md>
                            <img src={props.movie?.poster} alter="poster" className="w-100" />
                            <br />
                            <br />
                        </Col>
                    }
                    <Col md>
                        <strong>Directed By:</strong> {props.movie?.directors.join(", ")}<br /><br />
                        <p>{props.movie?.fullplot}</p>
                        <strong>Cast:</strong> {props.movies?.cast ? props.movies?.cast.join(", ") : 'N/A'}<br /><br />
                        <strong>Awards:</strong> {props.moies?.awards.text} <br />
                        <strong>IMDB Rating:</strong> {props.movie?.imdb.rating} ({props.movie?.imdb.votes} votes)
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MoviesDetails