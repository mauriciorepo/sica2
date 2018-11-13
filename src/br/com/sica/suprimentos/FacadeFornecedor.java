package br.com.sica.suprimentos;

import java.util.List;

import br.com.sica.connection.ExceptionDAO;
import br.com.sica.connection.IDAO;
import br.com.sica.connection.IPool;
import br.com.sica.connection.Pool;
import br.com.sica.dwr.Session;
import br.com.sica.dwr.SessionFacade;

public class FacadeFornecedor {

	 IDAO<Fornecedor> DAO;
     private   IPool pool;
	
	
    public List<Fornecedor> findFornecedor(Fornecedor fornecedor) throws ExceptionDAO{
    	
    	pool=new Pool();
    	
    	
    	DeterminaOrdenacaoFornecedor ordenacao=new DeterminaOrdenacaoFornecedor(new FindFornecedorByNomeDAO(pool));
    	
    	
    	List<Fornecedor> list=ordenacao.find(fornecedor);
    	return list;
    }
    
    
    public String updateFornecedor(Fornecedor fornecedor) throws Throwable  {
	       
		   pool=new Pool();
	       DAO=new FornecedorDAO(pool);
	       String val= (String) DAO.update(fornecedor);
			 
	         return val;
	}
	public String cadastraFornecedor(Fornecedor fornecedor) throws Throwable  {
	       
		   pool=new Pool();
	       DAO=new FornecedorDAO(pool);
	       String val= (String) DAO.cadastrar(fornecedor);
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
	
	public Fornecedor populateFornecedorWithXML(String command) throws Throwable{
		Session sessionContas=new SessionFacade();
		Fornecedor fornecedor =new Fornecedor();
		PopulaFornecedorFileUpload file=new PopulaFornecedorFileUpload();
		
		fornecedor=file.uploadFiles(command);
		return fornecedor;
		/*if ((sessionContas.getAttribute("login") != null) || (sessionContas.getAttribute("senha") != null)) {
			         String niv = sessionContas.getAttribute("nivel").toString();
			   
			         if (niv.equalsIgnoreCase("a"))
			         {
			           String login = "";
			           String senha = "";
			           login = sessionContas.getAttribute("login").toString();
			           senha = sessionContas.getAttribute("senha").toString();
			           boolean use = DAOUsuario.ValidaUsuarioSession(login, senha);
			           if (use)
			           {
			        	   FileUpload file=new FileUpload();
			             //fornecedor = file.uploadFiles(command);
			            /* if (sessionContas != null) {
			               sessionContas.removeAttribute("SessionListContasPagar");
			             }
			   
			             sessionContas.setAttribute("SessionListContasPagar", despesa);
			   
			             //List despe = new ArrayList();
			             //despe = (List)sessionContas.getAttribute("SessionListContasPagar");
			             if (despesa == null) {
			               return despesa;
			             }
			             return fornecedor;
			           }
			   
			           //desp.setFantasia("notuse");
			           fornecedor.setFantasia("notuse");
			           return fornecedor;
			         }
			   
			         //desp.setFantasia("usenivel");
			         fornecedor.setFantasia("usenivel");
			         return fornecedor;
			       }
			   
			       //fornecedor.setFantasia("usenull");
		           fornecedor.setFantasia("usenivel");
			       return fornecedor;
                    */
	}
}
