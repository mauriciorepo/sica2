package br.com.sica.financeiro;

public class ContaBancaria {

	public static final String CONTABANCARIA="contabancaria";
	public static final String CONTABANCARIA_I="contabancaria_I";
	public static final String CONTABANCARIA_E="contabancaria_E";
    public static final String CONTABANCARIA_A="contabancaria_A";
    
    private int idcontasbancarias;
    private String bancos_codbacen;
    private String agencia;
    private String dvconta;
    private String dvagencia;
    private String conta;
    private String cheque;
    private int firma_idfirma;
    private int filiais_idfiliais;
    private String telefone;
    private String nome;
    private String tipoconta;
    private String datasaldoabertura;
    private float valorsaldoabertura;
    private String vencimentolimite;
    private float limitecredito;
    private String inclui;
    
	public int getIdcontasbancarias() {
		return idcontasbancarias;
	}
	public void setIdcontasbancarias(int idcontasbancarias) {
		this.idcontasbancarias = idcontasbancarias;
	}
	public String getAgencia() {
		return agencia;
	}
	public void setAgencia(String agencia) {
		this.agencia = agencia;
	}
	public String getConta() {
		return conta;
	}
	public void setConta(String conta) {
		this.conta = conta;
	}
	public String getCheque() {
		return cheque;
	}
	public void setCheque(String cheque) {
		this.cheque = cheque;
	}
	public int getFirma_idfirma() {
		return firma_idfirma;
	}
	public void setFirma_idfirma(int firma_idfirma) {
		this.firma_idfirma = firma_idfirma;
	}
	public int getFiliais_idfiliais() {
		return filiais_idfiliais;
	}
	public void setFiliais_idfiliais(int filiais_idfiliais) {
		this.filiais_idfiliais = filiais_idfiliais;
	}
	public String getTelefone() {
		return telefone;
	}
	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getTipoconta() {
		return tipoconta;
	}
	public void setTipoconta(String tipoconta) {
		this.tipoconta = tipoconta;
	}
	public String getDatasaldoabertura() {
		return datasaldoabertura;
	}
	public void setDatasaldoabertura(String datasaldoabertura) {
		this.datasaldoabertura = datasaldoabertura;
	}
	public float getValorsaldoabertura() {
		return valorsaldoabertura;
	}
	public void setValorsaldoabertura(float valorsaldoabertura) {
		this.valorsaldoabertura = valorsaldoabertura;
	}
	public String getVencimentolimite() {
		return vencimentolimite;
	}
	public void setVencimentolimite(String vencimentolimite) {
		this.vencimentolimite = vencimentolimite;
	}
	public float getLimitecredito() {
		return limitecredito;
	}
	public void setLimitecredito(float limitecredito) {
		this.limitecredito = limitecredito;
	}
	
	public void setBancos_codbacen(String bancos_codbacen) {
		this.bancos_codbacen = bancos_codbacen;
	}
	public String getBancos_codbacen() {
		return bancos_codbacen;
	}
	public void setInclui(String inclui) {
		this.inclui = inclui;
	}
	public String getInclui() {
		return inclui;
	}
	public void setDvconta(String dvconta) {
		this.dvconta = dvconta;
	}
	public String getDvconta() {
		return dvconta;
	}
	public void setDvagencia(String dvagencia) {
		this.dvagencia = dvagencia;
	}
	public String getDvagencia() {
		return dvagencia;
	}
}
