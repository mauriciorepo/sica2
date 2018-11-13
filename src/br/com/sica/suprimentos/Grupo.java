package br.com.sica.suprimentos;

public class Grupo {

	private String idprodutogrupo;
	private String descricao;
	private String data;
	private String cod;
	
	
	
	
	
	public String getData() {
		return data;
	}
	public void setData(String data) {
		this.data = data;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setIdprodutogrupo(String idprodutogrupo) {
		this.idprodutogrupo = idprodutogrupo;
	}
	public String getIdprodutogrupo() {
		return idprodutogrupo;
	}
	public void setCod(String cod) {
		this.cod = cod;
	}
	public String getCod() {
		return cod;
	}
}
