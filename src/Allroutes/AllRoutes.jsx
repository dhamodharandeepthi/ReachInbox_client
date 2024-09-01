import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Desktop from '../pages/Desktop';

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Desktop />} />
            </Routes>
        </div>
    );
}

export default AllRoutes;