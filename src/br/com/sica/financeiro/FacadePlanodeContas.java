package br.com.sica.financeiro;

import java.util.ArrayList;
import java.util.List;

import br.com.sica.connection.IDAO;
import br.com.sica.connection.IPool;
import br.com.sica.connection.Pool;
import br.com.sica.dwr.Session;
import br.com.sica.dwr.SessionFacade;
import br.com.sica.security.UsuarioDAO;

public class FacadePlanodeContas {
	IPool pool;
	
	public List<PlanodeContas> pesquisaPlanodeContas(PlanodeContas entidade ){
		
		pool =new Pool();
		Session session=new SessionFacade();
		List<PlanodeContas> result;
		PlanodeContas plano;
		if ((session.getAttribute("login") != null) || (session.getAttribute("senha") != null)) {
			

			String login = session.getAttribute("login").toString();
			String senha = session.getAttribute("senha").toString();
		    UsuarioDAO usuarioDAO=new UsuarioDAO(pool);
			boolean use = usuarioDAO.validaUsuarioSession(login, senha);
			if(use){
			    IDAO<PlanodeContas> DAO=new PlanodeContasDAO(pool);
		        
			    result=DAO.find(entidade);
		        return result;    	    
				
	        }else{
	        	 plano=new PlanodeContas();
	        	plano.setNome("usenull");
	        	result=new ArrayList(); 
	        	result.add(plano);
	        	return result;
	        }
        
        }else{
        	plano=new PlanodeContas();
        	plano.setNome("null");
        	result=new ArrayList(); 
        	result.add(plano);
        	return result;        }
	
		
	}

}
