package cz.itnetwork.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;

@Entity(name = "invoiceStatistic")
@Getter
@Setter
public class InvoicesStatisticEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    private long id;
    @Column
    private BigDecimal currentYearSum;
    @Column
    private BigDecimal allTimeSum;
    @Column
    private long invoicesCount;
}
