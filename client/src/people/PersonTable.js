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
import {Link} from "react-router-dom";

const PersonTable = ({label, items, deletePerson}) => {
    return (
        <div className="text-center">
            <p>
                {label} {items.length}
            </p>

            <table className="table table-bordered">
                <thead className="table-light">
                <tr>
                    <th>#</th>
                    <th>Jméno</th>
                    <th colSpan={3}>Akce</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>
                            <div className="btn-group">
                                <Link
                                    to={"/people/show/" + item._id}
                                    className="btn btn-sm btn-outline-info"
                                >
                                    Zobrazit
                                </Link>
                                <Link
                                    to={"/people/edit/" + item._id}
                                    className="btn btn-sm btn-outline-warning"
                                >
                                    Upravit
                                </Link>
                                <button
                                    onClick={() => deletePerson(item._id)}
                                    className="btn btn-sm btn-outline-danger"
                                >
                                    Odstranit
                                </button>
                            </div>
                            <div className="btn-group offset-md-2">
                                <Link
                                    to={"/identification/" + item.identificationNumber + "/sales"}
                                    className="btn btn-sm btn-outline-primary"
                                >
                                    Seznam vystavených faktur
                                
                                </Link>
                                <Link
                                    to={"/identification/" + item.identificationNumber + "/purchases"}
                                    className="btn btn-sm btn-outline-primary"
                                >
                                    Seznam přijatých faktur
                                
                                </Link>

                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to={"/people/create"} className="btn btn-outline-primary">
                Nová osoba
            </Link>
        </div>
    );
};
export default PersonTable;
