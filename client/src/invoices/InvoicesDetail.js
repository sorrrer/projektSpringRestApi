import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {apiGet} from "../utils/api";

const InvoicesDetail = () => {
    const {id} = useParams();
    const [invoice, setInvoice] = useState();

    useEffect(() => {
        apiGet("/api/invoices/" + id).then((data) => setInvoice(data));
    }, [id]);
   
    if(!invoice)
        return <>Načítám...</>

    return (
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h3>Detail faktury</h3>
                        <hr/>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th>Číslo faktury:</th>
                                    <td>{invoice.invoiceNumber}</td>
                                </tr>
                                <tr>
                                    <th>Datum vystavení:</th>
                                    <td>{invoice.issued}</td>
                                </tr>
                                <tr>
                                    <th>Datum splatnosti:</th>
                                    <td>{invoice.dueDate}</td>
                                </tr>
                                <tr>
                                    <th>Název produktu:</th>
                                    <td>{invoice.product}</td>
                                </tr>
                                <tr>
                                    <th>Cena:</th>
                                    <td>{invoice.price} Kč</td>
                                </tr>
                                <tr>
                                    <th>dph:</th>
                                    <td>{invoice.vat} %</td>
                                </tr>
                                <tr>
                                    <th>Poznámka:</th>
                                    <td>{invoice.note}</td>
                                </tr>
                                <tr>
                                    <th>id faktury:</th>
                                    <td>{invoice._id}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-4">
                        <h3>Prodávající</h3>
                        <hr/>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th>Jméno:</th>
                                    <td>{invoice.seller.name}</td>
                                </tr>
                                <tr>
                                    <th>Identifikační číslo:</th>
                                    <td>{invoice.seller.identificationNumber}</td>
                                </tr>
                                <tr>
                                    <th>Tax Number:</th>
                                    <td>{invoice.seller.taxNumber}</td>
                                </tr>
                                <tr>
                                    <th><strong>Bankovní spojení</strong></th>
                                    
                                </tr>
                                <tr>
                                    <th>Číslo účtu:</th>
                                    <td>{invoice.seller.accountNumber}/{invoice.seller.bankCode}</td>
                                </tr>
                                <tr>
                                    <th>Iban:</th>
                                    <td>{invoice.seller.iban}</td>
                                </tr>
                                <tr>
                                    <th><strong>Kontaktní údaje</strong></th>
                                    
                                </tr>
                                <tr>
                                    <th>Telefon:</th>
                                    <td>{invoice.seller.telephone}</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>{invoice.seller.mail}</td>
                                </tr>
                                <tr>
                                    <th>Bydliště:</th>
                                    <td>{invoice.seller.city},{invoice.seller.street},{invoice.seller.zip}</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>{invoice.seller.country}</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>{invoice.seller._id}</td>
                                </tr>
                            
                            </tbody>
                        </table>
                    </div>
                    <div class="col-md-4">
                        <h3>Kupující</h3>
                        <hr/>
                        <table class="table">
                            <tbody>
                                <tr>
                                    <th>Jméno:</th>
                                    <td>{invoice.buyer.name}</td>
                                </tr>
                                <tr>
                                    <th>Identifikační číslo:</th>
                                    <td>{invoice.buyer.identificationNumber}</td>
                                </tr>
                                <tr>
                                    <th>Tax Number:</th>
                                    <td>{invoice.buyer.taxNumber}</td>
                                </tr>
                                <tr>
                                    <th><strong>Bankovní spojení</strong></th>
                                    
                                </tr>
                                <tr>
                                    <th>Číslo účtu:</th>
                                    <td>{invoice.buyer.accountNumber}/{invoice.buyer.bankCode}</td>
                                </tr>
                                <tr>
                                    <th>Iban:</th>
                                    <td>{invoice.buyer.iban}</td>
                                </tr>
                                <tr>
                                    <th><strong>Kontaktní údaje</strong></th>
                                    
                                </tr>
                                <tr>
                                    <th>Telefon:</th>
                                    <td>{invoice.buyer.telephone}</td>
                                </tr>
                                <tr>
                                    <th>Email:</th>
                                    <td>{invoice.buyer.mail}</td>
                                </tr>
                                <tr>
                                    <th>Bydliště:</th>
                                    <td>{invoice.buyer.city},{invoice.buyer.street},{invoice.buyer.zip}</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>{invoice.buyer.country}</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>{invoice.buyer._id}</td>
                                </tr>
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> 
    );
};

export default InvoicesDetail;
