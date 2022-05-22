import React from 'react';
import Swal from 'sweetalert2';

const switalert = (message, status) => {
    return Swal.fire(
        '',
        `${message}`,
        `${status}`
    )

};

export default switalert;