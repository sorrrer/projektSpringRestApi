package cz.itnetwork.service;

import cz.itnetwork.dto.InvoicesStatisticDTO;

import java.time.LocalDate;

public interface InvoicesStatisticService {
    /** statistic about invoices
     *  total price
     *  total price for year
     *  count of invoices
     * @return statistics about total price, price for year, count of invoices
     */
    InvoicesStatisticDTO getStatistic();
}
