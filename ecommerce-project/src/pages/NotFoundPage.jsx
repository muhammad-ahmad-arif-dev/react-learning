import { Header } from '../components/Header';
import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <>
      <title>404 - Page Not Found</title>

      <Header />

      <div className="not-found-page">
        <h1>404 - Page Not Found</h1>
      </div>
    </>
  )
}