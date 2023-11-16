import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {apiGet} from "../utils/api";

const Sales = () => {
    const {identificationNumber} = useParams();
    const [sale, setSale] = useState([]);
   
    useEffect(() => {
        
        apiGet("/api/identification/" + identificationNumber + "/sales").then((data) => setSale(data));
    }, []);
    
    return (
            <div className="text-center">
                <h3>Seznam vystavených faktur</h3>
                <hr/>
                <table className="table table-bordered">
                    <thead className="table-light">
                    <tr>
                        <th>#</th>
                        <th>číslo faktury</th>
                        <th>Datum vystavení</th>
                        <th>Produkt</th>
                        <th>cena</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {sale.map((seznam, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{seznam.invoiceNumber}</td>
                                <td>{seznam.issued}</td>
                                <td>{seznam.product}</td>
                                <td>{seznam.price} Kč</td>    
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>          
    );
};
export default Sales;
