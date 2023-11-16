package cz.itnetwork.entity.repository;

import cz.itnetwork.entity.InvoiceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface InvoiceRepository extends JpaSpecificationExecutor<InvoiceEntity>, JpaRepository<InvoiceEntity, Long> {
    List<InvoiceEntity> findAllBySellerIdentificationNumber(String seller_identificationNumber);

    List<InvoiceEntity> findAllByBuyerIdentificationNumber(String buyer_identificationNumber);

}
