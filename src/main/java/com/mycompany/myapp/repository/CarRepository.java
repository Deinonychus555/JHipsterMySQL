package com.mycompany.myapp.repository;

import com.mycompany.myapp.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Car entity.
 */
public interface CarRepository extends JpaRepository<Car,Long>{

}
