package br.com.sica.suprimentos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;


import br.com.sica.connection.ExceptionDAO;
import br.com.sica.connection.IDAO;
import br.com.sica.connection.IPool;



public  class FornecedorDAO implements IDAO<Fornecedor> {

	private IFindFornecedor findstrategy;
	private IPool pool;
	public FornecedorDAO(IPool pool){
		this.pool=pool;
	}
	
	
	
	
	public  String update(Fornecedor fornecedor) {
		
		PreparedStatement stmt=null;
		ResultSet rs=null;
		Connection con=pool.getConnection();
		 //Fornecedor forn=(Fornecedor)fornecedor; 
		//con.setAutoCommit(false);
		try {
		
			stmt=con.prepareStatement("update fornecedores  set fantasia=?, tipo=?,  razaosocial=?, cnpj=?, ie=?, im=?, suframa=?, rg=?,  ativo=?,  logradouro=?, numero=?, complemento=?, bairro=?, telefone2=?,  bloqueado=?, descontoprod=?, optantesn=?, retpis=?, retconfins=?, retcsll=?, retirrf=?, retinss=?, cep=?,datainc2=?, telefone=?, databloqueio=?, datainativo=?,cidade=?,cpf=? ,tipoatividade=? where idfornecedores=?");
	        stmt.setString(1, fornecedor.getFantasia());
		    stmt.setString(2, ""+fornecedor.getTipo());
		    stmt.setString(3, fornecedor.getRazaosocial());
		    stmt.setString(4, fornecedor.getCnpj());
		    stmt.setString(5,fornecedor.getIe() );
            stmt.setString(6, fornecedor.getIm());
            stmt.setInt(7, fornecedor.getSuframa());
            stmt.setString(8, fornecedor.getRg());
            stmt.setString(9, ""+fornecedor.getAtivo());
            stmt.setString(10, fornecedor.getLogradouro());
            stmt.setString(11, fornecedor.getNumero());
            stmt.setString(12, fornecedor.getComplemento());
            stmt.setString(13, fornecedor.getBairro());
            stmt.setString(14, fornecedor.getTelefone2());
            stmt.setString(15, ""+fornecedor.getBloqueado() );
            stmt.setFloat(16, fornecedor.getDescontoprod());
            stmt.setString(17, ""+fornecedor.getOptantesn());
	        stmt.setFloat(18, fornecedor.getRetpis());
	        stmt.setFloat(19, fornecedor.getRetconfins());
	        stmt.setFloat(20, fornecedor.getRetcsll());
	        stmt.setFloat(21, fornecedor.getRetirrf());
	        stmt.setFloat(22, fornecedor.getRetinss());
	        stmt.setString(23, fornecedor.getCep());	       
	        stmt.setString(24, fornecedor.getDatainc2());
	        stmt.setString(25, fornecedor.getTelefone());
	        stmt.setString(26, fornecedor.getDatabloqueio());
	        stmt.setString(27, fornecedor.getDatainativo());
	        stmt.setString( 28,fornecedor.getCidade());
	        stmt.setString(29, fornecedor.getCpf());
	        stmt.setInt(31, fornecedor.getIdfornecedores());
	        stmt.setString(30, fornecedor.getTipoatividade());
	        System.out.println(fornecedor.getTipoatividade());
	        stmt.executeUpdate();
	        rs=stmt.getGeneratedKeys();
           
	        con.commit();
            
            stmt.close();
            pool.liberarConnection(con);
            //conecta.closeConnection();
	        
	        return "true";
		} catch (Exception e) {
			System.out.print(e.getMessage()+"");
			
			pool.liberarConnection(con);
	        return "false";
	        // TODO: handle exception
		}
	}
	


	
	public String excluir(Fornecedor entidade) {
		// TODO Auto-generated method stub
		return null;
	}


	
	public List find(Fornecedor fornecedor)  {
		// TODO Auto-generated method stub
		return findstrategy.findFornecedor(fornecedor);
	}

 
	
	public String cadastrar(Fornecedor fornecedor)  {
		
		
		
	    PreparedStatement statement = null;
		PreparedStatement stmt=null;
		ResultSet rs=null;
		Connection con=pool.getConnection();
		Fornecedor forn=(Fornecedor)fornecedor; 
		//con.setAutoCommit(false);
		try {
			statement = con.prepareStatement("select * from fornecedores where (cnpj=? and tipo= ? ) or (cpf= ? and tipo=?)  ");
			statement.setString(1, fornecedor.getCnpj());
			statement.setString(2, "J");
			statement.setString(3, fornecedor.getCpf());
			statement.setString(4, "F");
			rs = statement.executeQuery();
		 
		       if (rs.next())
		       {
		         return "existe";
		       }
			stmt=con.prepareStatement("insert into fornecedores ( fantasia, tipo,  razaosocial, cnpj, ie, im, suframa, rg,  ativo,  logradouro, numero, complemento, bairro, telefone2,  bloqueado, descontoprod, optantesn, retpis, retconfins, retcsll, retirrf, retinss, cep,datainc2, telefone, databloqueio, datainativo,cidade,cpf,tipoatividade ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?, ?,? )");
	        stmt.setString(1, forn.getFantasia());
		    stmt.setString(2, ""+forn.getTipo());
		    stmt.setString(3, forn.getRazaosocial());
		    stmt.setString(4, forn.getCnpj());
		    stmt.setString(5,forn.getIe() );
            stmt.setString(6, forn.getIm());
            stmt.setInt(7, forn.getSuframa());
            stmt.setString(8, forn.getRg());
            stmt.setString(9, ""+forn.getAtivo());
            stmt.setString(10, forn.getLogradouro());
            stmt.setString(11, forn.getNumero());
            stmt.setString(12, forn.getComplemento());
            stmt.setString(13, forn.getBairro());
            stmt.setString(14, forn.getTelefone2());
            stmt.setString(15, ""+forn.getBloqueado() );
            stmt.setFloat(16, forn.getDescontoprod());
            stmt.setString(17, ""+forn.getOptantesn());
	        stmt.setFloat(18, forn.getRetpis());
	        stmt.setFloat(19, forn.getRetconfins());
	        stmt.setFloat(20, forn.getRetcsll());
	        stmt.setFloat(21, forn.getRetirrf());
	        stmt.setFloat(22, forn.getRetinss());
	        stmt.setString(23, forn.getCep());	       
	        stmt.setString(24, forn.getDatainc2());
	        stmt.setString(25, forn.getTelefone());
	        stmt.setString(26, forn.getDatabloqueio());
	        stmt.setString(27, forn.getDatainativo());
	        stmt.setString( 28,forn.getCidade());
	        stmt.setString(29,forn.getCpf());
	        stmt.setString(30, forn.getTipoatividade());
	        stmt.executeUpdate();
	        rs=stmt.getGeneratedKeys();
           
	        con.commit();
            
            stmt.close();
            pool.liberarConnection(con);
            //conecta.closeConnection();
	        
	        return "true";
		} catch (Exception e) {
			System.out.print(e.getMessage()+"");
			
			pool.liberarConnection(con);
	        return "error";
	        // TODO: handle exception
		}
	}

}
