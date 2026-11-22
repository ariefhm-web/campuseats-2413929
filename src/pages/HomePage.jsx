
import { Link } from 'react-router'
import { useVendors } from '../hooks/useVendors.js'
import { useRecentlyViewed } from '../hooks/useRecentlyViewed.js'
import { Loading, ErrorMessage } from '../components/Status.jsx'
import VendorCard from '../components/VendorCard.jsx'

export default function HomePage() {

  const { vendors, loading, error, reload } = useVendors()

  const { recent, clearViewed } = useRecentlyViewed()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={reload} />
  }

  return (
    <>

      {/* Available Vendors */}
      <section>
        <h2 className="section-title">Available Vendors</h2>

        <div className="vendor-grid">

          {vendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
            />
          ))}

        </div>
      </section>

      {/* Recently Viewed Menu Items */}
      {recent.length > 0 && (
        <section>

          <div className="recent-heading">

            <h2 className="section-title">
              Recently Viewed Items
            </h2>

            <button
              type="button"
              className="link recent-clear"
              onClick={clearViewed}
            >
              Clear history
            </button>

          </div>

          <div className="vendor-grid">

            {recent.map((item) => (
              <Link
                key={`${item.vendorId}-${item.id}`}
                to={`/vendor/${item.vendorId}`}
                className="card recent-card"
              >

                <h3>{item.name}</h3>

                <p className="muted">
                  {item.vendorName}
                </p>

                <p className="muted">
                  {item.category}
                </p>

                <p className="price">
                  RM {item.price.toFixed(2)}
                </p>

                <span className="recent-link">
                  View vendor →
                </span>

              </Link>
            ))}

          </div>

        </section>
      )}

    </>
  )
}
