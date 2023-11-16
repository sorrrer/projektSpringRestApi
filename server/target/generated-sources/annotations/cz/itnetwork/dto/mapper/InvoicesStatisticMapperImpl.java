package cz.itnetwork.dto.mapper;

import cz.itnetwork.dto.InvoicesStatisticDTO;
import cz.itnetwork.entity.InvoicesStatisticEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 20.0.2 (Oracle Corporation)"
)
@Component
public class InvoicesStatisticMapperImpl implements InvoicesStatisticMapper {

    @Override
    public InvoicesStatisticDTO toDTO(InvoicesStatisticEntity source) {
        if ( source == null ) {
            return null;
        }

        InvoicesStatisticDTO invoicesStatisticDTO = new InvoicesStatisticDTO();

        invoicesStatisticDTO.setCurrentYearSum( source.getCurrentYearSum() );
        invoicesStatisticDTO.setAllTimeSum( source.getAllTimeSum() );
        invoicesStatisticDTO.setInvoicesCount( source.getInvoicesCount() );

        return invoicesStatisticDTO;
    }
}
