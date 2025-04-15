import { Outlet } from 'react-router-dom'
import HeaderUi from '../components/dumb/Header.ui.jsx'
import Footer from '../components/dumb/Footer.ui.jsx'

export default function DefaultLayout() {
    return (
        <>
            <HeaderUi />
            <Outlet />
            <Footer />

        </>
    )
}