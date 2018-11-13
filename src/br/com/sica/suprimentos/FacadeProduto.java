package br.com.sica.suprimentos;

import java.util.ArrayList;
import java.util.List;

import org.directwebremoting.WebContextFactory;

import br.com.sica.connection.IPool;
import br.com.sica.connection.Pool;
import br.com.sica.dwr.Session;

public class FacadeProduto {
	private IProdutoDAO DAO;
	private IPool pool;
	public String cadastroGrupo(Grupo grupo){
		   pool=new Pool();
	       DAO=new ProdutoDAO(pool);
	       String val= (String) DAO.cadastrarGrupo(grupo);
            return val;			 
			/*Session session=new SessionFacade();
			if ((session.getAttribute("login") != null) || (session.getAttribute("senha") != null)) {
				String niv = session.getAttribute("nivel").toString();


				String login = "";
				String senha = "";
				login = session.getAttribute("login").toString();
				senha = session.getAttribute("senha").toString();
				boolean use = DAOUsuario.ValidaUsuarioSession(login, senha);
	            boolean perfil=DAOUsuario.validaPerfilUsuario(login, senha,FORNECEDOR_I);
				if( perfil){
	            if (use ) {
					
	                FornecedorDAO forn=new FornecedorDAO();
	                String val=""+forn.cadastraFornecedor(fornecedor);
					System.out.println(val);
	                
	                if (val.equalsIgnoreCase("true")) {
						return "foi";
					}

					return "error";
				}

				return "notuse";
				}

				return "usenivel";
			}

			return "usenull";*/
		
	}

	public String cadastroClasse(Classe classe){
		   pool=new Pool();
	       DAO=new ProdutoDAO(pool);
	       String val= (String) DAO.cadastrarClasse(classe);
         return val;			 
			/*Session session=new SessionFacade();
			if ((session.getAttribute("login") != null) || (session.getAttribute("senha") != null)) {
				String niv = session.getAttribute("nivel").toString();


				String login = "";
				String senha = "";
				login = session.getAttribute("login").toString();
				senha = session.getAttribute("senha").toString();
				boolean use = DAOUsuario.ValidaUsuarioSession(login, senha);
	            boolean perfil=DAOUsuario.validaPerfilUsuario(login, senha,FORNECEDOR_I);
				if( perfil){
	            if (use ) {
					
	                FornecedorDAO forn=new FornecedorDAO();
	                String val=""+forn.cadastraFornecedor(fornecedor);
					System.out.println(val);
	                
	                if (val.equalsIgnoreCase("true")) {
						return "foi";
					}

					return "error";
				}

				return "notuse";
				}

				return "usenivel";
			}

			return "usenull";*/
		
	}
	public List<Grupo> findGrupo(){
		   pool=new Pool();
		   
	       DAO=new ProdutoDAO(pool);
	       List<Grupo> list= new ArrayList<Grupo>();
	       list=  DAO.findGrupo(null);
           return list;			 
			/*Session session=new SessionFacade();
			if ((session.getAttribute("login") != null) || (session.getAttribute("senha") != null)) {
				String niv = session.getAttribute("nivel").toString();


				String login = "";
				String senha = "";
				login = session.getAttribute("login").toString();
				senha = session.getAttribute("senha").toString();
				boolean use = DAOUsuario.ValidaUsuarioSession(login, senha);
	            boolean perfil=DAOUsuario.validaPerfilUsuario(login, senha,FORNECEDOR_I);
				if( perfil){
	            if (use ) {
					
	                FornecedorDAO forn=new FornecedorDAO();
	                String val=""+forn.cadastraFornecedor(fornecedor);
					System.out.println(val);
	                
	                if (val.equalsIgnoreCase("true")) {
						return "foi";
					}

					return "error";
				}

				return "notuse";
				}

				return "usenivel";
			}

			return "usenull";*/
		
	}

	public List<Classe> findClasse(){
		   pool=new Pool();
		   
	       DAO=new ProdutoDAO(pool);
	       List<Classe> list= new ArrayList<Classe>();
	       list=  DAO.findClasse(null);
        return list;			 
			/*Session session=new SessionFacade();
			if ((session.getAttribute("login") != null) || (session.getAttribute("senha") != null)) {
				String niv = session.getAttribute("nivel").toString();


				String login = "";
				String senha = "";
				login = session.getAttribute("login").toString();
				senha = session.getAttribute("senha").toString();
				boolean use = DAOUsuario.ValidaUsuarioSession(login, senha);
	            boolean perfil=DAOUsuario.validaPerfilUsuario(login, senha,FORNECEDOR_I);
				if( perfil){
	            if (use ) {
					
	                FornecedorDAO forn=new FornecedorDAO();
	                String val=""+forn.cadastraFornecedor(fornecedor);
					System.out.println(val);
	                
	                if (val.equalsIgnoreCase("true")) {
						return "foi";
					}

					return "error";
				}

				return "notuse";
				}

				return "usenivel";
			}

			return "usenull";*/
		
	}


}
