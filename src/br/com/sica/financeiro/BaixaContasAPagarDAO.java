package br.com.sica.financeiro;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import br.com.sica.connection.IDAO;
import br.com.sica.connection.IPool;

public class BaixaContasAPagarDAO implements IDAO<BaixaDespesas> {
	private IPool pool;
	public BaixaContasAPagarDAO(IPool pool){
		this.pool=pool;
		
	}
	@Override
	public Object cadastrar(BaixaDespesas entidade) {
	    PreparedStatement statement = null;
		PreparedStatement stmt=null;
		ResultSet rs=null;
		Connection con=pool.getConnection();
		//Fornecedor forn=(Fornecedor)fornecedor; 
		BaixaDespesas conta=(BaixaDespesas)entidade;
		
		//con.setAutoCommit(false);
		try {
			statement = con.prepareStatement("select (p.valor-sum(b.valor)) as val" +
					" from casman.baixa_despesas as b join casman.parcelasapagar as p where " +
					"b.parcelasapagar_idparcelasapagar=p.idparcelasapagar and b.parcelasapagar_idparcelasapagar=?  group by p.idparcelasapagar");
			
			statement.setInt(1, conta.getParcelasapagar_idparcelasapagar());
			//statement.setString(2, conta.getConta());
			
			rs = statement.executeQuery();
		 
		       if (rs.next())
		       { 
		    	   float val=rs.getFloat("val");
		    	  // float parcela=rs.getFloat("parcela");
		    	   if(val<=0){
		    		   return "mais";
		    		   
		    	   }else if((val>0)){
		    		   
		    		   stmt=con.prepareStatement("insert into baixa_despesas ( data_baixa, valor,  despesas_id_despesa," +
				                  "contasbancarias_idcontasbancarias, parcelasapagar_idparcelasapagar," +
				                  "parcelasapagar_contasbancarias_idcontasbancarias,parcelasapagar_despesas_id_despesa" +
				                  ") VALUES (?, ?, ?, ?,?, ?, ?)");
                        stmt.setString(1, conta.getData_baixa());
	                    stmt.setFloat(2, conta.getValor());
	                    stmt.setInt(3, conta.getDespesas_id_despesa());
	                    stmt.setInt(4, conta.getContasbancarias_idcontasbancarias());
	                    stmt.setInt(5,conta.getParcelasapagar_idparcelasapagar());
                        stmt.setInt(6, conta.getParcelasapagar_contasbancarias_idcontasbancarias());
                        stmt.setInt(7, conta.getDespesas_id_despesa());
                        stmt.executeUpdate();
    
    
                        con.commit();
     
                        stmt.close();
                        pool.liberarConnection(con);
     
     
                        return "true";
	    		   
		    	   }
		         
		       }else{
			stmt=con.prepareStatement("insert into baixa_despesas ( data_baixa, valor,  despesas_id_despesa," +
					                  "contasbancarias_idcontasbancarias, parcelasapagar_idparcelasapagar," +
					                  "parcelasapagar_contasbancarias_idcontasbancarias,parcelasapagar_despesas_id_despesa" +
					                  ") VALUES (?, ?, ?, ?,?, ?, ?)");
	        stmt.setString(1, conta.getData_baixa());
		    stmt.setFloat(2, conta.getValor());
		    stmt.setInt(3, conta.getDespesas_id_despesa());
		    stmt.setInt(4, conta.getContasbancarias_idcontasbancarias());
		    stmt.setInt(5,conta.getParcelasapagar_idparcelasapagar());
            stmt.setInt(6, conta.getParcelasapagar_contasbancarias_idcontasbancarias());
            stmt.setInt(7, conta.getDespesas_id_despesa());
            stmt.executeUpdate();
            //rs=stmt.getGeneratedKeys();
           
	        con.commit();
            
            stmt.close();
            pool.liberarConnection(con);
            //conecta.closeConnection();
	        
	        return "true";
		       }
		} catch (SQLException e) {
			System.out.print(e.getMessage()+"");
			
			pool.liberarConnection(con);
	        return "sqlerror";
	        // TODO: handle exception
		}catch(Exception io){
			pool.liberarConnection(con);
		    return "error";
		}return null;
	}
	@Override
	public Object update(BaixaDespesas entidade) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Object excluir(BaixaDespesas entidade) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<BaixaDespesas> find(BaixaDespesas entidade) {
		// TODO Auto-generated method stub
		return null;
	}
}
