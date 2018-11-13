package br.com.sica.security;

import org.directwebremoting.WebContext;
import org.directwebremoting.WebContextFactory;

import com.sun.xml.internal.ws.client.sei.SEIStub;

import br.com.sica.connection.IPool;
import br.com.sica.connection.Pool;
import br.com.sica.dwr.Session;
import br.com.sica.dwr.SessionFacade;


public class FacadeUsuario {
	
	private IPool pool;
	Session session;

	   public Usuario LogaUser(String login, String senha)
	     throws Throwable
	   {
		   System.out.println(login);
		   //IPool pool;
		   this.pool=new Pool();
		   UsuarioDAO usuariodao=new UsuarioDAO(pool);
	     Usuario useL = usuariodao.logarUsuario(login,senha);
	     if (useL.equals(null))
	     {
	       return useL;
	     }
	     criaSessao(useL);
	    // SMSClient sms = new SMSClient(1);
	     //sms.sendMessage("+8188774606", "Casman ltda");
	     return useL;
	   }
	 
	   public void criaSessao(Usuario User)
	   {
	       this.session=new SessionFacade();
		  // WebContext wc = WebContextFactory.get();
	     if (!User.equals(User))
	       return;
	     session.setAttribute("id_usuario", Integer.valueOf(User.getId_usuario()));
	     session.setAttribute("login", User.getLogin());
	     session.setAttribute("senha", User.getSenha());
	     session.setAttribute("nivel", User.getNivel());
	     session.setAttribute("nome_usuario", User.getNome_usuario());
	     session.setAttribute("idfirma", User.getFiliais_firma_idfirma());
	     session.setAttribute("idfiliais", User.getFiliais_idfiliais());
	     
	   }
	   public void logout(){
		   
		   session.invalidate();
		   
	   }
	   
	   public void continueWorking()throws Throwable{
		  // int time =session.getMaxInactiveInterval();
		     // WebContext wc = WebContextFactory.get();
		     
		   
		   String id=(String) session.getAttribute("id_usuario");
		     String login=(String) session.getAttribute("login");
		     String senha=(String) session.getAttribute("senha");
		     String nivel=(String) session.getAttribute("nivel");
		     String nome=(String)session.getAttribute("nome_usuario");
		     int filial=(Integer)session.getAttribute("filiais_idfiliais");
		     int firma=(Integer)session.getAttribute("filiais_firma_idfirma");
		     //session.setMaxInactiveInterval(5400);
		     //this.session=new SessionFacade();
				
		     System.out.println(session.getMaxInactiveInterval());
		     session.setAttribute("id_usuario", Integer.valueOf(id));
		     session.setAttribute("login", login);
		     session.setAttribute("senha", senha);
		     session.setAttribute("nivel", nivel);
		     session.setAttribute("nome_usuario", nome);
		     session.setAttribute("filiais_firma_idfirma",filial);
		     session.setAttribute("filiais_idfiliais",firma );
		     //int inicio=session.getCreationTime();
		  // session.setMaxInactiveInterval(5500);
		  // System.out.println(session.getMaxInactiveInterval());
		   
	   }
	   
}
