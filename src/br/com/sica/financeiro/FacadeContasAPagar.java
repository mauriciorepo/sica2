package br.com.sica.financeiro;

import java.util.List;

import br.com.sica.connection.IDAO;
import br.com.sica.connection.IPool;
import br.com.sica.connection.Pool;
import br.com.sica.dwr.Session;
import br.com.sica.dwr.SessionFacade;
import br.com.sica.security.UsuarioDAO;

public class FacadeContasAPagar {

	private IPool pool;
	
	public String baixaConta(BaixaDespesas conta){
		pool =new Pool();
		Session session=new SessionFacade();
		 if ((session.getAttribute("login") != null) || (session.getAttribute("senha") != null)) {
				String login = session.getAttribute("login").toString();
				String senha = session.getAttribute("senha").toString();
			    UsuarioDAO usuarioDAO=new UsuarioDAO(pool);
				boolean use = usuarioDAO.validaUsuarioSession(login, senha);
				if(use){
					//conta.setFiliais_idfiliais((Integer)session.getAttribute("idfiliais"));
			       // conta.setFirma_idfirma((Integer)session.getAttribute("idfirma"));
			        IDAO<BaixaDespesas> DAO=new BaixaContasAPagarDAO(pool);	
			        String result=(String)DAO.cadastrar(conta);
			        return result;    	    
					
		        }else{
		        	return "usenull";
		        }
	        
	        }else{
	        	return "null";
	        }
	
	}
	public List<ContasAPagarGrid> contasAPagarByVencimento(ContasAPagar conta){
		pool =new Pool();
		Session session=new SessionFacade();
		ContasAPagarGrid cont=new ContasAPagarGrid();
		List<ContasAPagarGrid> result = null;
		
		if ((session.getAttribute("login") != null) || (session.getAttribute("senha") != null)) {
			String login = session.getAttribute("login").toString();
			String senha = session.getAttribute("senha").toString();
		    UsuarioDAO usuarioDAO=new UsuarioDAO(pool);
			boolean use = usuarioDAO.validaUsuarioSession(login, senha);
			if(use){
				conta.setFiliais_idfiliais((Integer)session.getAttribute("idfiliais"));
		       // conta.setFirma_idfirma((Integer)session.getAttribute("idfirma"));
		        IFindContasAPagar DAO=new FindContasAPagarByVencimento(pool);	
		         result=DAO.find(conta);
		        return result;    	    
				
	        }else{
	        	cont.setMeiopagamento("usenull");
	        	result.add(cont);
	        	return result;
	        }
        
        }else{
        	cont.setMeiopagamento("null");
        	result.add(cont);
        	return result;

        	
        }
	}
	public String cadastroContas(ContasAPagar conta){
		pool =new Pool();
		Session session=new SessionFacade();
        if ((session.getAttribute("login") != null) || (session.getAttribute("senha") != null)) {
			String login = session.getAttribute("login").toString();
			String senha = session.getAttribute("senha").toString();
		    UsuarioDAO usuarioDAO=new UsuarioDAO(pool);
			boolean use = usuarioDAO.validaUsuarioSession(login, senha);
			if(use){
				conta.setFiliais_idfiliais((Integer)session.getAttribute("idfiliais"));
		       // conta.setFirma_idfirma((Integer)session.getAttribute("idfirma"));
		        IDAO<ContasAPagar> DAO=new ContasAPagarDAO(pool);	
		        String result=(String)DAO.cadastrar(conta);
		        return result;    	    
				
	        }else{
	        	return "usenull";
	        }
        
        }else{
        	return "null";
        }
		
	}
}
