package cz.itnetwork.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InvoicesStatisticDTO {
    //@JsonIgnore
    //private long id;


    private BigDecimal currentYearSum;
    private BigDecimal allTimeSum;
    private Long invoicesCount;
}
