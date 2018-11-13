package br.com.sica.budget;

/*     */ import java.math.BigDecimal;
/*     */ import java.util.ArrayList;
/*     */ import java.util.List;
/*     */ 
/*     */ public class Servico
/*     */ {
/*     */   private int id_sol_servico;
/*     */   private int fk_id_empresa;
/*     */   private String areas;
/*     */   private int hora_despesa;
/*     */   private int material_despesa;
/*     */   private String situacao;
/*     */   private String solicitante;
/*     */   private String maquina;
/*     */   private String peca;
/*     */   private String data_emissao;
/*     */   private int FK_servico_usuario;
/*     */   private String titulo;
/*     */   private String entregue;
/*     */   private String num_solicitacao;
/*     */   private float valor_material;
/*     */   private String observacao;
/*     */   private int porcentagem;
/*     */   private String pedido;
/*     */   private BigDecimal valtot;
/*     */   private boolean aval;
/*  29 */   private Dados_Solicitacao servicos = null;
/*  30 */   private List<Dados_Solicitacao> listServicos = new ArrayList();
/*     */   private String desc_solicitacao;
/*     */ 
/*     */   public boolean isAval()
/*     */   {
/*  35 */     return this.aval;
/*     */   }
/*     */ 
/*     */   public void setAval(boolean aval) {
/*  39 */     this.aval = aval;
/*     */   }
/*     */ 
/*     */   public String getPedido()
/*     */   {
/*  45 */     return this.pedido;
/*     */   }
/*     */ 
/*     */   public BigDecimal getValtot() {
/*  49 */     return this.valtot;
/*     */   }
/*     */   public void setValtot(BigDecimal valtot) {
/*  52 */     this.valtot = valtot;
/*     */   }
/*     */ 
/*     */   public void setPedido(String pedido) {
/*  56 */     this.pedido = pedido;
/*     */   }
/*     */ 
/*     */   public int c() {
/*  60 */     return this.porcentagem;
/*     */   }
/*     */ 
/*     */   public void setPorcentagem(int porcentagem) {
/*  64 */     this.porcentagem = porcentagem;
/*     */   }
/*     */ 
/*     */   public float getValor_material() {
/*  68 */     return this.valor_material;
/*     */   }
/*     */ 
/*     */   public void setValor_material(float valor_material) {
/*  72 */     this.valor_material = valor_material;
/*     */   }
/*     */ 
/*     */   public String getObservacao() {
/*  76 */     return this.observacao;
/*     */   }
/*     */ 
/*     */   public void setObservacao(String observacao) {
/*  80 */     this.observacao = observacao;
/*     */   }
/*     */ 
/*     */   public String getNum_solicitacao()
/*     */   {
/*  85 */     return this.num_solicitacao;
/*     */   }
/*     */ 
/*     */   public void setNum_solicitacao(String num_solicitacao) {
/*  89 */     this.num_solicitacao = num_solicitacao;
/*     */   }
/*     */ 
/*     */   public String getEntregue() {
/*  93 */     return this.entregue;
/*     */   }
/*     */ 
/*     */   public void setEntregue(String entregue) {
/*  97 */     this.entregue = entregue;
/*     */   }
/*     */ 
/*     */   public String getTitulo() {
/* 101 */     return this.titulo;
/*     */   }
/*     */ 
/*     */   public void setTitulo(String titulo) {
/* 105 */     this.titulo = titulo;
/*     */   }
/*     */ 
/*     */   public int getFK_servico_usuario() {
/* 109 */     return this.FK_servico_usuario;
/*     */   }
/*     */ 
/*     */   public void setFK_servico_usuario(int fk_servico_usuario) {
/* 113 */     this.FK_servico_usuario = fk_servico_usuario;
/*     */   }
/*     */ 
/*     */   public Dados_Solicitacao getServicos()
/*     */   {
/* 118 */     return this.servicos;
/*     */   }
/*     */ 
/*     */   public void setServicos(Dados_Solicitacao servicos) {
/* 122 */     this.servicos = servicos;
/*     */   }
/*     */ 
/*     */   public List<Dados_Solicitacao> getListServicos() {
/* 126 */     return this.listServicos;
/*     */   }
/*     */ 
/*     */   public void setListServicos(List<Dados_Solicitacao> listServicos) {
/* 130 */     this.listServicos = listServicos;
/*     */   }
/*     */ 
/*     */   public int getId_sol_servico() {
/* 134 */     return this.id_sol_servico;
/*     */   }
/*     */ 
/*     */   public void setId_sol_servico(int id_sol_servico) {
/* 138 */     this.id_sol_servico = id_sol_servico;
/*     */   }
/*     */ 
/*     */   public int getFk_id_empresa() {
/* 142 */     return this.fk_id_empresa;
/*     */   }
/*     */ 
/*     */   public void setFk_id_empresa(int fk_id_empresa) {
/* 146 */     this.fk_id_empresa = fk_id_empresa;
/*     */   }
/*     */ 
/*     */   public String getAreas()
/*     */   {
/* 151 */     return this.areas;
/*     */   }
/*     */ 
/*     */   public void setAreas(String areas) {
/* 155 */     this.areas = areas;
/*     */   }
/*     */ 
/*     */   public int getHora_despesa() {
/* 159 */     return this.hora_despesa;
/*     */   }
/*     */ 
/*     */   public void setHora_despesa(int hora_despesa) {
/* 163 */     this.hora_despesa = hora_despesa;
/*     */   }
/*     */ 
/*     */   public int getMaterial_despesa() {
/* 167 */     return this.material_despesa;
/*     */   }
/*     */ 
/*     */   public void setMaterial_despesa(int material_despesa) {
/* 171 */     this.material_despesa = material_despesa;
/*     */   }
/*     */ 
/*     */   public String getSituacao() {
/* 175 */     return this.situacao;
/*     */   }
/*     */ 
/*     */   public void setSituacao(String situacao) {
/* 179 */     this.situacao = situacao;
/*     */   }
/*     */ 
/*     */   public String getSolicitante() {
/* 183 */     return this.solicitante;
/*     */   }
/*     */ 
/*     */   public void setSolicitante(String solicitante) {
/* 187 */     this.solicitante = solicitante;
/*     */   }
/*     */ 
/*     */   public String getMaquina() {
/* 191 */     return this.maquina;
/*     */   }
/*     */ 
/*     */   public void setMaquina(String maquina) {
/* 195 */     this.maquina = maquina;
/*     */   }
/*     */ 
/*     */   public String getPeca() {
/* 199 */     return this.peca;
/*     */   }
/*     */ 
/*     */   public void setPeca(String peca) {
/* 203 */     this.peca = peca;
/*     */   }
/*     */ 
/*     */   public String getData_emissao() {
/* 207 */     return this.data_emissao;
/*     */   }
/*     */ 
/*     */   public void setData_emissao(String data_emissao) {
/* 211 */     this.data_emissao = data_emissao;
/*     */   }
/*     */ 
/*     */   public String getDesc_solicitacao() {
/* 215 */     return this.desc_solicitacao;
/*     */   }
/*     */ 
/*     */   public void setDesc_solicitacao(String desc_solicitacao) {
/* 219 */     this.desc_solicitacao = desc_solicitacao;
/*     */   }
/*     */ }

