package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;
import cucumber.api.java.pt.Quando;
import pages.Screen;
import support.BaseSteps;

public class Steps extends BaseSteps {

	Screen tela = new Screen(driver);

	Hooks gravando = new Hooks();

	// ------------ Test Cases ------------ //

	@Dado("^que esteja no site seu barriga \"([^\"]*)\"$")
	public void que_esteja_no_site_seu_barriga(String arg1) throws Throwable {
		tela.AbrirPagina(arg1);
	}

	@Quando("^inserir \"([^\"]*)\"$")
	public void inserir_palavra(String arg1) throws Throwable {
		tela.campoEmail(arg1);
	}

	@Entao("palavra inserida com sucesso")
	public void palavra_inserida_com_sucesso() throws Throwable {

	}
}
