package support;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.github.bonigarcia.wdm.ChromeDriverManager;
import io.github.bonigarcia.wdm.FirefoxDriverManager;

public class DriverQA {

	private static WebDriver driver;
	private static final long DEFAULT_WAIT_TIMEOUT = 20;
	private static final long IMPLICITLY_WAIT_TIMEOUT = 10;

	public void start(String parBrowser) {
		String title;
		System.setProperty("webdriver.firefox.bin", "");
		try {
			title = driver.getTitle();
		} catch (Exception e) {
			title = "ERROR";
		}
		if (title.equals("ERROR")) {
			switch (parBrowser) {
			case "firefox":
				FirefoxDriverManager.getInstance().setup();
				FirefoxOptions options = new FirefoxOptions();
				options.addPreference(FirefoxDriver.MARIONETTE, true);
				driver = new FirefoxDriver(options);
				driver.manage().window().maximize();
				break;
			case "chrome":
				 System.setProperty("webdriver.chrome.driver", "/Users/fernandotoledo/Downloads/chromedriver");
				 driver = new ChromeDriver();
				 driver.manage().window().maximize();
				break;
			case "ie":
				System.setProperty("webdriver.ie.driver", "IEDriverServer.exe");
				driver = new InternetExplorerDriver();
				driver.manage().window().maximize();
			default:
				break;
			}
		}
		driver.manage().timeouts().implicitlyWait(IMPLICITLY_WAIT_TIMEOUT, TimeUnit.SECONDS);
	}

	private String getAttributeType(String... parType) {
		String type;
		if (parType.length == 0) {
			type = "id";
		} else {
			type = parType[0];
		}
		return type;
	}

	private By getLocatorBy(String parValue, String... parType) {
		final String selector = getAttributeType(parType);
		switch (selector) {
		case "id":
			return By.id(parValue);
		case "name":
			return By.name(parValue);
		case "css":
			return By.cssSelector(parValue);
		case "xpath":
			return By.xpath(parValue);
		case "link":
			return By.linkText(parValue);
		case "class":
			return By.className(parValue);	
		default:
			return By.id(parValue);
		}
	}

	public WebElement findElem(String parValue, String... parType) {
		final By locator = getLocatorBy(parValue, parType);
		WebElement element;
		try {
			element = driver.findElement(locator);
		} catch (NoSuchElementException e) {
			element = null;
		}
		return element;
	}

	private List<WebElement> findElems(String parValue, String... parType) {
		List<WebElement> elements;
		final By locator = getLocatorBy(parValue, parType);
		try {
			elements = driver.findElements(locator);
		} catch (NoSuchElementException e) {
			e.printStackTrace();
			elements = Collections.emptyList();
		}
		return elements;
	}

	public void click(String parValue, String... parType) {
		final WebElement element = findElem(parValue, parType);
		element.click();
	}

	public void teclaEnter(String parValue, String... parType) {
		final WebElement element = findElem(parValue, parType);
		element.sendKeys(Keys.ENTER);
	}
	
	public void submit(String parValue, String... parType) {
        final WebElement element = findElem(parValue, parType);
        element.submit(); 
	}

	public void openURL(String parUrl) {
		driver.get(parUrl);
	}

	public void quit() {
		driver.quit();
	}

	public void close() {
		driver.close();
	}

	public void sendKeys(String parText, String parValue, String... parType) {
		final WebElement element = findElem(parValue, parType);
		element.click();
		element.clear();
		element.sendKeys(parText);
	}

	public String getText(String parValue, String... parType) {
		final WebElement element = findElem(parValue, parType);
		return element.getText();
	}

	public List<String> getTexts(String parValue, String... parType) {
		final List<WebElement> elements = findElems(parValue, parType);
		final List<String> texts = new ArrayList<>();
		for (WebElement element : elements) {
			texts.add(element.getText().replace("\n", ""));
		}
		return texts;
	}

	public void selectByIndex(Integer parIndex, String parName, String... parType) {
		final WebElement element = findElem(parName, parType);
		final Select dropdown = new Select(element);
		dropdown.selectByIndex(parIndex);
	}

