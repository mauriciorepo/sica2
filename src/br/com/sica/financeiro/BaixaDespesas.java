package br.com.sica.financeiro;

public class BaixaDespesas {

	private int idbaixa_despesas;
	private String data_baixa;
	private float valor;
	private int despesas_id_despesa;
	private int contasbancarias_idcontasbancarias;
	private int parcelasapagar_idparcelasapagar;
	private int parcelasapagar_contasbancarias_idcontasbancarias;
	private int parcelasapagar_despesas_id_despesa;
	
	public int getIdbaixa_despesas() {
		return idbaixa_despesas;
	}
	public void setIdbaixa_despesas(int idbaixa_despesas) {
		this.idbaixa_despesas = idbaixa_despesas;
	}
	public String getData_baixa() {
		return data_baixa;
	}
	public void setData_baixa(String data_baixa) {
		this.data_baixa = data_baixa;
	}
	public float getValor() {
		return valor;
	}
	public void setValor(float valor) {
		this.valor = valor;
	}
	public int getDespesas_id_despesa() {
		return despesas_id_despesa;
	}
	public void setDespesas_id_despesa(int despesas_id_despesa) {
		this.despesas_id_despesa = despesas_id_despesa;
	}
	
	public int getParcelasapagar_idparcelasapagar() {
		return parcelasapagar_idparcelasapagar;
	}
	public void setParcelasapagar_idparcelasapagar(
			int parcelasapagar_idparcelasapagar) {
		this.parcelasapagar_idparcelasapagar = parcelasapagar_idparcelasapagar;
	}
	public int getParcelasapagar_contasbancarias_idcontasbancarias() {
		return parcelasapagar_contasbancarias_idcontasbancarias;
	}
	public void setParcelasapagar_contasbancarias_idcontasbancarias(
			int parcelasapagar_contasbancarias_idcontasbancarias) {
		this.parcelasapagar_contasbancarias_idcontasbancarias = parcelasapagar_contasbancarias_idcontasbancarias;
	}
	public void setContasbancarias_idcontasbancarias(
			int contasbancarias_idcontasbancarias) {
		this.contasbancarias_idcontasbancarias = contasbancarias_idcontasbancarias;
	}
	public int getContasbancarias_idcontasbancarias() {
		return contasbancarias_idcontasbancarias;
	}
	public void setParcelasapagar_despesas_id_despesa(
			int parcelasapagar_despesas_id_despesa) {
		this.parcelasapagar_despesas_id_despesa = parcelasapagar_despesas_id_despesa;
	}
	public int getParcelasapagar_despesas_id_despesa() {
		return parcelasapagar_despesas_id_despesa;
	}
}
