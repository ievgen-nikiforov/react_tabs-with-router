import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import classNames from 'classnames';
import { TabsPage } from './pages/TabsPage';

const activeTabClassName = ({ isActive }: { isActive: boolean }) => {
  return classNames('navbar-item ', { 'is-active': isActive });
};

export const App = () => {
  return (
    <>
      {/* Also requires <html class="has-navbar-fixed-top"> */}
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" end className={activeTabClassName}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={activeTabClassName}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route
              path=""
              element={
                <div className="section">
                  <div className="container">
                    <h1 className="title">Home page</h1>
                  </div>
                </div>
              }
            />
            <Route path="tabs">
              <Route index element={<TabsPage />} />
              <Route path=":tabId" element={<TabsPage />} />
            </Route>
            <Route
              path="*"
              element={
                <div className="section">
                  <div className="container">
                    <h1 className="title">Page not found</h1>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
