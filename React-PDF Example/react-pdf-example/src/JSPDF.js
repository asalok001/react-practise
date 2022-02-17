import React from 'react';
import { Button } from 'reactstrap';
import jsPDF from 'jspdf';
// import logo from './logo.svg';
import himalayas from './images/himalayas.jpg';

function JSPDF() {

    const pdfGenerate = () => {
        let doc = new jsPDF('landscape', 'px', 'a4', 'false');
        doc.addImage(himalayas, 'JPG', 65, 20, 500, 400);
        doc.addPage();
        doc.setFont('Helvertica', 'bold');
        doc.text(60, 60, 'Name');
        doc.text(60, 80, 'Email');
        doc.text(60, 100, 'Mob');
        doc.setFont('Helvertica', 'normal');
        doc.text(100, 60, 'Alok');
        doc.text(100, 80, 'Alok2792@hotmail.com');
        doc.text(100, 100, '123456');
        doc.save('a.pdf');
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>JSPDF</h1>
            <Button onClick={pdfGenerate}>Download PDF</Button>
        </div>
    );
}

export default JSPDF;