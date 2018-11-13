package br.com.sica.gerais;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import br.com.sica.connection.IPool;

public class FirmaDAO implements IFirmaDAO {

	IPool pool;
	public FirmaDAO(IPool pool){
		this.pool=pool;
		
	}
	@Override
	public List<Firma> find() throws SQLException {
		 Connection con=pool.getConnection();
	    	PreparedStatement stmt=null;
	   	 ResultSet rs=null;
	   	 
	   	 List<Firma> list = new ArrayList();
	   	 
	   	 try {
			
	   		 stmt = con.prepareStatement("select * from firma ");
	         //stmt.setInt(1, filial.getFirma_idfirma());
	        
	         Firma firma=null;
	       	 
	         rs = stmt.executeQuery();
	         
	       	    while (rs.next()) {
	       	        firma = new Firma();
	       	   
	       	        firma.setBairro(rs.getString("bairro"));
	       	        firma.setCep(rs.getString("cep"));
	       	        firma.setCidade(rs.getString("cidade"));
	       	        firma.setCnpj(rs.getString("cnpj"));
	       	        firma.setComplemento(rs.getString("complemento"));
	       	        firma.setFantasia(rs.getString("fantasia"));
	       	        
	       	        firma.setInscricaoestadual(rs.getInt("inscricaoestadual"));
	       	        firma.setInscricaomunicipal(rs.getInt("inscricaomunicipal"));
	       	        firma.setLogradouro(rs.getString("logradouro"));
	       	        firma.setRazao(rs.getString("razao"));
	       	        firma.setUf(rs.getString("uf"));
	       	        firma.setTelefone(rs.getString("telefone"));
	       	        firma.setIdfirma(rs.getInt("idfirma"));
	       	        
	       	         list.add(firma);
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
	public String cadastrarFirma(Firma firma) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String updateFirma(Firma firma) throws SQLException {
		// TODO Auto-generated method stub
		return null;
	}

}
