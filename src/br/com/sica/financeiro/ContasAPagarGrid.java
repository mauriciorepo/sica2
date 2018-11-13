package br.com.sica.financeiro;

public class ContasAPagarGrid {
	private String razaosocial;
	private String fantasia;
	private String meiopagamento;
	private int numparcela;
	private int despesas_id_despesa;
	private String vencimento;
	private float valor;
	private int fornecedores_idfornecedores;
	private float valortotal;
	private String tipodocumento;
	private int parcelas;
	private String num_nota;
	private float pago;
	private int idparcelasapagar;
	
	
	public int getDespesas_id_despesa() {
		return despesas_id_despesa;
	}
	public void setDespesas_id_despesa(int despesas_id_despesa) {
		this.despesas_id_despesa = despesas_id_despesa;
	}
	
	public String getNum_nota() {
		return num_nota;
	}
	public void setNum_nota(String num_nota) {
		this.num_nota = num_nota;
	}
	public String getMeiopagamento() {
		return meiopagamento;
	}
	public void setMeiopagamento(String meiopagamento) {
		this.meiopagamento = meiopagamento;
	}
	public int getNumparcela() {
		return numparcela;
	}
	public void setNumparcela(int numparcela) {
		this.numparcela = numparcela;
	}
	public String getVencimento() {
		return vencimento;
	}
	public void setVencimento(String vencimento) {
		this.vencimento = vencimento;
	}
	public float getValor() {
		return valor;
	}
	public void setValor(float valor) {
		this.valor = valor;
	}
	public int getFornecedores_idfornecedores() {
		return fornecedores_idfornecedores;
	}
	public void setFornecedores_idfornecedores(int fornecedores_idfornecedores) {
		this.fornecedores_idfornecedores = fornecedores_idfornecedores;
	}
	public float getValortotal() {
		return valortotal;
	}
	public void setValortotal(float valortotal) {
		this.valortotal = valortotal;
	}
	public String getTipodocumento() {
		return tipodocumento;
	}
	public void setTipodocumento(String tipodocumento) {
		this.tipodocumento = tipodocumento;
	}
	public int getParcelas() {
		return parcelas;
	}
	public void setParcelas(int parcelas) {
		this.parcelas = parcelas;
	}
	public void setFantasia(String fantasia) {
		this.fantasia = fantasia;
	}
	public String getFantasia() {
		return fantasia;
	}
	public void setRazaosocial(String razaosocial) {
		this.razaosocial = razaosocial;
	}
	public String getRazaosocial() {
		return razaosocial;
	}
	public void setPago(float pago) {
		this.pago = pago;
	}
	public float getPago() {
		return pago;
	}
	public void setIdparcelasapagar(int idparcelasapagar) {
		this.idparcelasapagar = idparcelasapagar;
	}
	public int getIdparcelasapagar() {
		return idparcelasapagar;
	}
	
	
}
