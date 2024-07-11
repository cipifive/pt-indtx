import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorBoundaryComponent } from './components/shared/ErrorBoundaryComponent.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
    <App />
  </ErrorBoundary>,
)
