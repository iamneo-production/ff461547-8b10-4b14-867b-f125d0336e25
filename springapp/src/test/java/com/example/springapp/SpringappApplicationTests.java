package com.example.springapp;

<<<<<<< HEAD
import static org.junit.Assert.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import java.io.File;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@RunWith(SpringJUnit4ClassRunner.class) 
@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
class SpringappApplicationTests {

	 @Autowired
	    private MockMvc mockMvc;
     
     @Test
     public void testGetHotelAll() throws Exception {
     	
         mockMvc.perform(get("/hotels/search"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }
     
     @Test
     public void testGetRentalCarAll() throws Exception {
     	
         mockMvc.perform(get("/rental-cars/search"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }
     
    
     @Test
     public void testGetFlightsAll() throws Exception {
     	
         mockMvc.perform(get("/flights/search"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }
     
     @Test
     public void testGetUserAll() throws Exception {
     	
         mockMvc.perform(get("/api/users"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }
     
     
     @Test
     public void testGetUserById() throws Exception {
     	
         mockMvc.perform(get("/api/users").param("id", "1"))
         .andExpect(MockMvcResultMatchers.status().isOk())
         .andDo(print())
         .andExpect(content().contentType("application/json"))
 			.andExpect(jsonPath("$").isArray())
 			.andReturn();
     }
     
     @Test
     public void test_case1() {
     String directoryPath = "src/main/java/com/example/springapp/controller";
      File directory = new File(directoryPath);
      assertTrue(directory.exists() && directory.isDirectory());;
      }
     
     @Test
     public void test_case2() {
     String filePath = "src/main/java/com/example/springapp/controller/HotelController.java";
      File file = new File(filePath);
      assertTrue(file.exists() && file.isFile());;
      }
     
     @Test
     public void test_case3() {
     String directoryPath = "src/main/java/com/example/springapp/model";
      File directory = new File(directoryPath);
      assertTrue(directory.exists() && directory.isDirectory());;
      }
=======
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SpringappApplicationTests {

	@Test
	void contextLoads() {
	}

>>>>>>> c3be8b4b4f31a3a5f24b5d03552621729748d86c
}
