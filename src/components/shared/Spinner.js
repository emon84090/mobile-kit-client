import React from 'react';

const Spinner = () => {
    return (
        <>
            <div className="spinner flex justify-center items-center py-10">
                <i class='bx bx-loader-alt font-semibold text-3xl animate-spin text-primary'></i>
            </div>
        </>
    );
};

export default Spinner;