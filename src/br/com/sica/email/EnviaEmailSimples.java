package br.com.sica.email;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import org.directwebremoting.WebContext;
import org.directwebremoting.WebContextFactory;
import org.springframework.mail.MailException;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;




import br.com.sica.budget.Servico;
import br.com.sica.dwr.*;
public class EnviaEmailSimples {
	private MailSender mailSender;
	private SimpleMailMessage defaultMessage;

	public void setMailSender(MailSender mailSender) {
		this.mailSender = mailSender;
	}
	
	public void setDefaultMessage(SimpleMailMessage defaultMessage) {
		this.defaultMessage = defaultMessage;
	}
	
	
	public void enviar( Servico servico) throws Exception, Throwable {
		
		WebContext wc = WebContextFactory.get();    
		Map emp = new HashMap();
		    //Session sessionEmpresa =new SessionFacade();
		     Session session =new SessionFacade();
		    try{
		    	String user="";
		    	//String senha="";
		    	user =wc.getHttpServletRequest().getSession().getAttribute("nome_usuario").toString();
		    	//senha= session.getAttribute("senha").toString();
		    	//System.out.println("passou");
		    	emp=(Map)session.getAttribute("sessionmapEmp");
		    	int cont =emp.size();
		    	String empresa=null;
		    	Set<String> chaves = emp.keySet();  
		    	for (Iterator<String> iterator = chaves.iterator(); iterator.hasNext();){String chave = iterator.next();if(chave.equalsIgnoreCase(""+servico.getFk_id_empresa())){empresa= ""+emp.get(chave);}}
		    	//emp=(Map)DAOEmpresa.selectEmpresaMap();					
			    //  maps=(Map)session.getAttribute("EmpresaMap");
			    SimpleMailMessage message = new SimpleMailMessage(this.defaultMessage);

				message.setFrom("orcamento.central@gmail.com");
				message.setReplyTo("mauricio.sales@bol.com.br");
				message.setText("Usuario: "+user+" \nOrçamento Num: "+servico.getNum_solicitacao()+"\n Referente: "+servico.getTitulo()+"\nSolicitante: "+servico.getSolicitante()+"\nEmpresa: "+empresa);
				message.setSubject("Sica- Orç Num: "+servico.getNum_solicitacao()+" Referente: "+servico.getTitulo());
	            mailSender.send(message);
	        }
	        catch(MailException ex) {
	            ex.printStackTrace();          
	        }

	}

	
	

}

