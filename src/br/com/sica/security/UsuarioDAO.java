package br.com.sica.security;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import javax.swing.text.StyledEditorKit.BoldAction;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import br.com.sica.connection.IDAO;
import br.com.sica.connection.IPool;

import br.com.sica.security.Usuario;


public class UsuarioDAO implements IDAO<Usuario> {

	private IPool pool;
	
	public UsuarioDAO(IPool pool){
		this.pool=pool;
	}
	
	public boolean validaUsuarioSession(String senha,String login){
		PreparedStatement stmt=null;
		ResultSet rs=null;
		Connection con=pool.getConnection();
		try {
			stmt=con.prepareStatement("select * from usuario where login=? and senha=?");
			stmt.setString(1,senha );
			stmt.setString(2, login);
			rs=stmt.executeQuery();
			if(rs.next()){
				stmt.close();
			       rs.close();
			       pool.liberarConnection(con);
			       
				return true;
			}
			return false;
		} catch (Exception e) {
			//stmt.close();
		      // rs.close();
		       pool.liberarConnection(con);
		       
			e.printStackTrace();
			return false;
		}
		
	}
	
	public Usuario logarUsuario(String login, String senha) {
		     PreparedStatement stmt = null;
		     ResultSet rs = null;
		     
		     Connection con=pool.getConnection();	 
		     Usuario usuario = null;
		     try {
				
		    	 stmt = con.prepareStatement("select * from usuario where login=? and senha=?;");
		    	 stmt.setString(1, login);
			     stmt.setString(2, senha);
			     rs = stmt.executeQuery();
			
			     
			 
			     if (rs.next())
			    {
			      
				           usuario = new Usuario();
			 
			       

			      System.out.println(rs.getString("senha"));
			       usuario.setNome_usuario(rs.getString("nome_usuario"));
			       usuario.setId_usuario(rs.getInt("id_usuario"));
			       usuario.setLogin(rs.getString("login"));
			      usuario.setSenha(rs.getString("senha"));
			       usuario.setNivel(rs.getString("nivel"));
			       usuario.setFiliais_firma_idfirma(rs.getInt("filiais_firma_idfirma"));
			    usuario.setFiliais_idfiliais(rs.getInt("filiais_idfiliais"));
			       stmt.close();
			       rs.close();
			       pool.liberarConnection(con);
			                
			       	ApplicationContext appCtx = new ClassPathXmlApplicationContext("classpath:applicationContext.xml");

			       return usuario;
			     }
 
		     } catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		    		//return null;
			return usuario;
	}

	@Override
	public String cadastrar(Usuario entidade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object update(Usuario entidade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object excluir(Usuario entidade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Usuario> find(Usuario entidade) {
		// TODO Auto-generated method stub
		return null;
	}

}
