import { Header } from '../components/Header';
import './NotFoundPage.css';

export function NotFoundPage({ cart }) {
  return (
    <>
      <title>404 - Page Not Found</title>

      <Header cart={cart} />

      <div className="not-found-page">
        <h1>404 - Page Not Found</h1>
      </div>
    </>
  )
}