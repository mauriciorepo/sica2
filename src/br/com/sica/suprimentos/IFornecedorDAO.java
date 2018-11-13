package br.com.sica.suprimentos;

import java.sql.SQLException;
import java.util.List;



public interface IFornecedorDAO {

	//public List<Fornecedor> findFornecedor(Fornecedor fornecedor);
    
	public boolean cadastrarFornecedor(Fornecedor fornecedor)throws SQLException;
	
	public String updateFornecedor(Fornecedor fornecedor);
}
