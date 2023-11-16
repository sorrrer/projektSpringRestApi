package cz.itnetwork.dto.mapper;

import cz.itnetwork.dto.InvoicesStatisticDTO;
import cz.itnetwork.entity.InvoicesStatisticEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface InvoicesStatisticMapper {
    InvoicesStatisticDTO toDTO(InvoicesStatisticEntity source);
}
