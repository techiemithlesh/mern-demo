import React from 'react';
import {BrowserRouter as Router, Route, Routes, redirect} from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Login from './admin/pages/Login';

import NotFound from './pages/NotFound';
import './App.css';
import Admindashboard from './admin/pages/Admindashboard';
import PrivateRoute from './components/PrivateRoute';
import ViewProject from './admin/pages/ViewProject';
import AdminContact from './admin/pages/ViewContact';
import AddProject from './admin/pages/AddProject';
import EditProject from './admin/pages/EditProject';

const App = () => {
 

    return (
     
        <Router>
        <Routes>
           
           {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<Login />} />
          
           {/* Private routes */}
          <Route path="/admin/dashboard" element={<PrivateRoute><Admindashboard /></PrivateRoute>}/>              
          <Route path='/admin/projects' element={<PrivateRoute><ViewProject/></PrivateRoute>}/>
          <Route path='/admin/projects/new' element={<PrivateRoute><AddProject/></PrivateRoute>}/>
          <Route path='/admin/projects/edit/:id' element={<PrivateRoute><EditProject/></PrivateRoute>}/>
          <Route path='admin/contacts' element={<PrivateRoute><AdminContact/></PrivateRoute>}/>

        {/* not found routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster/>
      </Router>
    );
};

export default App;
