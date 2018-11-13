package br.com.sica.financeiro;

import java.util.List;

import br.com.sica.connection.ExceptionDAO;
import br.com.sica.connection.IDAO;
import br.com.sica.connection.IPool;
import br.com.sica.connection.Pool;

public class FacadeBanco {

	private IPool pool;
	private IFindBancoDAO findDAO; 
	public List<Banco> listarBancos() throws ExceptionDAO{
		pool=new Pool();
		findDAO=new FindBancoDAO(pool);
		Banco banco=new Banco();
		
		List<Banco> listBanco=findDAO.find(banco);
		return listBanco;
	}
}
