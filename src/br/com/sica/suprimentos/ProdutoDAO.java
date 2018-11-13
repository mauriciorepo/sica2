package br.com.sica.suprimentos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import br.com.sica.connection.IPool;

public class ProdutoDAO implements IProdutoDAO{
    private IPool pool;
	public ProdutoDAO(IPool pool) {
		this.pool=pool;
	}
	@Override
	public String cadastrarGrupo(Grupo grupo) {
		PreparedStatement stmt=null;
		Connection con=pool.getConnection();
		PreparedStatement statement=null; 
		ResultSet rs=null;
		
		try {
			
			statement = con.prepareStatement("select * from produtogrupo where cod=?   ");
			statement.setString(1, grupo.getCod());
			rs = statement.executeQuery();
		 
		       if (rs.next())
		       {
		         return "existe";
		       }
		
			stmt=con.prepareStatement("insert into produtogrupo ( descricao, cod,idprodutogrupo,data  ) VALUES (?, ?,?,? )");
	        stmt.setString(1, grupo.getDescricao());
		    stmt.setString(2, grupo.getCod());
		    stmt.setString(3, grupo.getIdprodutogrupo());
		    stmt.setString(4, grupo.getData());
		    
		    stmt.executeUpdate();
		    con.commit();
		    stmt.close();
		    pool.liberarConnection(con);
		    return "true";
		} catch (SQLException e) {
			e.printStackTrace();
			e.getSQLState();
			return "Error";
		}
		
		
		
	}

	@Override
	public String cadastrarClasse(Classe classe) {
		PreparedStatement stmt=null;
		Connection con=pool.getConnection();
		PreparedStatement statement=null; 
		ResultSet rs=null;
		try {
		  //Verifica se existe um produto com mesmo codigo gerado
			statement = con.prepareStatement("select * from produtoclasse where cod=?   ");
			statement.setString(1, classe.getCod());
			rs = statement.executeQuery();
		 
		       if (rs.next())
		       {
		         return "existe";
		       }
		
			stmt=con.prepareStatement("insert into produtoclasse ( descricao, cod,idprodutoclasse,data  ) VALUES (?, ?,?,? )");
	        stmt.setString(1, classe.getDescricao());
		    stmt.setString(2, classe.getCod());
		    stmt.setString(3, classe.getIdprodutoclasse());
		    stmt.setString(4, classe.getData());
		    
		    stmt.executeUpdate();
		    con.commit();
		    stmt.close();
		    pool.liberarConnection(con);
		    return "true";
		} catch (SQLException e) {
			e.printStackTrace();
			e.getSQLState();
			return "Error";
		}
	}

	@Override
	public List<Grupo> findGrupo(Object obj) {
	    PreparedStatement stmt=null;
	    ResultSet rs=null;
	    Connection con=pool.getConnection();
		try {
			stmt=con.prepareStatement("select * from produtogrupo ");
			rs=stmt.executeQuery();
		
			Grupo grupo;
			List<Grupo> list=new ArrayList<Grupo>();
			while (rs.next()) {
				grupo=new Grupo();
				grupo.setCod(rs.getString("cod"));
				grupo.setData(rs.getString("data"));
				grupo.setDescricao(rs.getString("descricao"));
				grupo.setIdprodutogrupo(rs.getString("idprodutogrupo"));
				
			   	list.add(grupo);
			}
			stmt.close();
			pool.liberarConnection(con);
			return list;
			
		} catch (Exception e) {
			e.printStackTrace();
			e.getMessage();
			return null;
		}
	}

	@Override
	public List<Classe> findClasse(Object obj) {
		PreparedStatement stmt=null;
	    ResultSet rs=null;
	    Connection con=pool.getConnection();
		try {
			stmt=con.prepareStatement("select * from produtoclasse ");
			rs=stmt.executeQuery();
		
			Classe classe;
			List<Classe> list=new ArrayList<Classe>();
			while (rs.next()) {
				classe=new Classe();
				classe.setCod(rs.getString("cod"));
				classe.setData(rs.getString("data"));
				classe.setDescricao(rs.getString("descricao"));
				classe.setIdprodutoclasse(rs.getString("idprodutoclasse"));
				
			   	list.add(classe);
			}
			stmt.close();
			pool.liberarConnection(con);
			return list;
			
		} catch (Exception e) {
			e.printStackTrace();
			e.getMessage();
			return null;
		}
	}

	@Override
	public String updateGrupo(Grupo grupo) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String updateClasse(Classe classe) {
		// TODO Auto-generated method stub
		return null;
	}

}
