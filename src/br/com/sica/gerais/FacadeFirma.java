package br.com.sica.gerais;

import java.sql.SQLException;
import java.util.List;
import org.directwebremoting.WebContext;
import org.directwebremoting.WebContextFactory;


import br.com.sica.connection.IPool;
import br.com.sica.connection.Pool;

public class FacadeFirma {
	
	private IPool pool;
	
	public List<Firma>  listarFirmas() throws SQLException{
		this.pool=new Pool();
		List<Firma> lista=null;
		FirmaDAO persistenceFirma=new FirmaDAO(pool);
		lista=persistenceFirma.find();
		return lista;
		
	}

}
