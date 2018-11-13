package br.com.sica.suprimentos;

public class Fornecedor {

	public static final String  FORNECEDOR_ATUALIZA="fornacedor_A";
	public static final String FORNECEDOR_EXCLUI="fornecedor_E";
	public static final String FORNECEDOR_INSERIR="fornecedor_I";
	public static final String FORNCEDOR_PESQUISA="fornecedor_P";
	//public static final String
	private int idfornecedores;
	private String fantasia;
    private String cpf;
	private String tipo;
	private String razaosocial;
	private int suframa;
	private String cidade;
	private String bairro;
	private String complemento;
	private String logradouro;
	private String uf;
	private String numero;
	private String ativo;
	private String rg;
	private String cep;
	private String cnpj;
	private String im;
	private String ie;
	private String telefone;
	private String telefone2;
	private float descontfin;
	private String optantesn;
	
	private String bloqueado;
	private float retpis;
	private float retinss;
	private float retconfins;
	private float retcsll;
	private float retirrf;
	private float descontoprod;
	private String homepage;
	private String datainc;
	private String databloqueio;
	private String datainativo;
	private String datainc2;
	private String tipoatividade;
	
	public String getUf() {
		return uf;
	}
	public void setUf(String uf) {
		this.uf = uf;
	}
	
	
	public String getIbge() {
		return ibge;
	}
	public void setIbge(String ibge) {
		this.ibge = ibge;
	}
	private String ibge;

	
	public String getDatainc2() {
		return datainc2;
	}
	public void setDatainc2(String datainc2) {
		this.datainc2 = datainc2;
	}


	
	public String getFantasia() {
		return fantasia;
	}
	public void setFantasia(String fantasia) {
		this.fantasia = fantasia;
	}

	public String getRazaosocial() {
		return razaosocial;
	}
	public void setRazaosocial(String razaosocial) {
		this.razaosocial = razaosocial;
	}
	public int getSuframa() {
		return suframa;
	}
	public void setSuframa(int suframa) {
		this.suframa = suframa;
	}
	public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
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
	public String getLogradouro() {
		return logradouro;
	}
	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getNumero() {
		return numero;
	}
	public void setNumero(String numero) {
		this.numero = numero;
	}
	public String getRg() {
		return rg;
	}
	public void setRg(String rg) {
		this.rg = rg;
	}
	public String getCep() {
		return cep;
	}
	public void setCep(String cep) {
		this.cep = cep;
	}
	public String getCnpj() {
		return cnpj;
	}
	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}
	
	
	public String getIm() {
		return im;
	}
	public void setIm(String im) {
		this.im = im;
	}

	public String getIe() {
		return ie;
	}
	public void setIe(String ie) {
		this.ie = ie;
	}
	public String getHomepage() {
		return homepage;
	}
	public void setHomepage(String homepage) {
		this.homepage = homepage;
	}
	public String getTelefone() {
		return telefone;
	}
	public float getDescontfin() {
		return descontfin;
	}
	public void setDescontfin(float descontfin) {
		this.descontfin = descontfin;
	}
	public float getRetpis() {
		return retpis;
	}
	public void setRetpis(float retpis) {
		this.retpis = retpis;
	}
	public float getRetinss() {
		return retinss;
	}
	public void setRetinss(float retinss) {
		this.retinss = retinss;
	}
	public float getRetconfins() {
		return retconfins;
	}
	public void setRetconfins(float retconfins) {
		this.retconfins = retconfins;
	}
	public float getRetcsll() {
		return retcsll;
	}
	public void setRetcsll(float retcsll) {
		this.retcsll = retcsll;
	}
	public float getRetirrf() {
		return retirrf;
	}
	public void setRetirrf(float retirrf) {
		this.retirrf = retirrf;
	}
	public float getDescontoprod() {
		return descontoprod;
	}
	public void setDescontoprod(float descontoprod) {
		this.descontoprod = descontoprod;
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
	public void setBloqueado(String string) {
		this.bloqueado = string;
	}

	public String getBloqueado() {
		return bloqueado;
	}
	public String getDatainc() {
		return datainc;
	}
	public void setDatainc(String datainc) {
		this.datainc = datainc;
	}
	public String getDatabloqueio() {
		return databloqueio;
	}
	public void setDatabloqueio(String databloqueio) {
		this.databloqueio = databloqueio;
	}
	public String getDatainativo() {
		return datainativo;
	}
	public void setDatainativo(String datainativo) {
		this.datainativo = datainativo;
	}
	
	public void setAtivo(String ativo) {
		this.ativo = ativo;
	}
	public String getAtivo() {
		return ativo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public String getTipo() {
		return tipo;
	}
	public void setOptantesn(String optantesn) {
		this.optantesn = optantesn;
	}
	public String getOptantesn() {
		return optantesn;
	}
	public void setIdfornecedores(int idfornencedores) {
		this.idfornecedores = idfornencedores;
	}
	public int getIdfornecedores() {
		return idfornecedores;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	public String getCpf() {
		return cpf;
	}
	public void setTipoatividade(String tipoatividade) {
		this.tipoatividade = tipoatividade;
	}
	public String getTipoatividade() {
		return tipoatividade;
	}
	


}