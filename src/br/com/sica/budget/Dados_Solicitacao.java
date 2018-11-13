package br.com.sica.budget;

public class Dados_Solicitacao
{
	private int id_dados_solicitacao;
	private int fk_id_solicitacao;
	private int codg;
	private float valor;
	private String desc_dados;
	private int qt_desc;
	private String situacao;
	private boolean h_extra;
	private int item;
	private int solicitacao_servico_id_sol_servico;

	public int getItem()
	{
		return this.item;
	}
	public void setItem(int item) {
		this.item = item;
	}
	public boolean isH_extra() {
		return this.h_extra;
	}
	public void setH_extra(boolean h_extra) {
		this.h_extra = h_extra;
	}
	public String getSituacao() {
		return this.situacao;
	}
	public void setSituacao(String situacao) {
		this.situacao = situacao;
	}
	public int getId_dados_solicitacao() {
		return this.id_dados_solicitacao;
	}
	public void setId_dados_solicitacao(int id_dados_solicitacao) {
		this.id_dados_solicitacao = id_dados_solicitacao;
	}
	public int getFk_id_solicitacao() {
		return this.fk_id_solicitacao;
	}
	public void setFk_id_solicitacao(int fk_id_solicitacao) {
		this.fk_id_solicitacao = fk_id_solicitacao;
	}

	public int getCodg() {
		return this.codg;
	}
	public void setCodg(int codg) {
		this.codg = codg;
	}
	public float getValor() {
		return this.valor;
	}
	public void setValor(float valor) {
		this.valor = valor;
	}
	public String getDesc_dados() {
		return this.desc_dados;
	}
	public void setDesc_dados(String desc_dados) {
		this.desc_dados = desc_dados;
	}
	public int getQt_desc() {
		return this.qt_desc;
	}
	public void setQt_desc(int qt_desc) {
		this.qt_desc = qt_desc;
	}
	public void setSolicitacao_servico_id_sol_servico(
			int solicitacao_servico_id_sol_servico) {
		this.solicitacao_servico_id_sol_servico = solicitacao_servico_id_sol_servico;
	}
	public int getSolicitacao_servico_id_sol_servico() {
		return solicitacao_servico_id_sol_servico;
	}
}
