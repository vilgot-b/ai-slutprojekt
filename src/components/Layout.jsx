import Navbar from './Navbar'
import Footer from './Footer'
import BookingModal from './BookingModal'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      <BookingModal />
      <Navbar />
      <main className="flex-1 page-enter">
        {children}
      </main>
      <Footer />
    </div>
  )
}
