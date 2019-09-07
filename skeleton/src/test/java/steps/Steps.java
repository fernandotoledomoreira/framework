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
@Quando("^inserir email com \"([^\"]*)\"$")
public void inserir_email_com(String arg1) throws Throwable {
    tela.preencherCampoEmail(arg1);
}
@Quando("^inserir senha com \"([^\"]*)\"$")
public void inserir_senha_com(String arg1) throws Throwable {
	tela.preencherCampoSenha(arg1);
	tela.clicarBotaoEntrar();
}
@Entao("^sistema apresenta \"([^\"]*)\"$")
public void sistema_apresenta(String arg1) throws Throwable {
    tela.mensagemBemVindo();
}
}
