import React, { useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import quizPDF from "../.../../data/2023_Quiz.pdf";


import {
    Container, Row, Col, Image, Navbar, Nav
    } from 'react-bootstrap';

const Quiz = (props) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;    

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }

    return(

        <div>
        <div className="main-header">
            <div className="bg-dark navbar">
            <Row>
                <Col className="ms-header-col">
                    <Image src="/images/header.png" height="35px" width="215px" alt="Bismillah" />
                </Col>
            </Row>            
            </div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/donate">Donations</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </div>
            <Container>
            <div>
                <Document
                    file={quizPDF}
                    onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
            </Container>         
        </div>

    );
};

export default Quiz;
