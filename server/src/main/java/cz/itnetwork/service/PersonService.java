package cz.itnetwork.service;

import cz.itnetwork.dto.PersonDTO;

import java.util.List;

public interface PersonService {

    /**
     * Creates a new person
     *
     * @param personDTO Person to create
     * @return newly created person
     */
    PersonDTO addPerson(PersonDTO personDTO);

    /**
     * <p>Sets hidden flag to true for the person with the matching [id]</p>
     * <p>In case a person with the passed [id] isn't found, the method <b>silently fails</b></p>
     *
     * @param id Person to delete
     */
    void removePerson(long id);

    /**
     * Fetches all non-hidden people
     *
     * @return List of all non-hidden people
     */
    List<PersonDTO> getAllPerson();
    /**
     * Attempts to fetch a peron with the given id.
     *
     * @return List of all non-hidden people
     */

    PersonDTO getDetail(long id);

    PersonDTO editPerson(long id, PersonDTO personDTO);



}
