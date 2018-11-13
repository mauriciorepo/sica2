package br.com.sica.financeiro;

public class RateioPlanoCentroContasaPagar {

	private int idrateioplanocentrocontasapagar;
	private int despesas_id_despesa;
	private int centrodecusto_idcentrodecusto;
	private int planodecontas_idplanodecontas;
	private float valor;
	private String observacao;
	
	
	
	
	public int getIdrateioplanocentrocontasapagar() {
		return idrateioplanocentrocontasapagar;
	}
	public void setIdrateioplanocentrocontasapagar(
			int idrateioplanocentrocontasapagar) {
		this.idrateioplanocentrocontasapagar = idrateioplanocentrocontasapagar;
	}
	public int getDespesas_id_despesa() {
		return despesas_id_despesa;
	}
	public void setDespesas_id_despesa(int despesas_id_despesa) {
		this.despesas_id_despesa = despesas_id_despesa;
	}
	public int getCentrodecusto_idcentrodecusto() {
		return centrodecusto_idcentrodecusto;
	}
	public void setCentrodecusto_idcentrodecusto(int centrodecusto_idcentrodecusto) {
		this.centrodecusto_idcentrodecusto = centrodecusto_idcentrodecusto;
	}
	public int getPlanodecontas_idplanodecontas() {
		return planodecontas_idplanodecontas;
	}
	public void setPlanodecontas_idplanodecontas(int planodecontas_idplanodecontas) {
		this.planodecontas_idplanodecontas = planodecontas_idplanodecontas;
	}
	public float getValor() {
		return valor;
	}
	public void setValor(float valor) {
		this.valor = valor;
	}
	public String getObservacao() {
		return observacao;
	}
	public void setObservacao(String observacao) {
		this.observacao = observacao;
	}
	
}
