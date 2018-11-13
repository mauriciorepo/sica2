package br.com.sica.suprimentos;

import java.io.File;

public class Produto {
	
	private int idprodutos;
	private String codigo;
	private String descricao;
	private String inclusao; //Date
	private String alteracao;//date
	private String inativo;//Date
	private String ativo;//char
	private File imagem;
	private String onu;
	private String ean;
	private float pesobruto;
	private float pesoliquido;
	private float area;
	private String localizacao;
	private String curvaabc;
	private String servico;
	private String lote;
	private String serie;
	private float estoqueminimo;
	private float estoquemax;
	private float lotecompra;
	private int validade;
	private float comissao;
	//private float icms;
	private float margem;
	private float precobase;
	private float precofornecedor;
	private float descontobase;
	public int getIdprodutos() {
		return idprodutos;
	}
	public void setIdprodutos(int idprodutos) {
		this.idprodutos = idprodutos;
	}
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getInclusao() {
		return inclusao;
	}
	public void setInclusao(String inclusao) {
		this.inclusao = inclusao;
	}
	public String getAlteracao() {
		return alteracao;
	}
	public void setAlteracao(String alteracao) {
		this.alteracao = alteracao;
	}
	public String getInativo() {
		return inativo;
	}
	public void setInativo(String inativo) {
		this.inativo = inativo;
	}
	public String getAtivo() {
		return ativo;
	}
	public void setAtivo(String ativo) {
		this.ativo = ativo;
	}
	public File getImagem() {
		return imagem;
	}
	public void setImagem(File imagem) {
		this.imagem = imagem;
	}
	public String getOnu() {
		return onu;
	}
	public void setOnu(String onu) {
		this.onu = onu;
	}
	public String getEan() {
		return ean;
	}
	public void setEan(String ean) {
		this.ean = ean;
	}
	public float getPesobruto() {
		return pesobruto;
	}
	public void setPesobruto(float pesobruto) {
		this.pesobruto = pesobruto;
	}
	public float getPesoliquido() {
		return pesoliquido;
	}
	public void setPesoliquido(float pesoliquido) {
		this.pesoliquido = pesoliquido;
	}
	public float getArea() {
		return area;
	}
	public void setArea(float area) {
		this.area = area;
	}
	public String getLocalizacao() {
		return localizacao;
	}
	public void setLocalizacao(String localizacao) {
		this.localizacao = localizacao;
	}
	public String getCurvaabc() {
		return curvaabc;
	}
	public void setCurvaabc(String curvaabc) {
		this.curvaabc = curvaabc;
	}
	public String getServico() {
		return servico;
	}
	public void setServico(String servico) {
		this.servico = servico;
	}
	public String getLote() {
		return lote;
	}
	public void setLote(String lote) {
		this.lote = lote;
	}
	public String getSerie() {
		return serie;
	}
	public void setSerie(String serie) {
		this.serie = serie;
	}
	public float getEstoqueminimo() {
		return estoqueminimo;
	}
	public void setEstoqueminimo(float estoqueminimo) {
		this.estoqueminimo = estoqueminimo;
	}
	public float getEstoquemax() {
		return estoquemax;
	}
	public void setEstoquemax(float estoquemax) {
		this.estoquemax = estoquemax;
	}
	public float getLotecompra() {
		return lotecompra;
	}
	public void setLotecompra(float lotecompra) {
		this.lotecompra = lotecompra;
	}
	public int getValidade() {
		return validade;
	}
	public void setValidade(int validade) {
		this.validade = validade;
	}
	public float getComissao() {
		return comissao;
	}
	public void setComissao(float comissao) {
		this.comissao = comissao;
	}
	public float getMargem() {
		return margem;
	}
	public void setMargem(float margem) {
		this.margem = margem;
	}
	public float getPrecobase() {
		return precobase;
	}
	public void setPrecobase(float precobase) {
		this.precobase = precobase;
	}
	public float getPrecofornecedor() {
		return precofornecedor;
	}
	public void setPrecofornecedor(float precofornecedor) {
		this.precofornecedor = precofornecedor;
	}
	public float getDescontobase() {
		return descontobase;
	}
	public void setDescontobase(float descontobase) {
		this.descontobase = descontobase;
	}
	public int getProdutoclasse_idprodutoclasse() {
		return produtoclasse_idprodutoclasse;
	}
	public void setProdutoclasse_idprodutoclasse(int produtoclasse_idprodutoclasse) {
		this.produtoclasse_idprodutoclasse = produtoclasse_idprodutoclasse;
	}
	public int getProdutogrupo_idprodutogrupo() {
		return produtogrupo_idprodutogrupo;
	}
	public void setProdutogrupo_idprodutogrupo(int produtogrupo_idprodutogrupo) {
		this.produtogrupo_idprodutogrupo = produtogrupo_idprodutogrupo;
	}
	private int    produtoclasse_idprodutoclasse;
	private int   produtogrupo_idprodutogrupo;
	
	
	

}
