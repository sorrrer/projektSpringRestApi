package cz.itnetwork.entity;

import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.math.BigDecimal;
import javax.annotation.processing.Generated;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(InvoicesStatisticEntity.class)
public abstract class InvoicesStatisticEntity_ {

	public static volatile SingularAttribute<InvoicesStatisticEntity, BigDecimal> allTimeSum;
	public static volatile SingularAttribute<InvoicesStatisticEntity, BigDecimal> currentYearSum;
	public static volatile SingularAttribute<InvoicesStatisticEntity, Long> id;
	public static volatile SingularAttribute<InvoicesStatisticEntity, Long> invoicesCount;

	public static final String ALL_TIME_SUM = "allTimeSum";
	public static final String CURRENT_YEAR_SUM = "currentYearSum";
	public static final String ID = "id";
	public static final String INVOICES_COUNT = "invoicesCount";

}

