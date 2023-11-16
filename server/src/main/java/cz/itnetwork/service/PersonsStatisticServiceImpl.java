package cz.itnetwork.service;

import cz.itnetwork.dto.PersonsStatisticDTO;
import cz.itnetwork.entity.repository.PersonsStatisticRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonsStatisticServiceImpl implements PersonsStatisticService {
    private final PersonsStatisticRepository personsStatisticRepository;

    public PersonsStatisticServiceImpl(PersonsStatisticRepository personsStatisticRepository) {
        this.personsStatisticRepository = personsStatisticRepository;
    }

    @Override
    public List<PersonsStatisticDTO> getPersonStatistic() {

        return personsStatisticRepository.getPersonStatistic();
    }
}


