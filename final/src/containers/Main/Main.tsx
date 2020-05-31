import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Feed from '../Feed/Feed';
import Meetings from '../Meetings/Meetings';
import './Main.css';

interface Props {}

export default class Main extends React.PureComponent<Props> {
    public render() {
        return (
            <div className='main'>
                <div className='main-inner'>
                    <Container fluid={true}>
                        <Row>

                            {/* Feed */}
                            <Col md={7}>
                                <Feed/>
                            </Col>

                            {/* Meetings */}
                            <Col md={5}>
                                <Meetings />
                            </Col>

                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}