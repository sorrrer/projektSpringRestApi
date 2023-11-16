import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {apiGet, apiPost, apiPut} from "../utils/api";
import InputField from "../components/InputField";
import FlashMessage from "../components/FlashMessage";

const InvoicesForm = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [buyerId, setBuyerId] = useState(0);
    const [sellerId, setSellerId] = useState(0);
    const [invoice, setInvoice] = useState({
        invoiceNumber: "",
        seller: {_id: sellerId},
        buyer: {_id: buyerId},
        issued: "",
        dueDate: "",
        product: "",
        price: "",
        vat: "",
        note: "",
    });

    const [sentState, setSent] = useState(false);
    const [successState, setSuccess] = useState(false);
    const [errorState, setError] = useState(null);

    useEffect(() => {
        if (id) {
            apiGet("/api/invoices/" + id).then((data) => setInvoice(data));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        (id ? apiPut("/api/invoices/" + id, invoice) : apiPost("/api/invoices", invoice))
            .then((data) => {
                setSent(true);
                setSuccess(true);
                navigate("/invoices");
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
                setSent(true);
                setSuccess(false);
            });
    };

    const sent = sentState;
    const success = successState;

    return (
        <div>
            <h1>{id ? "Upravit" : "Vytvořit"} fakturu</h1>
            <hr/>
            {errorState ? (
                <div className="alert alert-danger">{errorState}</div>
            ) : null}
            {sent && (
                <FlashMessage
                    theme={success ? "success" : ""}
                    text={success ? "Uložení faktury proběhlo úspěšně." : ""}
                />
            )}
            <form onSubmit={handleSubmit}>
                <InputField
                    required={true}
                    type="text"
                    name="invoiceNumber"
                    min="3"
                    label="Číslo faktury"
                    prompt="Zadejte číslo faktury"
                    value={invoice.invoiceNumber}
                    handleChange={(e) => {
                        setInvoice({...invoice, invoiceNumber: e.target.value});
                    }}
                />
                <InputField
                    required={true}
                    type="text"
                    name="sellerId"
                    min="1"
                    label="ID prodávajícího"
                    prompt="Zadejte id prodávajícího"
                    value={invoice.seller._id}
                    handleChange={(e) => {
                        setInvoice({...invoice, seller:{ _id: e.target.value}});
                    }}
                />
                    <InputField
                    required={true}
                    type="text"
                    name="buyerId"
                    min="1"
                    label="ID nakupujícího"
                    prompt="Zadejte id nakupujícího"
                    value={invoice.buyer._id}
                    handleChange={(e) => {
                        setInvoice({...invoice, buyer:{ _id: e.target.value}});
                    }}
                />
                <InputField
                    required={true}
                    type="date"
                    name="issued"
                    min="3"
                    label="datum prodeje"
                    prompt="Zadejte datum vystavení fakury"
                    value={invoice.issued}
                    handleChange={(e) => {
                        setInvoice({...invoice, issued: e.target.value});
                    }}
                    />
                     <InputField
                    required={true}
                    type="date"
                    name="dueDate"
                    min="3"
                    label="datum splatnosti"
                    prompt="Zadejte datum splatnosti faktury"
                    value={invoice.dueDate}
                    handleChange={(e) => {
                        setInvoice({...invoice, dueDate: e.target.value});
                    }}
                    />
                    <InputField
                    required={true}
                    type="text"
                    name="product"
                    min="3"
                    label="Název produktu"
                    prompt="Zadejte název produktu"
                    value={invoice.product}
                    handleChange={(e) => {
                        setInvoice({...invoice, product: e.target.value});
                    }}
                    />
                    <InputField
                    required={true}
                    type="text"
                    name="price"
                    min="3"
                    label="Cena produktu"
                    prompt="Zadejte cenu produktu"
                    value={invoice.price}
                    handleChange={(e) => {
                        setInvoice({...invoice, price: e.target.value});
                    }}
                    />
                    <InputField
                    required={true}
                    type="text"
                    name="vat"
                    min="2"
                    label="DPH"
                    prompt="Zadejte dph"
                    value={invoice.vat}
                    handleChange={(e) => {
                        setInvoice({...invoice, vat: e.target.value});
                    }}
                    />
                     <InputField
                    required={true}
                    type="text"
                    name="note"
                    min="3"
                    label="Poznámka"
                    prompt="Zadejte poznámku"
                    value={invoice.note}
                    handleChange={(e) => {
                        setInvoice({...invoice, note: e.target.value});
                    }}
                    />
                    <br/>

                    <input type="submit" className="btn btn-primary" value="Uložit"/>
                 </form>
            </div>
             );
            };
            export default InvoicesForm;