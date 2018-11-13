package br.com.sica.financeiro;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.naming.directory.InvalidAttributesException;
import javax.swing.ListCellRenderer;

import br.com.sica.connection.IDAO;
import br.com.sica.connection.IPool;



public class ContaBancariaDAO implements IDAO<ContaBancaria>{
    private IPool pool;

    public ContaBancariaDAO(IPool pool) {
	
    	this.pool=pool;
    	// TODO Auto-generated constructor stub
	}
    
	@Override
	public Object cadastrar(ContaBancaria entidade) {
	    PreparedStatement statement = null;
		PreparedStatement stmt=null;
		ResultSet rs=null;
		Connection con=pool.getConnection();
		//Fornecedor forn=(Fornecedor)fornecedor; 
		ContaBancaria conta=entidade;
		
		//con.setAutoCommit(false);
		try {
			statement = con.prepareStatement("select * from contasbancarias where agencia=? and conta= ?    ");
			
			statement.setString(1, conta.getAgencia());
			statement.setString(2, conta.getConta());
			
			rs = statement.executeQuery();
		 
		       if (rs.next())
		       {
		         return "existe";
		       }
			stmt=con.prepareStatement("insert into contasbancarias ( agencia, conta,  ativo, telefone, nome, tipoconta, datasaldoabertura, valorsaldoabertura,  vencimentolimite,  limitecredito,filiais_idfiliais,firma_idfirma ,bancos_codbacen,dvconta,dvagencia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,? )");
	        stmt.setString(1, conta.getAgencia());
		    stmt.setString(2, ""+conta.getConta());
		    stmt.setString(3, "S");
		    stmt.setString(4, conta.getTelefone());
		    stmt.setString(5,conta.getNome());
            stmt.setString(6, conta.getTipoconta());
            stmt.setString(7, conta.getDatasaldoabertura());
            stmt.setFloat(8, conta.getValorsaldoabertura());
            stmt.setString(9, ""+conta.getVencimentolimite());
            stmt.setFloat(10, conta.getLimitecredito());
            stmt.setInt(11, conta.getFiliais_idfiliais());
            stmt.setInt(12, conta.getFirma_idfirma());
            stmt.setString(13, conta.getBancos_codbacen());
            stmt.setString(14, conta.getDvconta());
            stmt.setString(15, conta.getDvagencia());
            stmt.executeUpdate();
            rs=stmt.getGeneratedKeys();
           
            
	        con.commit();
            
            stmt.close();
            pool.liberarConnection(con);
            //conecta.closeConnection();
	        
	        return "true";
		} catch (SQLException e) {
			System.out.print(e.getMessage()+"");
			
			pool.liberarConnection(con);
	        return "sqlerror";
	        // TODO: handle exception
		}catch(Exception io){
			pool.liberarConnection(con);
		    return "error";
		}
	}
	

	@Override
	public Object update(ContaBancaria entidade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object excluir(ContaBancaria entidade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<ContaBancaria> find(ContaBancaria entidade) {
		
		PreparedStatement stmt=null;
		ResultSet rs=null;
		Connection con=pool.getConnection();
		ContaBancaria conta=entidade;
		String val=ContaBancaria.CONTABANCARIA_I;
		List<ContaBancaria> listaConta;
		// TODO Auto-generated method stub
		
		try {
              stmt = con.prepareStatement("select *  from contasbancarias where  (filiais_idfiliais=? and firma_idfirma=?)    ");
			
			//stmt.setString(1, conta.getAgencia());
			//stmt.setString(2, conta.getConta());
			stmt.setInt(1, conta.getFiliais_idfiliais());
			stmt.setInt(2, conta.getFirma_idfirma());
		
			
			rs = stmt.executeQuery();
		       listaConta=new ArrayList<ContaBancaria>();
		       while (rs.next())
		       { 
		    	   conta=new ContaBancaria();
		    	   conta.setAgencia(rs.getString("agencia"));
		    	   //conta.setBancos_codbacen(rs.getString(l))
		    	   conta.setTipoconta(rs.getString("tipoconta"));
		    	   conta.setFiliais_idfiliais(rs.getInt("filiais_idfiliais"));
		    	   conta.setFirma_idfirma(rs.getInt("firma_idfirma"));
		    	   conta.setIdcontasbancarias(rs.getInt("idcontasbancarias"));
		    	   conta.setNome(rs.getString("nome"));
		    	   conta.setConta(rs.getString("conta"));
		    	   listaConta.add(conta);
		    	   
		         //return "existe";
		       }
		       return listaConta;
		} catch (Exception e) {
			// TODO: handle exception
		}
		List<ContaBancaria> list =new ArrayList<ContaBancaria>();
		return list;
	}

}
