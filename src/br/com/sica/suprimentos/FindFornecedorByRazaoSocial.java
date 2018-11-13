package br.com.sica.suprimentos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import br.com.sica.connection.IPool;

public class FindFornecedorByRazaoSocial implements IFindFornecedor {

	private IPool pool;
	
	public FindFornecedorByRazaoSocial(IPool pool) {
		this.pool=pool;
	}
	
	@Override
	public List<Fornecedor> findFornecedor(Fornecedor fornecedor) {
		 Connection con=pool.getConnection();
	     PreparedStatement stmt=null;
	   	 ResultSet rs=null;
	   	 
	   	 List<Fornecedor> list = new ArrayList();
	   	 
	   	 try {
			
	   		 stmt = con.prepareStatement("select * from fornecedores where fantasia like ? ");
	         String fantasia="%"+fornecedor.getFantasia()+"%";
	   		 stmt.setString(1, fantasia);
	        
	         Fornecedor fornec=null;
	       	 
	         rs = stmt.executeQuery();
	         
	       	    while (rs.next()) {
	       	        fornec = new Fornecedor();
	       	         
	       	        fornec.setAtivo(rs.getString("ativo"));
	       	        fornec.setBairro(rs.getString("bairro"));
	       	        fornec.setBloqueado(rs.getString("bloqueado"));
	       	        fornec.setCnpj(rs.getString("cnpj"));
	       	        fornec.setComplemento(rs.getString("complemento"));
	       	        fornec.setFantasia(rs.getString("fantasia"));
	       	        fornec.setIe(rs.getString("ie"));
	       	        fornec.setIm(rs.getString("im"));
	       	        fornec.setLogradouro(rs.getString("logradouro"));
	       	        fornec.setRazaosocial(rs.getString("razaosocial"));
	       	        fornec.setTelefone(rs.getString("telefone"));
	       	        fornec.setIdfornecedores(rs.getInt("idfornecedores"));
	       	        fornec.setCep(rs.getString("cep"));
	       	        fornec.setCidade(rs.getString("cidade"));
	       	        fornec.setDatabloqueio(rs.getString("databloqueio"));
	       	        fornec.setHomepage(rs.getString("homepage"));
	       	        fornec.setNumero(rs.getString("numero"));
	       	        fornec.setTelefone2(rs.getString("telefone2"));
	       	        fornec.setTipo(rs.getString("tipo"));
	                fornec.setCpf(rs.getString("cpf"));  
	                fornec.setTipoatividade(rs.getString("tipoatividade"));
	       	        list.add(fornec);
	       	       }
	       	    stmt.close();
	       	    pool.liberarConnection(con);
	       	    return list;
	       	 
			} catch (SQLException e) {
				pool.liberarConnection(con);
				System.out.println(e.getMessage());
				return null;
			}

	
	}

	

}
