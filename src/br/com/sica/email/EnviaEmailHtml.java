package br.com.sica.email;

import java.io.File;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Set;

import javax.mail.internet.MimeMessage;

import org.directwebremoting.WebContext;
import org.directwebremoting.WebContextFactory;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;

import br.com.sica.budget.*;
import br.com.sica.dwr.*;

public class EnviaEmailHtml {

	private JavaMailSender mailSender;

	public void setMailSender(JavaMailSender mailSender) {
		this.mailSender = mailSender;
	}
	
	// envia o e-mail no formato HTML
	public  void enviar( final Servico servico) {

		
		
		MimeMessagePreparator preparator = new MimeMessagePreparator() {

			
			public void prepare(MimeMessage mimeMessage) throws Exception {

				MimeMessageHelper helper = new MimeMessageHelper(mimeMessage,true, "ISO-8859-1");
				WebContext wc = WebContextFactory.get();    
				
				Map emp = new HashMap();
				
				Session session =new SessionFacade();
				
				String user="";
				
				user =wc.getHttpServletRequest().getSession().getAttribute("nome_usuario").toString();
				
				emp=(Map)session.getAttribute("sessionmapEmp");
				
				int cont =emp.size();
				
				String empresa=null;
				
				Set<String> chaves = emp.keySet();  
				
				for (Iterator<String> iterator = chaves.iterator(); iterator.hasNext();){
					
					String chave = iterator.next();
				
					if(chave.equalsIgnoreCase(""+servico.getFk_id_empresa())){
					
						empresa= ""+emp.get(chave);
					}
				}
				
				helper.setTo("orcamento.central@gmail.com");//para
				
				helper.setFrom("casman.info@gmail.com");//de
				
				helper.setSubject("Sica- Abertura de Orçamento Emp: "+empresa+" Num: "+servico.getNum_solicitacao());//assunto
				
				helper.setReplyTo("mauricio.sales@bol.com.br");
				
				helper.setText("<html><body>" +
						"<h1>Mensagem enviado por Sica-Sistema Integrado Casman</h1>" +
						                   "<img src='cid:imagem'>" +
						                   "<h2>Usuario"+user+"</h2>"+
						                   "</body></html>", true);//mensagem com imagem embebida ao texto
				//String userDir = System.getProperty("user.dir");
				//System.out.println(userDir);
				FileSystemResource resource = new FileSystemResource(new File(System.getProperty("user.dir")+"/src/WebContent/img/casman-logo.jpg"));
				//adiciona a imagem inline
				helper.addInline("imagem", resource);
				//adiciona a imagem anexa ao e-mail
				helper.addAttachment("casman-logo.jpg", resource);



			}
		};
		try {
			this.mailSender.send(preparator);//envia
		} catch (MailException ex) {
			ex.printStackTrace();
		}
	}

	
	/*public static void main(String args[]){
		ApplicationContext appCtx = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");

		EnviaEmailHtml enviaEmailHtml = (EnviaEmailHtml) appCtx.getBean("htmlMail");
		enviaEmailHtml.enviar();
	}*/	
	
}
