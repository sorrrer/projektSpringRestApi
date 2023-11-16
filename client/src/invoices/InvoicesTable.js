import React from "react";
import {Link} from "react-router-dom";

const InvoicesTable = ({label, items, deleteInvoice}) => {
    return (
        <div class="text-center">
            <p>
                {label} {items.length}
            </p>

            <table className="table table-bordered">
                <thead class="table-light">
                <tr>
                    <th>#</th>
                    <th>Číslo faktury</th>
                    <th>Název produktu</th>
                    <th>Cena</th>
                    <th>Prodávající</th>
                    <th>Kupující</th>
                    <th colSpan={3}>Akce</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{item.invoiceNumber}</td>
                        <td>{item.product}</td>
                        <td>{item.price}</td>
                        <td>{item.seller.name}</td>
                        <td>{item.buyer.name}</td>
                        <td>
                            <div className="btn-group">
                                <Link
                                    to={"/invoices/show/" + item._id}
                                    className="btn btn-sm btn-outline-info"
                                >
                                    Zobrazit
                                </Link>
                                <Link
                                    to={"/invoices/edit/" + item._id}
                                    className="btn btn-sm btn-outline-warning"
                                >
                                    Upravit
                                </Link>
                                <button
                                    onClick={() => deleteInvoice(item._id)}
                                    className="btn btn-sm btn-outline-danger"
                                >
                                    Odstranit
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to={"/invoices/create"} className="btn btn-primary">
                Nová faktura
            </Link>
        </div>
    );
};
export default InvoicesTable;