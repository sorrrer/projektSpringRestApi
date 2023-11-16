import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {apiGet} from "../utils/api";

const Purchases = () => {
    const {identificationNumber} = useParams();
    const [purchases, setPurchases] = useState([]);
   
    useEffect(() => {
        
        apiGet("/api/identification/" + identificationNumber + "/purchases").then((data) => setPurchases(data));
    }, []);
    
    return (
            <div>
                <h1>Detail osoby</h1>
                <hr/>
                <table className="table table-bordered">
                    <thead className="table-light">
                    <tr>
                        <th>#</th>
                        <th>Jméno</th>
                        <th colSpan={3}>příjem z prodeje</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {purchases.map((seznam, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{seznam.invoiceNumber}</td>
                                <td>{seznam.seller.taxNumber}</td>
                            </tr>
                            ))}
                    </tbody>
                </table>
            </div>          
    );
};
export default Purchases;