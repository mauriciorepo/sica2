package br.com.sica.financeiro;

import java.util.ArrayList;
import java.util.List;

public class ContasAPagar {
	private int id_despesa;
	private int fornecedores_idfornecedores;
	private int filiais_idfiliais;
	private String num_nota;
	private String data_emissao;
	
	private float juros;
	private  String competencia;
	private float desconto;
	private int parcelas;
	private String descricao;
	
	private float valortotal;
	private String tipodocumento;
	private float multa;
	List<ParcelasAPagar> listParcelas=new ArrayList<ParcelasAPagar>();
	 
	List<RateioPlanoCentroContasaPagar> listReateioPlano =new ArrayList<RateioPlanoCentroContasaPagar>();
	
	
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public int getId_despesa() {
		return id_despesa;
	}
	public void setId_despesa(int id_despesa) {
		this.id_despesa = id_despesa;
	}
	public String getData_emissao() {
		return data_emissao;
	}
	public void setData_emissao(String data_emissao) {
		this.data_emissao = data_emissao;
	}
	public int getFornecedores_idfornecedores() {
		return fornecedores_idfornecedores;
	}
	public void setFornecedores_idfornecedores(int fornecedores_idfornecedores) {
		this.fornecedores_idfornecedores = fornecedores_idfornecedores;
	}
	public int getParcelas() {
		return parcelas;
	}
	public void setParcelas(int parcelas) {
		this.parcelas = parcelas;
	}
	public int getFiliais_idfiliais() {
		return filiais_idfiliais;
	}
	public void setFiliais_idfiliais(int filiais_idfiliais) {
		this.filiais_idfiliais = filiais_idfiliais;
	}
	public String getNum_nota() {
		return num_nota;
	}
	public void setNum_nota(String num_nota) {
		this.num_nota = num_nota;
	}
	public float getJuros() {
		return juros;
	}
	public void setJuros(float juros) {
		this.juros = juros;
	}
	public String getCompetencia() {
		return competencia;
	}
	public void setCompetencia(String competencia) {
		this.competencia = competencia;
	}
	public float getDesconto() {
		return desconto;
	}
	public void setDesconto(float desconto) {
		this.desconto = desconto;
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
	public float getMulta() {
		return multa;
	}
	public void setMulta(float multa) {
		this.multa = multa;
	}
	public List<ParcelasAPagar> getListParcelas() {
		return listParcelas;
	}
	public void setListParcelas(List<ParcelasAPagar> listParcelas) {
		this.listParcelas = listParcelas;
	}
	public List<RateioPlanoCentroContasaPagar> getListReateioPlano() {
		return listReateioPlano;
	}
	public void setListReateioPlano(
			List<RateioPlanoCentroContasaPagar> listReateioPlano) {
		this.listReateioPlano = listReateioPlano;
	}
	
}
