package cz.itnetwork.entity;

import jakarta.persistence.metamodel.SingularAttribute;
import jakarta.persistence.metamodel.StaticMetamodel;
import java.math.BigDecimal;
import javax.annotation.processing.Generated;

@Generated(value = "org.hibernate.jpamodelgen.JPAMetaModelEntityProcessor")
@StaticMetamodel(PersonsStatisticEntity.class)
public abstract class PersonsStatisticEntity_ {

	public static volatile SingularAttribute<PersonsStatisticEntity, String> personName;
	public static volatile SingularAttribute<PersonsStatisticEntity, BigDecimal> revenue;
	public static volatile SingularAttribute<PersonsStatisticEntity, Long> personId;
	public static volatile SingularAttribute<PersonsStatisticEntity, Long> id;

	public static final String PERSON_NAME = "personName";
	public static final String REVENUE = "revenue";
	public static final String PERSON_ID = "personId";
	public static final String ID = "id";

}

