import { Col, Row, Stack } from "react-bootstrap"

export const Experience = () => {
    return(
        <Stack>
            <h2 className="text-center">Experience</h2>
                <Row className="gap-4">
                    <Col className="border rounded mx-5 px-5">
                        <h3 className="text-center">Front-End</h3>
                        <ul>
                            <li>HTML<p>Experience</p></li>
                            <li>CSS<p>Experience</p></li>
                            <li>JavaScript<p>Intermediate</p></li>
                        </ul>
                    </Col>
                    <Col className="border rounded mx-5 px-5">
                        <h3 className="text-center">Back-End</h3>
                        <ul>
                            <li>Node JS<p>Beginner</p></li>
                            <li>Git<p>Beginner</p></li>
                            <li>React<p>Intermediate</p></li>
                        </ul>
                    </Col>
                </Row>
        </Stack>
    )
}