import React, {useEffect, useState} from "react";
import {apiGet} from "../utils/api";

const InvoicesStatistics = () => {
    const [statistics, setStatistics] = useState();
   
    useEffect(() => {
        apiGet("/api/invoices/statistics").then((data) => setStatistics(data));
    }, []);

    if(!statistics)
        return <>Loading...</>
    return (
   
        <div class="row text-center"> 
            <div class="col">
                <h2>Statistika faktur</h2>
            
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Celková cena za rok:</th>
                        <th scope="col">Celková cena za celé období</th>
                        <th scope="col">Počet faktur</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row"></th>
                        <td>{statistics.currentYearSum} Kč</td>
                        <td>{statistics.allTimeSum} Kč</td>
                        <td>{statistics.invoicesCount}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InvoicesStatistics;