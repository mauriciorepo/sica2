package br.com.sica.gerais;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import br.com.sica.connection.IPool;


public class FiliaisDAO implements IFiliaisDao {

	IPool pool;
	public FiliaisDAO(IPool pool){
		this.pool=pool;
	}
	@Override
	public List<Filiais> findFiliais(int idfirma) throws SQLException {

	   	 Connection con=pool.getConnection();
	    	PreparedStatement stmt=null;
	   	 ResultSet rs=null;
	   	 
	   	 List<Filiais> list = new ArrayList();
	   	 
	   	 try {
			
	   		 stmt = con.prepareStatement("select * from filiais where firma_idfirma = ? ");
	         stmt.setInt(1, idfirma);
	        
	         Filiais filial1=null;
	       	 
	         rs = stmt.executeQuery();
	         
	       	    while (rs.next()) {
	       	        filial1 = new Filiais();
	       	   
	       	        filial1.setBairro(rs.getString("bairro"));
	       	        filial1.setCep(rs.getString("cep"));
	       	        filial1.setCidade(rs.getString("cidade"));
	       	        filial1.setCnpj(rs.getString("cnpj"));
	       	        filial1.setComplemento(rs.getString("complemento"));
	       	        filial1.setFantasia(rs.getString("fantasia"));
	       	        filial1.setFirma_idfirma(rs.getInt("firma_idfirma"));
	       	        filial1.setIdfiliais(rs.getInt("idfiliais"));
	       	        filial1.setInscricaoestadual(rs.getString("inscricaoestadual"));
	       	        filial1.setInscricaomunicipal(rs.getString("inscricaomunicipal"));
	       	        filial1.setLogradouro(rs.getString("logradouro"));
	       	        filial1.setRazao(rs.getString("razao"));
	       	        filial1.setUf(rs.getString("uf"));
	       	        
	       	         list.add(filial1);
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

	@Override
	public String cadastroFiliais(Filiais filial) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String updateFiliais(Filiais filial) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

}
