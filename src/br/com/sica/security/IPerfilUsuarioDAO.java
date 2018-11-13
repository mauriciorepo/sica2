package br.com.sica.security;

import java.util.List;

public interface IPerfilUsuarioDAO {
	
	public String cadastrarPerfilUsuario(PerfilUsuario perfil);
	
	public String updatePerfilUsuario(PerfilUsuario perfil);
	
	public String deletePerfilString(PerfilUsuario perfil);
	
	public PerfilUsuario findPerfilUsuario(PerfilUsuario perfil);

}
