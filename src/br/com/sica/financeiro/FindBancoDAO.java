package br.com.sica.financeiro;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import br.com.sica.connection.IPool;
import br.com.sica.suprimentos.Fornecedor;

public class FindBancoDAO implements IFindBancoDAO {

	private IPool pool;
	
	public FindBancoDAO(IPool pool) {
		this.pool=pool;
	}
	@Override

	public List<Banco> find(Banco banco) {
		Connection con=pool.getConnection();
	     PreparedStatement stmt=null;
	   	 ResultSet rs=null;
	   	 
	   	 List<Banco> list = new ArrayList();
	   	 
	   	 try {
			
	   		 stmt = con.prepareStatement("select * from bancos");
	         
	         Banco bank=null;
	       	 
	         rs = stmt.executeQuery();
	         
	       	    while (rs.next()) {
	       	        bank=new Banco();
	       	    	
	       	        bank.setCodbacen(rs.getString("codbacen"));
	       	        bank.setNome(rs.getString("nome"));
	       	        bank.setSite(rs.getString("site"));
	       	        
	       	        list.add(bank);
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
