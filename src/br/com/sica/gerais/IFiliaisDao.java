package br.com.sica.gerais;

import java.sql.SQLException;
import java.util.List;

public interface IFiliaisDao {

	public List<Filiais> findFiliais(int idfirma)throws SQLException;
	
	public String cadastroFiliais(Filiais filial) throws SQLException;
	
	public String updateFiliais(Filiais filial)throws SQLException;
	
	
}