	public void selectByText(String parText, String parName, String... parType) {
		final WebElement element = findElem(parName, parType);
		final Select dropdown = new Select(element);
		dropdown.selectByVisibleText(parText);
	}

	public String getCurrentUrl() {
		return driver.getCurrentUrl();
	}

	public void waitElement(String parName, String... parType) {
		final WebDriverWait wait = new WebDriverWait(driver, DEFAULT_WAIT_TIMEOUT);
		final By locator = getLocatorBy(parName, parType);
		try {
			wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
		} catch (NoSuchElementException e) {
			System.out.println("ERROR WAIT => " + e.toString());
		} catch (TimeoutException e) {
			System.err.println("Timeout reached while waiting for element =>" + e.toString());
		}
	}

	public void waitInvisibilityOfElement(String parName, String... parType) {
		final WebDriverWait wait = new WebDriverWait(driver, DEFAULT_WAIT_TIMEOUT);
		final By locator = getLocatorBy(parName, parType);

		/*
		 * Temporarily removing the implicitly wait timeout, because in here the element
		 * is for sure on screen, making it wait unnecessarily if the element is gone
		 * before the timeout
		 */
		driver.manage().timeouts().implicitlyWait(0, TimeUnit.SECONDS);
		try {
			wait.until(ExpectedConditions.invisibilityOfElementLocated(locator));
		} catch (NoSuchElementException e) {
			System.err.println("ERROR WAIT =>" + e.toString());
		} catch (TimeoutException e) {
			System.err.println("Timeout reached and element is still visible =>" + e.toString());
		}
		// Resetting implicitly wait to the default
		driver.manage().timeouts().implicitlyWait(IMPLICITLY_WAIT_TIMEOUT, TimeUnit.SECONDS);
	}

	public void waitElementToBeClickable(String parName, String... parType) {
		final WebDriverWait wait = new WebDriverWait(driver, DEFAULT_WAIT_TIMEOUT);
		final By locator = getLocatorBy(parName, parType);
		try {
			wait.until(ExpectedConditions.elementToBeClickable(locator));
		} catch (NoSuchElementException e) {
			System.err.println("ERROR WAIT => " + e.toString());
		} catch (TimeoutException e) {
			System.err.println("Element is not clickable => " + e.toString());
		}
	}

	public void switchTo(String... parValue) {
		if (parValue.length == 0) {
			driver.switchTo().defaultContent();
		} else {
			driver.switchTo().window(String.valueOf(parValue));
		}
	}

	public void ChooseOkOnNextConfirmation() {
		final Alert alert = driver.switchTo().alert();
		alert.accept();
	}

	public void ChooseCancelOnNextConfirmation() {
		final Alert alert = driver.switchTo().alert();
		alert.dismiss();
	}

	public String getAttribute(String identifier, String attribute, String... type) {
		final WebElement element = findElem(identifier, type);
		return element.getAttribute(attribute);
	}

	public boolean isDisplayed(String identifier, String... type) {
		try {
			final WebElement element = findElem(identifier, type);
			return element.isDisplayed();
		} catch (NullPointerException e) {
			return false;
		}
	}

	public void doubleClick(String parValue, String... parType) {
		final WebElement element = findElem(parValue, parType);
		((JavascriptExecutor) driver).executeScript("arguments[0].dispatchEvent(new Event('dblclick',{bubbles:true}));",
				element);
	}

	public TakesScreenshot getCamera() {
		return (TakesScreenshot) driver;
	}

	public List<WebElement> getElements(String parValue, String... parType) {
		return findElems(parValue, parType);
	}

	public void captureScreen(String nome) {

		TakesScreenshot screenshot = (TakesScreenshot) driver;
		// calling getScreenshotAs method with output parameter as File
		File file = screenshot.getScreenshotAs(OutputType.FILE);
		// creating a destination file
		File destination = new File(System.getProperty("user.dir")+"target\\Evidence\\CaptureScreen\\" + nome + ".jpg");
		try {
			// copying captured snapshot in destination file
			FileUtils.copyFile(file, destination);
		} catch (IOException e) {
			e.printStackTrace();

		}
	}

}
