package com.example.car.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.car.model.CarModel;
import com.example.car.repository.CarRepository;
import com.example.car.service.CarService;

import io.swagger.v3.oas.annotations.tags.Tag;
@CrossOrigin("*")
@RestController
public class CarController {
      @Autowired
      CarRepository cr;
      @Autowired
      CarService cs;
      @Tag(name="GET CARS",description="View all cars")
      @GetMapping("/car")
      public List<CarModel> getAllDetails(){
    	  return cr.findAll();
      }
      @Tag(name="GET CARS BY ID",description="View specific car based on id")
      @GetMapping("/car/{id}")
  	public CarModel getDetailsById(@PathVariable int id)
  	{
  		return cr.findById(id).orElse(null);
  	}
      @Tag(name="POST CARS",description="add new cars")
  	@PostMapping("/save")
  	public String saveall(@RequestBody CarModel id)
  	{
  		cr.save(id);
  		return "Id Details Saved";
  	}
      @Tag(name="DELETE CARS",description="Remove cars based on id")
  	@DeleteMapping("/crud/{id}")
	public String deleteById(@PathVariable int id)
	{
		cr.deleteById(id);
		return "Id details deleted";
	}
      @Tag(name="UPDATE CARS",description="Edit car details")
	@PutMapping("/put")
	public CarModel putDetailsById(@RequestBody CarModel s)
	{
		return cr.save(s);
	}
      @Tag(name="UPDATE",description="Edit car details based on id")
	@PutMapping("/car/{id}")
	 public ResponseEntity<CarModel> updateCar(@PathVariable("id") int id, @RequestBody CarModel car){
	   CarModel b = cr.findById(id).get();
	      if(b.getId()!=0) {
	        b.setId(car.getId());
	        b.setCost(car.getCost());
	        b.setEngine(car.getEngine());
	        b.setFuel(car.getFuel());
	        b.setModelname(car.getModelname());
	        b.setHorsepower(car.getHorsepower());
	        b.setMileage(car.getMileage());
	      }
	  return new ResponseEntity<CarModel>(cr.save(b),HttpStatus.OK);
	}
      @Tag(name="SORTING",description="Assending order")
	@GetMapping("/sort/{field}")
	public List<CarModel> sortCars(@PathVariable String field)
	{
		return cs.sortCars(field);
	}
      @Tag(name="SORTING",description="Decending order")
    @GetMapping("/dsort/{field}")
    public List<CarModel> sortCarsDesc(@PathVariable String field)
    {
    	return cs.sortCarsDesc(field);
    }
      @Tag(name="SORTING",description="Based on Two fields in Desending order")
    @GetMapping("/dsort/{field1}/{field2}")
    public List<CarModel> sortCarsDesc(@PathVariable String field1,@PathVariable String field2)
    {
    	return cs.sortCarsDesc2(field1,field2);
    }
      @Tag(name="PAGINATION",description="View in page format")
    @GetMapping("/page/{offset}/{pagesize}")
    public List<CarModel> paginationCar(@PathVariable int offset,@PathVariable int pagesize)
    {
    	return cs.pageCar(offset,pagesize);
    }
      @Tag(name="PAGINATION AND SORTING",description="Views Pagination with Sorting")
    @GetMapping("/page/{offset}/{pagesize}/{field}")
    public List<CarModel> pagingsort(@PathVariable int offset,@PathVariable int pagesize,@PathVariable String field)
    {
    	return cs.pageSort(offset,pagesize,field);
    }
      @Tag(name="FETCH MODELNAME PREFIX",description="View cars with starting word")
    @GetMapping("/fetchModelnamePrefix")
    public List<CarModel> fetchModelnamePrefix(@RequestParam String prefix){
		return cs.fetchModelnamePrefix(prefix);
	}
      @Tag(name="FETCH MODELNAME SUFFIX",description="View cars with ending word")
    @GetMapping("/fetchModelnameSuffix")
    public List<CarModel> fetchModelnameSuffix(@RequestParam String suffix){
		return cs.fetchModelnameSuffix(suffix);
	}
      @Tag(name="FETCH MODELNAME ",description="View cars with modelname")
    @GetMapping("/fetchModelname")
    public List<CarModel> fetchModelname(@RequestParam String name){
		return cs.fetchModelname(name);
	}
      @Tag(name="POSITIONAL PARAMETERS(JPQL)",description="Fetch details with respect to modelname and fuel")
    @GetMapping("/query")
    public List<CarModel>fetchqueryCar(@RequestParam String modelname,@RequestParam String fuel )
    {
    	return cs.queryCars(modelname, fuel);
    }
      @Tag(name="NAMED PARAMETERS(JPQL)",description="Fetch details with respect to fuel")
    @GetMapping("/query2")
    public List<CarModel>fetchqueryCarFuel(@RequestParam String fuel )
    {
    	return cs.queryCarsFuel( fuel);
    }
      @Tag(name="DATA MANIPULATION LANGUAGE(DML)",description="delete cars by modelname")
    @DeleteMapping("/deleteCarsByModelname")
    public String deleteCarsByName(@RequestParam String modelname)
    {
    int result=cs.deleteCarsByModelname(modelname)	;
    if(result >0)
    	return "Car record deleted";
    else
    	return "Problem occured while deleting";
    }
      @Tag(name="UPDATE CAR BY MODELNAME",description="update details with respect to modelname ")
    @PutMapping("/updateCarsByModelname")
    public int updateCarsByName(@RequestParam String modelname,@RequestParam int id)
    {
    	return cs.updateCarsByModelname(modelname,id);
    }
    @Tag(name="NATIVE QUERY",description="Fetch details with respect to id")
	@GetMapping("/getallcar/{id}")
	public List<CarModel> getData(@PathVariable("id")int id)
	{
		return cr.getDataId(id);
	}
   
} 
