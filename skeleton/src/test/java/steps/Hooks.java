package steps;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import atu.testrecorder.ATUTestRecorder;
import atu.testrecorder.exceptions.ATUTestRecorderException;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import support.BaseSteps;

public class Hooks extends BaseSteps {

	static ATUTestRecorder grava;

	@Before
	public static void setUp(Scenario scenario) throws ATUTestRecorderException {
		System.out.println("--- Starting scenario " + scenario.getName() + " execution ---");
		DateFormat dateFormat = new SimpleDateFormat("yy-MM-dd HH-mm-ss");
		Date date = new Date();
		grava = new ATUTestRecorder("target\\Evidence\\Video\\", scenario.getId() + dateFormat.format(date),
				false);

	}
	

	@After
	public static void tearDown(Scenario scenario) throws ATUTestRecorderException {
		System.out.println("\n--- Scenario " + scenario.getName() + " executed ---");
		grava.stop();
		//driver.quit();
	}
	
	
	
}
