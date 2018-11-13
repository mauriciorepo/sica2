package br.com.sica.gerais;

public class Filiais {
    private int idfiliais;
    private String razao;
    private String fantasia;
    private String cnpj;
    private String inscricaoestadual;
    private String inscricaomunicipal;
    public String getCnpj() {
		return cnpj;
	}
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	public String getInscricaoestadual() {
		return inscricaoestadual;
	}
	public void setInscricaoestadual(String inscricaoestadual) {
		this.inscricaoestadual = inscricaoestadual;
	}
	public String getInscricaomunicipal() {
		return inscricaomunicipal;
	}
	public void setInscricaomunicipal(String inscricaomunicipal) {
		this.inscricaomunicipal = inscricaomunicipal;
	}
	private String cep;
    private String logradouro;
    private String bairro;
    private String complemento;
    //private String email;
    
    public int getIdfiliais() {
		return idfiliais;
	}
	public void setIdfiliais(int idfiliais) {
		this.idfiliais = idfiliais;
	}
	public String getRazao() {
		return razao;
	}
	public void setRazao(String razao) {
		this.razao = razao;
	}
	public String getFantasia() {
		return fantasia;
	}
	public void setFantasia(String fantasia) {
		this.fantasia = fantasia;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public String getLogradouro() {
		return logradouro;
	}
	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}
	public String getBairro() {
		return bairro;
	}
	public void setBairro(String bairro) {
		this.bairro = bairro;
	}
	public String getComplemento() {
		return complemento;
	}
	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
	}
	public String getUf() {
		return uf;
	}
	public void setUf(String uf) {
		this.uf = uf;
	}
	public int getFirma_idfirma() {
		return firma_idfirma;
	}
	public void setFirma_idfirma(int firma_idfirma) {
		this.firma_idfirma = firma_idfirma;
	}
	private String cidade;
    private String uf;
    private int firma_idfirma;

}
