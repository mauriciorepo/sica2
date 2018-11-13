package br.com.sica.suprimentos;

public class ContatoFornecedor {
    private int idcontatofornecedor;
    private int fornecedores_idfornecedores;
    private String nome;
	private String cargo;
	private String email;
	private String telefone;
	private String telefone2;
    
    public int getIdcontatofornecedor() {
		return idcontatofornecedor;
	}
	public void setIdcontatofornecedor(int idcontatofornecedor) {
		this.idcontatofornecedor = idcontatofornecedor;
	}
	public int getFornecedores_idfornecedores() {
		return fornecedores_idfornecedores;
	}
	public void setFornecedores_idfornecedores(int fornecedores_idfornecedores) {
		this.fornecedores_idfornecedores = fornecedores_idfornecedores;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCargo() {
		return cargo;
	}
	public void setCargo(String cargo) {
		this.cargo = cargo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getTelefone2() {
		return telefone2;
	}
	public void setTelefone2(String telefone2) {
		this.telefone2 = telefone2;
	}
	
}
