
import { useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { useVendors } from '../hooks/useVendors.js'
import { useRecentlyViewed } from '../hooks/useRecentlyViewed.js'
import { Loading, ErrorMessage } from '../components/Status.jsx'
import MenuList from '../components/MenuList.jsx'

export default function VendorPage() {
  const { id } = useParams()
  const { vendors, loading, error, reload } = useVendors()
  const { addViewed } = useRecentlyViewed()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={reload} />
  }

  const vendor = vendors.find(
    (v) => String(v.id) === id
  )

  if (!vendor) {
    return (
      <section>
        <h2>Vendor not found</h2>
        <Link to="/">Back to vendors</Link>
      </section>
    )
  }

  return (
    <VendorDetails
      vendor={vendor}
      addViewed={addViewed}
    />
  )
}

function VendorDetails({ vendor, addViewed }) {
  useEffect(() => {
    addViewed(vendor)
  }, [vendor, addViewed])

  return (
    <section>
      <Link to="/">← Back to vendors</Link>

      <h2>{vendor.name}</h2>
      <p className="muted">{vendor.location}</p>
      <p className="muted">{vendor.openHours}</p>

      <h3 className="section-title">Menu</h3>

      <MenuList items={vendor.menu || []} />
    </section>
  )
}
