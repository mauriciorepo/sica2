package br.com.sica.financeiro;

import java.sql.BatchUpdateException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import com.mysql.jdbc.Statement;

import br.com.sica.connection.IDAO;
import br.com.sica.connection.IPool;
import br.com.sica.connection.Pool;

public class ContasAPagarDAO implements IDAO<ContasAPagar> {

	private IPool pool;
	public ContasAPagarDAO(IPool pool){
		this.pool=pool;
		
	}
	
	@Override
	public Object cadastrar(ContasAPagar entidade) {
		PreparedStatement stmt=null;
		//PreparedStatement stmtCount=null;
		PreparedStatement state=null;
		PreparedStatement stateRateio=null;
		ResultSet rs=null;
		
		Connection con=pool.getConnection();
		//Connection con2=pool.getConnection();
		//Connection con3=pool.getConnection();
		//ContasAPagar contas=new ContasAPagar();
		int  totalPersistRateio=0;
		int totalPersist= 0;
		try {
			
			stmt=con.prepareStatement("insert into despesas ( fornecedores_idfornecedores, num_nota,data_despesa,parcela , competencia, valortotal, descricao, tipodocumento,filiais_idfiliais) value(?,?,?,?,?,?,?,?,?)" , 1);
		     stmt.setInt(1, entidade.getFornecedores_idfornecedores());
		     stmt.setString(2, entidade.getNum_nota());
		     stmt.setString(3, entidade.getData_emissao());
		     stmt.setInt(4, entidade.getParcelas());
		     stmt.setString(5, entidade.getCompetencia());
		     stmt.setFloat(6, entidade.getValortotal());
		     stmt.setString(7, entidade.getDescricao());
		     stmt.setString(8, entidade.getTipodocumento());
		     stmt.setInt(9, entidade.getFiliais_idfiliais());
		     stmt.executeUpdate();
		     rs=stmt.getGeneratedKeys();
		     rs.next();
		     int id_despesas=rs.getInt(1);
		     if(id_despesas !=0){
		    	 
		    	 boolean persist = false;
		    	 boolean persistEmpty = false;
		    	 boolean persistFail = false;
		    	  
		    	 
		    	 List<ParcelasAPagar> list =entidade.getListParcelas();
		          //int id=list.size();
		    	  state=  con.prepareStatement("insert into parcelasapagar (despesas_id_despesa,contasbancarias_idcontasbancarias,meiopagamento,numparcela,vencimento,valor) values (?,?,?,?,?,?)"); 	  
                   
		    	 for(int i=0;i<list.size();i++){
                        		     state.setInt(1,id_despesas );
		                             state.setInt(2, list.get(i).getContasbancarias_idcontasbancarias());
		                             state.setString(3,list.get(i).getMeiopagamento());
		                             state.setInt(4, list.get(i).getNumparcela());
		                             state.setString(5, list.get(i).getVencimento());
		                             state.setFloat(6, list.get(i).getValor());
		                             state.addBatch();
		          }
		          int[] Persitcount = state.executeBatch();
		          
		                   for (int i = 1; i < Persitcount.length; i++)
		                   {
		                     if (Persitcount[i] == 1)
		                     {
		                       totalPersist++;
		           
		                       persist = true;
		                    }
		                     else if (Persitcount[i] == -2)
		                     {
		                       persistEmpty = true;
		                     } else {
		                       if (Persitcount[i] != -3)
		                         continue;
		                       persistFail = true;
		                     }
		           
		                   }
		           
		                   if ((persistEmpty) || (persistFail)) {
		                       con.rollback();
		                       pool.liberarConnection(con);
		                       state.clearBatch();
		      			   
		                   }
		                   else {
		                     //pool.commit(con2);
		                       
		                     List<RateioPlanoCentroContasaPagar> listRateioPlano =entidade.getListReateioPlano();
		   		          //int id=list.size();
		                   	stateRateio=  con.prepareStatement("insert into rateioplanocentrocontasapagar (despesas_id_despesa,centrodecusto_idcentrodecusto,planodecontas_idplanodecontas,valor,observacao) values (?,?,?,?,?)"); 	  
		  		   		  
		                     for(int i=0;i<listRateioPlano.size();i++){
		   		        	stateRateio.setInt(1,id_despesas );
		   		        	stateRateio.setInt(2, listRateioPlano.get(i).getCentrodecusto_idcentrodecusto());
		   		        	stateRateio.setInt(3,listRateioPlano.get(i).getPlanodecontas_idplanodecontas());
		   		        	stateRateio.setFloat(4, listRateioPlano.get(i).getValor());
		   		        	stateRateio.setString(5, listRateioPlano.get(i).getObservacao());
		   		                             
		   		        	stateRateio.addBatch();
		   		          }
		                              
		          //listener.cadastrouServico(serv);
		                        
		   		       int[] Persitcount2 = stateRateio.executeBatch();
	                   for (int i = 1; i < Persitcount2.length; i++)
	                   {
	                     if (Persitcount2[i] == 1)
	                     {
	                       totalPersistRateio++;
	           
	                       persist = true;
	                    }
	                     else if (Persitcount2[i] == -2)
	                     {
	                       persistEmpty = true;
	                     } else {
	                       if (Persitcount2[i] != -3)
	                         continue;
	                       persistFail = true;
	                     }
	           
	                   }
	           
	                   if ((persistEmpty) || (persistFail)) {
	                       con.rollback();
	                       pool.liberarConnection(con);
	                       stateRateio.clearBatch();
	      			   //  state.clearBatch();
	      			     return "fail";
	              
	                   }
	                   else {
	                	    con.commit();
	                	   // con2.commit();
	                	    //con3.commit();
	                	    //pool.commit();
	                        stateRateio.clearBatch();
	       			     state.clearBatch();
	       			     state.close();
	       			     stateRateio.close();
	       			     stmt.close();
	       			   
	                   }
		                   
		                   }
		     }
		   
		     return "foi";
		} catch (BatchUpdateException e) {
			  //   stateRateio.clearBatch();
			    // state.clearBatch();
			       //System.err.println(e);
			       String str1 = e.getMessage();
			       return str1;
          }catch (SQLException e) {
	    	 //stateRateio.clearBatch();
		     //state.clearBatch();
		     String str1 = e.getMessage();
		     return str1;
        }		
		//return null;
	}

	@Override
	public Object update(ContasAPagar entidade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object excluir(ContasAPagar entidade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ContasAPagar> find(ContasAPagar entidade) {
		// TODO Auto-generated method stub
		return null;
	}

}
