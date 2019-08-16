package pages;

import support.DriverQA;

public class Screen extends DriverQA {

	private DriverQA driver;

	public Screen(DriverQA stepDriver) {
		driver = stepDriver;
	}

	/**
	 * ---------------------------------mapeamento-----------------------
	 */

	public void AbrirPagina(String Url) {
		driver.openURL(Url);
	}

	public void campoEmail(String msg) {
		driver.findElem("email", "id").sendKeys(msg);
	}

}
