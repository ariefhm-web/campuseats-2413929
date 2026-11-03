
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

      {recent.length > 0 && (
        <section>
          <div className="recent-heading">
            <h2 className="section-title">
              Recently Viewed
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
            {recent.map((vendor) => (
              <Link
                key={vendor.id}
                to={`/vendor/${vendor.id}`}
                className="card recent-card"
              >
                <h3>{vendor.name}</h3>

                <p className="muted">
                  {vendor.location}
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
