package br.com.sica.security;

public class Usuario {
    private int id_usuario;
    private String nome_usuario;
    private String senha;
    private String nivel;
    private String email;
    private String login;
    private String ativo;
    private int filiais_firma_idfirma;
    private int filiais_idfiliais;

    public String getAtivo() {
		return ativo;
	}

	public void setAtivo(String ativo) {
		this.ativo = ativo;
	}

	public int getId_usuario() {
		return id_usuario;
	}

	public void setId_usuario(int id_usuario) {
		this.id_usuario = id_usuario;
	}

	public String getNome_usuario() {
		return nome_usuario;
	}

	public void setNome_usuario(String nome_usuario) {
		this.nome_usuario = nome_usuario;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getNivel() {
		return nivel;
	}

	public void setNivel(String nivel) {
		this.nivel = nivel;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public int getFiliais_firma_idfirma() {
		return filiais_firma_idfirma;
	}

	public void setFiliais_firma_idfirma(int filiais_firma_idfirma) {
		this.filiais_firma_idfirma = filiais_firma_idfirma;
	}

	public int getFiliais_idfiliais() {
		return filiais_idfiliais;
	}

	public void setFiliais_idfiliais(int filiais_idfiliais) {
		this.filiais_idfiliais = filiais_idfiliais;
	}


    
}
