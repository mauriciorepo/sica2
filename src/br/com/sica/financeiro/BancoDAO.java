package br.com.sica.financeiro;

import java.util.List;

import br.com.sica.connection.ExceptionDAO;
import br.com.sica.connection.IDAO;
import br.com.sica.connection.IPool;

public class BancoDAO implements IDAO<Banco> {

	private IPool pool;
	IFindBancoDAO Strategybanco;
	public BancoDAO(IPool pool){
		this.pool=pool;
	}
	
	
	
	
	public void trocaFind(IFindBancoDAO banco){
		Strategybanco=banco;
	}




	@Override
	public Object cadastrar(Banco entidade) {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public Object update(Banco entidade) {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public Object excluir(Banco entidade) {
		// TODO Auto-generated method stub
		return null;
	}




	@Override
	public List<Banco> find(Banco entidade) {
		// TODO Auto-generated method stub
		return null;
	}

}
