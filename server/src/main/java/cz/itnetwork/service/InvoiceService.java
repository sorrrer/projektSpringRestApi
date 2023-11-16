package cz.itnetwork.service;

import cz.itnetwork.dto.InvoiceDTO;
import cz.itnetwork.entity.filter.InvoiceFilter;

import java.util.List;

public interface InvoiceService {
    /**
     * Create new invoice
     * @param invoiceDTO invoice to create
     * @return new create invoice
     */
    InvoiceDTO addInvoice(InvoiceDTO invoiceDTO);

    /**
     * get all invoices
     * @param invoiceFilter filter for invoices
     * @return list invoices
     */
    List<InvoiceDTO>getAllInvoices(InvoiceFilter invoiceFilter);

    /**
     * get detail invoice
     * @param id get detail by id invoice
     * @return detail invoice by id
     */
    InvoiceDTO getDetailInvoice(long id);

    /**
     * edit invoice
     * @param id edit invoice by id
     * @param invoiceDTO edit invoice
     * @return edit invoice
     */
    InvoiceDTO editInvoice(long id,InvoiceDTO invoiceDTO);

    /**
     * delete invoice
     * @param id delete invoice by id
     * @return delete invoice
     */
    void removeInvoice(long id);

    /**
     * get invoices by seller
     * @param identificationNumber find invoices by identification number
     * @return list of invoices
     */
    List<InvoiceDTO>getAllBySeller(String identificationNumber);

    /**
     * get invoices by buyer
     * @param identificationNumber find invoices by identificationNumber
     * @return list of invoices
     */
    List<InvoiceDTO>getAllByBuyer(String identificationNumber);






}
