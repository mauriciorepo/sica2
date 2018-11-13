package br.com.sica.gerais;

import java.sql.SQLException;
import java.util.List;

public interface IFirmaDAO {

	public List<Firma> find()throws SQLException;
	
	public String cadastrarFirma(Firma firma)throws SQLException;
	
	public String updateFirma(Firma firma)throws SQLException;
	
}
