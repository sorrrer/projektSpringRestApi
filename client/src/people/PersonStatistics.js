import React, {useEffect, useState} from "react";
import {apiGet} from "../utils/api";

const PersonStatistics = () => {
    const [statistics, setStatistics] = useState();
   
    useEffect(() => {
        apiGet("/api/people/statistics").then((data) => setStatistics(data));
    }, []);
    
    if(!statistics)
        return <>Loading...</>
    return (
        <div className="row text-center">
            <div className="col">
                <h2>Statistika osob</h2>
            
                <table className="table table-bordered">
                    <thead className="table-light">
                    <tr>
                        <th>#</th>
                        <th>Jméno</th>
                        <th colSpan={3}>příjem z prodeje</th>
                    </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        {statistics.map((statistic, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{statistic.personName}</td>
                                <td>{statistic.revenue} Kč</td>
                            </tr>
                            ))}
                    </tbody>
                </table>
              </div>          
        </div>
    );
};
export default PersonStatistics;

