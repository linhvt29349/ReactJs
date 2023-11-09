
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/layout'
import Dashboard from './pages/dashboard'
import UpdatePage from './pages/update'
import AddPage from './pages/add'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path='update/:id' element={<UpdatePage />} />
                    <Route path='add' element={<AddPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
