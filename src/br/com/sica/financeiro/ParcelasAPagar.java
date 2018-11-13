package br.com.sica.financeiro;

public class ParcelasAPagar {

	private int idparcelasapagar;
	private int despesas_id_despesa;
	private int contasbancarias_idcontasbancarias;
	private String meiopagamento;
	private int numparcela;
	private String vencimento;
	private float valor;
	public int getIdparcelasapagar() {
		return idparcelasapagar;
	}
	public void setIdparcelasapagar(int idparcelasapagar) {
		this.idparcelasapagar = idparcelasapagar;
	}
	public int getDespesas_id_despesa() {
		return despesas_id_despesa;
	}
	public void setDespesas_id_despesa(int despesas_id_despesa) {
		this.despesas_id_despesa = despesas_id_despesa;
	}
	public int getContasbancarias_idcontasbancarias() {
		return contasbancarias_idcontasbancarias;
	}
	public void setContasbancarias_idcontasbancarias(
			int contasbancarias_idcontasbancarias) {
		this.contasbancarias_idcontasbancarias = contasbancarias_idcontasbancarias;
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
}
