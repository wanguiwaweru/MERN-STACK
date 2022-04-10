import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateCustomer from './components/createCustomer';
import CustomerList from './components/customerList';
import EditCustomer from './components/editCustomer';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/customer" element={<CreateCustomer />} />
                <Route path='/customerlist' element={<CustomerList />} />
                <Route path='/edit/:id' element={<EditCustomer />} />
                <Route exact path='/' element={<CreateCustomer />} />

            </Routes>
        </BrowserRouter>

    );
}

export default App;