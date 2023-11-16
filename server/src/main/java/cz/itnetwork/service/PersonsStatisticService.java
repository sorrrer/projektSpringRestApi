package cz.itnetwork.service;

import cz.itnetwork.dto.PersonsStatisticDTO;

import java.util.List;

public interface PersonsStatisticService {
    /**
     * statistic about people
     * @return list of names and sum(price)
     */
    List<PersonsStatisticDTO> getPersonStatistic();

}
