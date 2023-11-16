package cz.itnetwork.service;

import cz.itnetwork.dto.InvoicesStatisticDTO;
import cz.itnetwork.dto.mapper.InvoicesStatisticMapper;
import cz.itnetwork.entity.InvoicesStatisticEntity;
import cz.itnetwork.entity.repository.InvoiceRepository;
import cz.itnetwork.entity.repository.InvoicesStatisticRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;

@Service
public class InvoicesStatisticServiceImpl implements InvoicesStatisticService {
    private final InvoicesStatisticRepository invoicesStatisticRepository;
    private final InvoiceRepository invoiceRepository;
    private final InvoicesStatisticMapper invoicesStatisticMapper;

    public InvoicesStatisticServiceImpl(InvoicesStatisticRepository invoicesStatisticRepository, InvoiceRepository invoiceRepository, InvoicesStatisticMapper invoicesStatisticMapper) {
        this.invoicesStatisticRepository = invoicesStatisticRepository;
        this.invoiceRepository = invoiceRepository;
        this.invoicesStatisticMapper = invoicesStatisticMapper;
    }

    /* metoda pro statistiky:
        - výpis celkových počet faktur,
        - výpis celkové ceny faktur za jeden rok,
        - výpis celkové ceny faktur;
     */
    @Override
    public InvoicesStatisticDTO getStatistic() {
        LocalDate todayDate = LocalDate.now();
        LocalDate yearAgoDate = todayDate.minusYears(1);

        long totalCount = invoiceRepository.count();
        BigDecimal totalPrice = invoicesStatisticRepository.getSumPrice();
        BigDecimal totalPriceForYear = invoicesStatisticRepository.getSumPriceForYear(yearAgoDate, todayDate);

        InvoicesStatisticEntity entity = new InvoicesStatisticEntity();
        entity.setInvoicesCount(totalCount);
        entity.setAllTimeSum(totalPrice);
        entity.setCurrentYearSum(totalPriceForYear);

        return invoicesStatisticMapper.toDTO(entity);
    }
}
