// import React from 'react';
// import { Container, Button } from 'react-bootstrap';

// export function AfterLogin() {
//     return (
//         <Container>
//             {/* Your existing content here */}
            
//             {/* Adding two buttons using React Bootstrap */}
//             <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
//                 <Button variant="primary" style={{ marginRight: '10px' }}>Handover</Button>
//                 <Button variant="secondary">Return Handover</Button>
//             </div>
//         </Container>
//     );
// }

import { Handover } from './Handover';
import { ReturnInvoice } from './ReturnInvoice';
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';


export function AfterLogin() {
    const [showHandover, setShowHandover] = useState(false);
    const [showReturnInvoice, setShowReturnInvoice] = useState(false);

    const handleHandoverClick = () => {
        setShowHandover(true);
        setShowReturnInvoice(false);
    };

    const handleReturnInvoiceClick = () => {
        setShowReturnInvoice(true);
        setShowHandover(false); // Hide Handover
    };

    return (
        <Container>
            {/* Your existing content here */}
            
            {/* Adding two buttons using React Bootstrap */}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button variant="primary" style={{ marginRight: '10px' }} onClick={handleHandoverClick}>Handover</Button>
        <Button variant="secondary" onClick={handleReturnInvoiceClick}>Return Handover</Button>
      </div>

            {/* Conditionally render HandoverComponent */}
            {showHandover && <Handover />}
            {showReturnInvoice && <ReturnInvoice />}
        </Container>
    );
}


