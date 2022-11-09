package com.webDataProject.webData;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/api")
public class PricesController {
	@Autowired
    private PriceRepository priceRepository;
	
	@GetMapping("/index")
	public String greeting() {
		return "index";
	}
	@GetMapping("/stocks/all")
  	public @ResponseBody Iterable<Price> getAllPrices() {
	  // This returns a JSON or XML with the users
	  return priceRepository.findAll();
    }
	
	@GetMapping("/stocks/{ticker}")
	public @ResponseBody List<Price> getPricesByTicker(@PathVariable String ticker) {
	     return priceRepository.findByTicker(ticker);
	}
	@GetMapping("/stocks/date/{day}")
	public @ResponseBody List<Price> getPricesByDay(@PathVariable String day) {
	    return priceRepository.findByDate(day);
	}
	@GetMapping("/stocks/{ticker}/{day}")
	public @ResponseBody List<Price> getPricesByDay(@PathVariable String day, @PathVariable String ticker) {
	    return priceRepository.findByDateAndTicker(day, ticker);
	}
	@GetMapping("/stocks/{ticker}/{startDate}/{endDate}")
	// Mapping wants dates in yyyy-mm-dd format
	public @ResponseBody List<Price> getTickerSpecificPrices(@PathVariable String ticker, @PathVariable String startDate, @PathVariable String endDate){
		return priceRepository.getAllBetweenDatesAndTicker(ticker, startDate, endDate);
	}
}