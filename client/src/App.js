/*  _____ _______         _                      _
 * |_   _|__   __|       | |                    | |
 *   | |    | |_ __   ___| |___      _____  _ __| | __  ___ ____
 *   | |    | | '_ \ / _ \ __\ \ /\ / / _ \| '__| |/ / / __|_  /
 *  _| |_   | | | | |  __/ |_ \ V  V / (_) | |  |   < | (__ / /
 * |_____|  |_|_| |_|\___|\__| \_/\_/ \___/|_|  |_|\_(_)___/___|
 *                                _
 *              ___ ___ ___ _____|_|_ _ _____
 *             | . |  _| -_|     | | | |     |  LICENCE
 *             |  _|_| |___|_|_|_|_|___|_|_|_|
 *             |_|
 *
 *   PROGRAMOVÁNÍ  <>  DESIGN  <>  PRÁCE/PODNIKÁNÍ  <>  HW A SW
 *
 * Tento zdrojový kód je součástí výukových seriálů na
 * IT sociální síti WWW.ITNETWORK.CZ
 *
 * Kód spadá pod licenci prémiového obsahu a vznikl díky podpoře
 * našich členů. Je určen pouze pro osobní užití a nesmí být šířen.
 * Více informací na http://www.itnetwork.cz/licence
 */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import PersonIndex from "./people/PersonIndex";
import PersonDetail from "./people/PersonDetail";
import PersonForm from "./people/PersonForm";
import InvoicesIndex from "./invoices/InvoicesIndex";
import InvoicesDetail from "./invoices/InvoicesDetail";
import InvoicesForm from "./invoices/InvoicesForm";
import InvoicesStatistics from "./invoices/InvoicesStatistics";
import PersonStatistics from "./people/PersonStatistics";
import Sales from "./identification/Sales";
import Purchases from "./identification/Purchases";





export function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/people"} className="nav-link">
                Osoby
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/invoices"} className="nav-link">
                Faktury
              </Link>
            </li>
            <li>
            <Link to={"/invoices/statistics"} className="nav-link">
                Statistika faktur
            </Link>
            </li>
            <li>
            <Link to={"/people/statistics"} className="nav-link">
                Statistika osob
            </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route index element={<Navigate to={"/people"} />} />
          <Route path="/people">
            <Route index element={<PersonIndex />} />
            <Route path="show/:id" element={<PersonDetail />} />
            <Route path="create" element={<PersonForm />} />
            <Route path="edit/:id" element={<PersonForm />} />
            <Route path="statistics" element={<PersonStatistics/>} />
          </Route>
          <Route path="/invoices">
            <Route index element={<InvoicesIndex />} />
            <Route path="show/:id" element={<InvoicesDetail />} />
            <Route path="create" element={<InvoicesForm />} />
            <Route path="edit/:id" element={<InvoicesForm />} />
            <Route path="statistics" element={<InvoicesStatistics />} />
          </Route>
          <Route path="/identification">
            <Route path=":identificationNumber/sales" element={<Sales/>} />
            <Route path=":identificationNumber/purchases" element={<Purchases/>} />
          </Route>
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
