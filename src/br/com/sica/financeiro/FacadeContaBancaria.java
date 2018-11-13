package br.com.sica.financeiro;

import java.util.List;

import br.com.sica.connection.IDAO;
import br.com.sica.connection.IPool;
import br.com.sica.connection.Pool;
import br.com.sica.dwr.Session;
import br.com.sica.dwr.SessionFacade;
import br.com.sica.security.UsuarioDAO;

public class FacadeContaBancaria {
    private IPool pool;
    
    public String cadastrarContaBancaria(ContaBancaria conta){
        pool=new Pool();
        //SessionFacade sessionfacade;
        Session session= new SessionFacade();
        
        if ((session.getAttribute("login") != null) || (session.getAttribute("senha") != null)) {
			//String niv = session.getAttribute("nivel").toString();


			//String login = "";
			//String senha = "";
			String login = session.getAttribute("login").toString();
			String senha = session.getAttribute("senha").toString();
		    UsuarioDAO usuarioDAO=new UsuarioDAO(pool);
			boolean use = usuarioDAO.validaUsuarioSession(login, senha);
			if(use){
				conta.setFiliais_idfiliais((Integer)session.getAttribute("idfiliais"));
		        conta.setFirma_idfirma((Integer)session.getAttribute("idfirma"));
		        IDAO<ContaBancaria> DAO=new ContaBancariaDAO(pool);	
		        String result=(String)DAO.cadastrar(conta);
		        return result;    	    
				
	        }else{
	        	return "usenull";
	        }
        
        }else{
        	return "null";
        }
        
        
    }
    public List<ContaBancaria> pesquisaConta(ContaBancaria conta){
    	pool=new Pool();
    	
    	Session session= new SessionFacade();
        conta.setFiliais_idfiliais((Integer)session.getAttribute("idfiliais"));
        conta.setFirma_idfirma((Integer)session.getAttribute("idfirma"));
        
    	IDAO<ContaBancaria> DAO=new ContaBancariaDAO(pool);
    	List<ContaBancaria> lista=DAO.find(conta);
    	
    	return lista;
    
    }
    

}
