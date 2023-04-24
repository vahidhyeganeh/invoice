import React from 'react'
import Center from './pages/Center'
import Header from './pages/Header'
import { AnimatePresence, motion } from 'framer-motion';
import { Routes, Route, useLocation, useNavigate, NavigationType } from 'react-router-dom';
import InvoiceInfo from './pages/InvoiceInfo';
import invoiceSlice from './redux/invoiceSlice';
import { useDispatch } from 'react-redux';

function App() {
  const location = useLocation()
  const dispatch = useDispatch()

  const onDelete = (id) => {
    dispatch(invoiceSlice.actions.deleteInvoice({id : id }))
  }

  return (
    <div className=' dark:bg-[#141625] duration-300 min-h-screen bg-[#f8f8fb]'>
      <Header />

      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          < Route element={<Center />} path='' />
          < Route element={<InvoiceInfo  onDelete={onDelete} />} path='/invoice' />
        </Routes>
      </AnimatePresence>

    </div>
  )
}

export default App