package cz.itnetwork.controller;

import cz.itnetwork.dto.InvoicesStatisticDTO;
import cz.itnetwork.dto.PersonsStatisticDTO;
import cz.itnetwork.service.InvoicesStatisticService;
import cz.itnetwork.service.PersonsStatisticService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class StatisticController {
    private final InvoicesStatisticService invoicesStatisticService;
    private final PersonsStatisticService personsStatisticService;

    public StatisticController(InvoicesStatisticService invoicesStatisticService, PersonsStatisticService personsStatisticService) {
        this.invoicesStatisticService = invoicesStatisticService;
        this.personsStatisticService = personsStatisticService;
    }

    @GetMapping("/invoices/statistics")
    public InvoicesStatisticDTO getStatistic()
    {
        return invoicesStatisticService.getStatistic();
    }

    @GetMapping("/people/statistics")
    public List<PersonsStatisticDTO> getPersonStatistic()
    {
        return personsStatisticService.getPersonStatistic();
    }
}
