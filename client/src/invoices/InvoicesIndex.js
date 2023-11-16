import React, {useEffect, useState} from "react";
import {apiDelete, apiGet} from "../utils/api";
import InvoicesTable from "./InvoicesTable";
import InvoicesFilter from "./InvoicesFilter";

const InvoicesIndex = () => {
    const [invoices, setInvoices] = useState([]);
    const [sellerListState, setSellerList] = useState([]);
    const [buyerListState, setBuyerList] = useState([]);
    const [productListState, setProductList] = useState([]);
    const [filterState, setFilter] = useState({
        sellerID: undefined,
        buyerID: undefined,
        product: undefined,
        minPrice: undefined,
        maxPrice: undefined,
        limit: undefined,
    });

    const deleteInvoice = async (id) => {
        try {
            await apiDelete("/api/invoices/" + id);
        } catch (error) {
            console.log(error.message);
            alert(error.message)
        }
        setInvoices(invoices.filter((item) => item._id !== id));
    };
 
    useEffect(() => {
        apiGet("/api/invoices").then((data) => {
            setInvoices(data);
            setProductList(data);
        });
        apiGet('/api/people').then((data) => {
            setSellerList(data);
            setBuyerList(data);
        });
    }, [filterState]);

    useEffect(() => {
        apiGet("/api/invoices").then((data) => {
            setInvoices(data);
        });
    }, []);

    const handleChange = (e) => {
        // pokud vybereme prázdnou hodnotu (máme definováno jako true/false/'' v komponentách), nastavíme na undefined
        if (e.target.value === "false" || e.target.value === "true" || e.target.value === '') {
            setFilter(prevState => {
                return {...prevState, [e.target.name]: undefined}
            });
        } else {
            setFilter(prevState => {
                return { ...prevState, [e.target.name]: e.target.value}
            });
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const params = filterState;
    
        const data = await apiGet("/api/invoices", params);
        setInvoices(data);
    };

    return (
        <div>
            <h1 class="text-center">Seznam Faktur</h1>
            <hr />
            <InvoicesFilter
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                sellerList={sellerListState}
                buyerList={buyerListState}
                productList={productListState}
                filter={filterState}
                confirm="Filtrovat faktury"
            />
            <hr />

            <InvoicesTable
                deleteInvoice={deleteInvoice}
                items={invoices}
                label="Celkový Počet faktur:"
            />
        </div>
    );
};
export default InvoicesIndex;