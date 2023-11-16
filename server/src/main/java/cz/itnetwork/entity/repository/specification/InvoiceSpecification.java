package cz.itnetwork.entity.repository.specification;

import cz.itnetwork.entity.InvoiceEntity;
import cz.itnetwork.entity.InvoiceEntity_;
import cz.itnetwork.entity.PersonEntity;
import cz.itnetwork.entity.PersonEntity_;
import cz.itnetwork.entity.filter.InvoiceFilter;
import jakarta.persistence.criteria.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
public class InvoiceSpecification implements Specification<InvoiceEntity> {
    private final InvoiceFilter filter;

    @Override
    public Predicate toPredicate(Root<InvoiceEntity> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
        List<Predicate> predicates = new ArrayList<>();
        /* filtrování podle minimální ceny */
        if (filter.getMinPrice() !=null)
        {
            predicates.add(criteriaBuilder.greaterThan(root.get(InvoiceEntity_.PRICE),filter.getMinPrice()));
        }
        /*filtrování podle maximální ceny */
        if (filter.getMaxPrice() !=null)
        {
            predicates.add(criteriaBuilder.lessThanOrEqualTo(root.get(InvoiceEntity_.PRICE),filter.getMaxPrice()));
        }
        /* filtrování podle buyerID */
        if (filter.getBuyerID() !=null)
        {
            Join<PersonEntity,InvoiceEntity>buyerJoin= root.join(InvoiceEntity_.BUYER);
                predicates.add(buyerJoin.get(PersonEntity_.ID).in(filter.getBuyerID()));
        }
        /* filtroání podle sellerID */
        if (filter.getSellerID() !=null)
        {
            Join<PersonEntity,InvoiceEntity>sellerJoin= root.join(InvoiceEntity_.SELLER);
            predicates.add(sellerJoin.get(PersonEntity_.ID).in(filter.getSellerID()));
        }
        /* filtrování podle produktu */
        if (filter.getProduct() !=null)
        {
            predicates.add(criteriaBuilder.equal(root.get(InvoiceEntity_.PRODUCT),filter.getProduct()));
        }


        return criteriaBuilder.and(predicates.toArray(new Predicate[0]));
    }
}
