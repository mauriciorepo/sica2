package br.com.sica.email;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import br.com.sica.budget.Servico;
import br.com.sica.budget.SolicitacaoServicoDAO;


public class ObserverServico implements SolicitacaoServicoListener{

	public void observerServico(SolicitacaoServicoDAO servicoDAO){
		//servicoDAO.setSolicitacaoServicoListener(this);
	}
	public void cadastrouServico(Servico servico) {
		
		ApplicationContext appCtx = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");

		EnviaEmailHtml enviaEmailHtml = (EnviaEmailHtml) appCtx.getBean("htmlMail");
		try {
			enviaEmailHtml.enviar(servico);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Throwable e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		//System.out.println("Enviou emeail para"+ servico.getSolicitante());
		//chama classe para enviar emeail
		
	}

	
}

