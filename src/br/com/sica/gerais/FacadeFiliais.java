package br.com.sica.gerais;

import java.sql.SQLException;
import java.util.List;

import br.com.sica.connection.IPool;
import br.com.sica.connection.Pool;

public class FacadeFiliais {
	private IPool pool;
	
	
	public List<Filiais> consultaFiliais(int idfirma) throws SQLException{
		this.pool= new Pool();
		FiliaisDAO filial=new FiliaisDAO(pool);
		List<Filiais> listaFiliais=filial.findFiliais(idfirma);
		return listaFiliais;
	}

}
