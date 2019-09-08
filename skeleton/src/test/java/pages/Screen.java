package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import support.DriverQA;

public class Screen extends DriverQA {

	private DriverQA driver;

	public Screen(DriverQA stepDriver) {
		driver = stepDriver;
	}

	/**
	 * ---------------------------------mapeamento-----------------------
	 */

	@FindBy(id = "email")
	private WebElement campoEmail;

	@FindBy(id = "senha")
	private WebElement campoSenha;

	@FindBy(xpath = "//form[@action='/logar']//button[@type='submit']")
	private WebElement botaoEntrar;

	/**
	 * ---------------------------------metodos---------------------------
	 */

	public void AbrirPagina(String Url) {
		driver.openURL(Url);
	}

	public void preencherCampoEmail(String email) {
		campoEmail.sendKeys(email);
	}

	public void preencherCampoSenha(String senha) {
		campoSenha.sendKeys(senha);
	}

	public void clicarBotaoEntrar() {
		botaoEntrar.click();
	}

	public void mensagemBemVindo() throws Exception {
		try {
			driver.findElem("//div[@role='alert']", "xpath");
		} catch (Exception e) {
			throw new Exception();
		}

	}

}
