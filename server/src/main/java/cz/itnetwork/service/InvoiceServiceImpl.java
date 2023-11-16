package cz.itnetwork.service;

import cz.itnetwork.dto.InvoiceDTO;
import cz.itnetwork.dto.mapper.InvoiceMapper;
import cz.itnetwork.entity.InvoiceEntity;
import cz.itnetwork.entity.filter.InvoiceFilter;
import cz.itnetwork.entity.repository.InvoiceRepository;
import cz.itnetwork.entity.repository.PersonRepository;
import cz.itnetwork.entity.repository.specification.InvoiceSpecification;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.webjars.NotFoundException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class InvoiceServiceImpl implements InvoiceService{

    private final InvoiceRepository invoiceRepository;
    private final PersonRepository personRepository;
    private final InvoiceMapper invoiceMapper;

    public InvoiceServiceImpl(InvoiceRepository invoiceRepository, PersonRepository personRepository, InvoiceMapper invoiceMapper) {
        this.invoiceRepository = invoiceRepository;
        this.personRepository = personRepository;
        this.invoiceMapper = invoiceMapper;
    }

    /* Přidání faktury */
    @Override
    public InvoiceDTO addInvoice(InvoiceDTO invoiceDTO) {
        final InvoiceEntity invoice = invoiceMapper.toEntity(invoiceDTO);
        invoice.setBuyer(personRepository.getReferenceById(invoiceDTO.getBuyer().getId()));
        invoice.setSeller(personRepository.getReferenceById(invoiceDTO.getSeller().getId()));
        final InvoiceEntity savedEntity = invoiceRepository.save(invoice);

        return invoiceMapper.toDTO(savedEntity);
    }
    /* Výpis všech faktur,
        filtrování,
        limit;
    */
    @Override
    public List<InvoiceDTO> getAllInvoices(InvoiceFilter invoiceFilter) {
        InvoiceSpecification invoiceSpecification = new InvoiceSpecification(invoiceFilter);

        return invoiceMapper.toDTO(invoiceRepository.findAll(invoiceSpecification,PageRequest.of(0,invoiceFilter.getLimit())).toList());
    }
    /* detail faktury */
    @Override
    public InvoiceDTO getDetailInvoice(long id) {
        InvoiceEntity entity = fetchInvoiceById(id);
        return invoiceMapper.toDTO(entity);
    }
    /* úprava faktuy */
    @Override
    public InvoiceDTO editInvoice(long id, InvoiceDTO invoiceDTO) {
        invoiceDTO.setId(id);
        InvoiceEntity entity = invoiceRepository.getReferenceById(id);
        invoiceMapper.updateInvoiceEntity(invoiceDTO,entity);

        entity.setBuyer(personRepository.getReferenceById(invoiceDTO.getBuyer().getId()));
        entity.setSeller(personRepository.getReferenceById(invoiceDTO.getSeller().getId()));
        entity = invoiceRepository.save(entity);
        return invoiceMapper.toDTO(entity);
    }
    /* Odstranění faktury */
    @Override
    public void removeInvoice(long id) {
        InvoiceEntity entity = fetchInvoiceById(id);
        InvoiceDTO dto = invoiceMapper.toDTO(entity);
        invoiceRepository.delete(entity);
    }
    /* výpis všech faktur podle ič prodávajícího */
    @Override
    public List<InvoiceDTO> getAllBySeller(String identificationNumber) {
        List<InvoiceEntity>entities =invoiceRepository.findAllBySellerIdentificationNumber(identificationNumber);
        return invoiceMapper.toDTO(entities);
    }
    /* Výpis všech faktur podle ič nakupujícího */
    @Override
    public List<InvoiceDTO> getAllByBuyer(String identificationNumber) {
        List<InvoiceEntity>entities = invoiceRepository.findAllByBuyerIdentificationNumber(identificationNumber);
        return invoiceMapper.toDTO(entities);
    }

    // region: Private methods
    /**
     * <p>Attempts to fetch a person.</p>
     * <p>In case a invoice with the passed [id] doesn't exist a [{@link org.webjars.NotFoundException}] is thrown.</p>
     *
     * @param id Invoice to fetch
     * @return Fetched entity
     * @throws org.webjars.NotFoundException In case a invoice with the passed [id] isn't found
     */
    private InvoiceEntity fetchInvoiceById(long id) {
        return invoiceRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Invoice with id " + id + " wasn't found in the database."));
    }
    // endregion

}
