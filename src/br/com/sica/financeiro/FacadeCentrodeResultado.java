package br.com.sica.financeiro;

import java.util.ArrayList;
import java.util.List;

import br.com.sica.connection.IDAO;
import br.com.sica.connection.IPool;
import br.com.sica.connection.Pool;
import br.com.sica.dwr.Session;
import br.com.sica.dwr.SessionFacade;
import br.com.sica.security.UsuarioDAO;

public class FacadeCentrodeResultado {
	IPool pool;
	public List<CentrodeResultados> pesquisaCentrodeResultados(CentrodeResultados entidade ){
		
		pool =new Pool();
		Session session=new SessionFacade();
		List<CentrodeResultados> result;
		CentrodeResultados centro;
		if ((session.getAttribute("login") != null) || (session.getAttribute("senha") != null)) {
			String login = session.getAttribute("login").toString();
			String senha = session.getAttribute("senha").toString();
		    UsuarioDAO usuarioDAO=new UsuarioDAO(pool);
			boolean use = usuarioDAO.validaUsuarioSession(login, senha);
			if(use){
				IDAO<CentrodeResultados> DAO=new CentrodeResultadosDAO(pool);
		        
				result=DAO.find(entidade);
		        return result;    	    
				
	        }else{
	        	 centro=new CentrodeResultados();
	        	centro.setCentro("usenull");
	        	result=new ArrayList(); 
	        	result.add(centro);
	        	return result;
	        }
        
        }else{
        	centro=new CentrodeResultados();
        	centro.setCentro("null");
        	result=new ArrayList(); 
        	result.add(centro);
        	return result;        }
	
		
	}

}
