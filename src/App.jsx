import Header from './components/Header.jsx'
import VendorCard from './components/VendorCard.jsx'
import MenuItemCard from './components/MenuItemCard.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <section>
          <h2>Today’s vendors</h2>
          <VendorCard />
        </section>
        <section>
          <h2>Popular items</h2>
          <div className="grid">
            <MenuItemCard
              name="Nasi Lemak Special"
              description="Coconut rice with sambal, egg and cucumber"
              price={7.5}
              available={true}
            />
            <MenuItemCard
              name="Ayam Gepuk"
              description="Smashed fried chicken with sambal and rice"
              price={8}
              available={true}
            />
            <MenuItemCard
              name="Teh Tarik"
              description="Pulled milk tea"
              price={2.5}
              available={false}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
