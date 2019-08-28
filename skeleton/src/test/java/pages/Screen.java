package pages;

import static org.junit.Assert.assertEquals;


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

	public void campoEmail(String email) {
		driver.findElem("email", "id").sendKeys(email);
	}

	public void campoSenha (String senha) {
		driver.findElem("senha", "id").sendKeys(senha);
	}

	public void botaoEntrar () {
		driver.findElem("//form[@action='/logar']//button[@type='submit']", "xpath").click();
	}

	public void mensagemBemVindo (String texto) {
		String texto2 = driver.findElem("//div[@role='alert']", "xpath").getText();
		assertEquals(texto, texto2);
		;
	}

}
