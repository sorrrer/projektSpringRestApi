package cz.itnetwork.entity.repository;

import cz.itnetwork.dto.PersonsStatisticDTO;
import cz.itnetwork.entity.PersonsStatisticEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PersonsStatisticRepository extends JpaRepository<PersonsStatisticEntity,Long> {

@Query(value = """
        SELECT NEW cz.itnetwork.dto.PersonsStatisticDTO(i.id, i.name,SUM(j.price))
        FROM person AS i
        JOIN i.sales AS j
        GROUP BY i.id
        """)
 List<PersonsStatisticDTO>getPersonStatistic();



}
