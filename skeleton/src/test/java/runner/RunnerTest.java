package runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import support.BaseSteps;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/features", 
		plugin = {"json:target/reports/CucumberReport.json",
                "pretty",
                "html:target/cucumber-reports"}, 
		glue = "steps", 
		tags = {"@testeWeb"}, 
		monochrome = true, 
		dryRun = false, 
		strict = true)
public class RunnerTest extends BaseSteps {
	
	@AfterClass
	public static void tearDown() {
		driver.quit();
	}
	
}
