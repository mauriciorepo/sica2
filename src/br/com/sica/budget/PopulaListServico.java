package br.com.sica.budget;

import java.math.BigDecimal;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.mysql.jdbc.ResultSet;
import br.com.sica.budget.Dados_Solicitacao;
import br.com.sica.budget.Servico;

public class PopulaListServico {


	public List<Servico> populaListServico(ResultSet rs){
		List<Servico> Solicitacao = new ArrayList();
		int val = 0;






		List listdados = new ArrayList();

		int num = 0;

		int id_sol_servico = 0;
		int Fk_id_empresa = 0;
		String areas = "";
		String situacao = "";
		String maquina = "";
		String peca = "";
		String solicitante = "";
		int fk_servico_usuario = 0;
		String data_emissao = "";
		String desc_solicitacao = "";
		String titulo = "";
		String entregue = "";
		int porcentagem = 0;
		String pedido = "";
		String desc_dados = "";
		int fk_id_solicitacao = 0;
		int Qt_desc = 0;
		String sol_situacao = "";
		String num_solicitacao = "";
		int codg = 0;
		float valor = 0.0F;
		float valor_material = 0.0F;
		int item = 0;
		String observacao = "";
		boolean h_extra = false;
		boolean aval = false;

		BigDecimal valtot = new BigDecimal(0.0D);
		BigDecimal valor1 = new BigDecimal(0.0D);
		BigDecimal qt1 = new BigDecimal(0.0D);
		BigDecimal val_mat = new BigDecimal(0.0D);
		Servico sol = new Servico();


		try {




			while (rs.next()) {
				sol = new Servico();
				Dados_Solicitacao dados = new Dados_Solicitacao();

				if (rs.isFirst())
				{
					valor1 = BigDecimal.valueOf(rs.getFloat("valor"));
					qt1 = BigDecimal.valueOf(rs.getLong("qt_desc"));

					valtot = valtot.add(valor1.multiply(qt1));
					sol.setId_sol_servico(rs.getInt("id_sol_servico"));
					sol.setFk_id_empresa(rs.getInt("fk_id_empresa"));
					sol.setAreas(rs.getString("areas"));
					sol.setSituacao(rs.getString("situacao"));
					sol.setMaquina(rs.getString("maquina"));
					sol.setPeca(rs.getString("peca"));
					sol.setSolicitante(rs.getString("solicitante"));
					sol.setFK_servico_usuario(rs.getInt("fk_servico_usuario"));
					sol.setData_emissao(rs.getString("data_emissao"));
					sol.setDesc_solicitacao(rs.getString("desc_solicitacao"));
					sol.setTitulo(rs.getString("titulo"));
					sol.setEntregue(rs.getString("entregue"));
					sol.setNum_solicitacao(rs.getString("num_solicitacao"));
					sol.setValor_material(rs.getFloat("valor_material"));
					sol.setObservacao(rs.getString("observacao"));
					sol.setPorcentagem(rs.getInt("porcentagem"));
					sol.setPedido(rs.getString("pedido"));
					sol.setAval(rs.getBoolean("aval"));

					id_sol_servico = rs.getInt("id_sol_servico");
					Fk_id_empresa = rs.getInt("fk_id_empresa");
					areas = rs.getString("areas");
					situacao = rs.getString("situacao");
					maquina = rs.getString("maquina");
					peca = rs.getString("peca");
					solicitante = rs.getString("solicitante");
					fk_servico_usuario = rs.getInt("fk_servico_usuario");
					data_emissao = rs.getString("data_emissao");
					desc_solicitacao = rs.getString("desc_solicitacao");
					titulo = rs.getString("titulo");
					entregue = rs.getString("entregue");
					num_solicitacao = rs.getString("num_solicitacao");
					valor_material = rs.getFloat("valor_material");
					observacao = rs.getString("observacao");
					porcentagem = rs.getInt("porcentagem");
					pedido = rs.getString("pedido");
					aval = rs.getBoolean("aval");

					dados.setDesc_dados(rs.getString("descricao"));
					dados.setQt_desc(rs.getInt("qt_desc"));
					dados.setFk_id_solicitacao(rs.getInt("fk_id_solicitacao"));
					dados.setSituacao(rs.getString("sol_situacao"));
					dados.setCodg(rs.getInt("codg"));
					dados.setValor(rs.getFloat("valor"));
					dados.setItem(rs.getInt("item"));
					dados.setH_extra(rs.getBoolean("h_extra"));

					desc_dados = rs.getString("descricao");
					Qt_desc = rs.getInt("qt_desc");
					fk_id_solicitacao = rs.getInt("fk_id_solicitacao");
					sol_situacao = rs.getString("sol_situacao");
					codg = rs.getInt("codg");
					valor = rs.getFloat("valor");
					item = rs.getInt("item");
					h_extra = rs.getBoolean("h_extra");
					if (rs.isLast())
					{
						sol.setValtot(valtot);

						listdados.add(dados);
						sol.setListServicos(listdados);
						Solicitacao.add(sol);
						valtot = new BigDecimal(0.0D);
					}
					else {
						listdados.add(dados);
					}

				}
				else if (val == rs.getInt("fk_id_solicitacao"))
				{
					sol.setId_sol_servico(rs.getInt("id_sol_servico"));
					sol.setFk_id_empresa(rs.getInt("fk_id_empresa"));
					sol.setAreas(rs.getString("areas"));
					sol.setSituacao(rs.getString("situacao"));
					sol.setMaquina(rs.getString("maquina"));
					sol.setPeca(rs.getString("peca"));
					sol.setSolicitante(rs.getString("solicitante"));
					sol.setFK_servico_usuario(rs.getInt("fk_servico_usuario"));
					sol.setData_emissao(rs.getString("data_emissao"));
					sol.setDesc_solicitacao(rs.getString("desc_solicitacao"));
					sol.setTitulo(rs.getString("titulo"));
					sol.setEntregue(rs.getString("entregue"));
					sol.setNum_solicitacao(rs.getString("num_solicitacao"));
					sol.setValor_material(rs.getFloat("valor_material"));
					sol.setObservacao(rs.getString("observacao"));
					sol.setPorcentagem(rs.getInt("porcentagem"));
					sol.setPedido(rs.getString("pedido"));
					sol.setAval(rs.getBoolean("aval"));

					id_sol_servico = rs.getInt("id_sol_servico");
					Fk_id_empresa = rs.getInt("fk_id_empresa");
					areas = rs.getString("areas");
					situacao = rs.getString("situacao");
					maquina = rs.getString("maquina");
					peca = rs.getString("peca");
					solicitante = rs.getString("solicitante");
					fk_servico_usuario = rs.getInt("fk_servico_usuario");
					data_emissao = rs.getString("data_emissao");
					desc_solicitacao = rs.getString("desc_solicitacao");
					titulo = rs.getString("titulo");
					entregue = rs.getString("entregue");
					num_solicitacao = rs.getString("num_solicitacao");
					valor_material = rs.getFloat("valor_material");
					observacao = rs.getString("observacao");
					porcentagem = rs.getInt("porcentagem");
					pedido = rs.getString("pedido");
					aval = rs.getBoolean("aval");

					dados.setQt_desc(rs.getInt("qt_desc"));
					dados.setDesc_dados(rs.getString("descricao"));
					dados.setFk_id_solicitacao(rs.getInt("fk_id_solicitacao"));
					dados.setSituacao(rs.getString("sol_situacao"));
					dados.setCodg(rs.getInt("codg"));
					dados.setValor(rs.getFloat("valor"));
					dados.setItem(rs.getInt("item"));
					dados.setH_extra(rs.getBoolean("h_extra"));
					valor1 = BigDecimal.valueOf(rs.getFloat("valor"));
					qt1 = BigDecimal.valueOf(rs.getLong("qt_desc"));
					valtot = valtot.add(valor1.multiply(qt1));

					desc_dados = rs.getString("descricao");
					Qt_desc = rs.getInt("qt_desc");
					fk_id_solicitacao = rs.getInt("fk_id_solicitacao");
					sol_situacao = rs.getString("sol_situacao");
					codg = rs.getInt("codg");
					valor = rs.getFloat("valor");
					item = rs.getInt("item");
					h_extra = rs.getBoolean("h_extra");
					if (rs.isLast()) {
						val_mat = new BigDecimal(valor_material);
						valtot = valtot.add(val_mat);
						sol.setValtot(valtot);
						listdados.add(dados);
						sol.setListServicos(listdados);
						Solicitacao.add(sol);
						valtot = new BigDecimal(0.0D);
					}
					else
					{
						listdados.add(dados);
					}
				}
				else if (rs.isLast())
				{
					valtot = valtot.add(rs.getBigDecimal("valor_material"));
					sol.setValtot(valtot);
					sol.setListServicos(listdados);
					sol.setId_sol_servico(id_sol_servico);
					sol.setFk_id_empresa(Fk_id_empresa);
					sol.setAreas(areas);
					sol.setSituacao(situacao);
					sol.setMaquina(maquina);
					sol.setPeca(peca);
					sol.setSolicitante(solicitante);
					sol.setFK_servico_usuario(fk_servico_usuario);
					sol.setData_emissao(data_emissao);
					sol.setDesc_solicitacao(desc_solicitacao);
					sol.setTitulo(titulo);
					sol.setEntregue(entregue);
					sol.setNum_solicitacao(num_solicitacao);
					sol.setValor_material(valor_material);
					sol.setObservacao(observacao);
					sol.setPorcentagem(porcentagem);
					sol.setPedido(pedido);
					sol.setAval(aval);
					Solicitacao.add(sol);
					listdados = new ArrayList();
					sol = new Servico();
					valtot = new BigDecimal(0.0D);
					valor1 = BigDecimal.valueOf(rs.getFloat("valor"));
					qt1 = BigDecimal.valueOf(rs.getLong("qt_desc"));
					valtot = valtot.add(valor1.multiply(qt1));
					valtot = valtot.add(rs.getBigDecimal("valor_material"));
					sol.setId_sol_servico(rs.getInt("id_sol_servico"));
					sol.setFk_id_empresa(rs.getInt("Fk_id_empresa"));
					sol.setAreas(rs.getString("areas"));
					sol.setSituacao(rs.getString("situacao"));
					sol.setMaquina(rs.getString("maquina"));
					sol.setPeca(rs.getString("peca"));
					sol.setSolicitante(rs.getString("solicitante"));
					sol.setFK_servico_usuario(rs.getInt("fk_servico_usuario"));
					sol.setData_emissao(rs.getString("data_emissao"));
					sol.setDesc_solicitacao(rs.getString("desc_solicitacao"));
					sol.setTitulo(rs.getString("titulo"));
					sol.setEntregue(rs.getString("entregue"));
					sol.setNum_solicitacao(rs.getString("num_solicitacao"));
					sol.setValor_material(rs.getFloat("valor_material"));
					sol.setObservacao(rs.getString("observacao"));
					sol.setPorcentagem(rs.getInt("porcentagem"));
					sol.setPedido(rs.getString("pedido"));
					sol.setAval(rs.getBoolean("aval"));
					dados.setQt_desc(rs.getInt("qt_desc"));
					dados.setDesc_dados(rs.getString("descricao"));
					dados.setFk_id_solicitacao(rs.getInt("fk_id_solicitacao"));
					dados.setSituacao(rs.getString("sol_situacao"));
					dados.setCodg(rs.getInt("codg"));
					dados.setValor(rs.getFloat("valor"));
					dados.setItem(rs.getInt("item"));
					dados.setH_extra(rs.getBoolean("h_extra"));
					desc_dados = rs.getString("descricao");
					Qt_desc = rs.getInt("qt_desc");
					fk_id_solicitacao = rs.getInt("fk_id_solicitacao");
					sol_situacao = rs.getString("sol_situacao");
					codg = rs.getInt("codg");
					valor = rs.getFloat("valor");
					item = rs.getInt("item");
					h_extra = rs.getBoolean("h_extra");

					sol.setValtot(valtot);
					listdados.add(dados);
					sol.setListServicos(listdados);
					Solicitacao.add(sol);
				}
				else
				{
					valor1 = new BigDecimal(valor_material);
					valtot = valtot.add(valor1);
					sol.setValtot(valtot);
					sol.setListServicos(listdados);
					sol.setId_sol_servico(id_sol_servico);
					sol.setFk_id_empresa(Fk_id_empresa);
					sol.setAreas(areas);
					sol.setSituacao(situacao);
					sol.setMaquina(maquina);
					sol.setPeca(peca);
					sol.setSolicitante(solicitante);
					sol.setFK_servico_usuario(fk_servico_usuario);
					sol.setData_emissao(data_emissao);
					sol.setDesc_solicitacao(desc_solicitacao);
					sol.setTitulo(titulo);
					sol.setEntregue(entregue);
					sol.setNum_solicitacao(num_solicitacao);
					sol.setValor_material(valor_material);
					sol.setObservacao(observacao);
					sol.setPorcentagem(porcentagem);
					sol.setPedido(pedido);
					sol.setAval(aval);
					Solicitacao.add(sol);
					listdados = new ArrayList();
					sol = new Servico();

					valtot = new BigDecimal(0.0D);
					valor1 = BigDecimal.valueOf(rs.getFloat("valor"));
					qt1 = BigDecimal.valueOf(rs.getLong("qt_desc"));
					valtot = valtot.add(valor1.multiply(qt1));
					sol.setId_sol_servico(rs.getInt("id_sol_servico"));
					sol.setFk_id_empresa(rs.getInt("Fk_id_empresa"));
					sol.setAreas(rs.getString("areas"));
					sol.setSituacao(rs.getString("situacao"));
					sol.setMaquina(rs.getString("maquina"));
					sol.setPeca(rs.getString("peca"));
					sol.setSolicitante(rs.getString("solicitante"));
					sol.setFK_servico_usuario(rs.getInt("fk_servico_usuario"));
					sol.setData_emissao(rs.getString("data_emissao"));
					sol.setDesc_solicitacao(rs.getString("desc_solicitacao"));
					sol.setTitulo(rs.getString("titulo"));
					sol.setEntregue(rs.getString("entregue"));
					sol.setNum_solicitacao(rs.getString("num_solicitacao"));
					sol.setValor_material(rs.getFloat("valor_material"));
					sol.setObservacao(rs.getString("observacao"));
					sol.setPorcentagem(rs.getInt("porcentagem"));
					sol.setPedido(rs.getString("pedido"));
					sol.setAval(rs.getBoolean("aval"));

					id_sol_servico = rs.getInt("id_sol_servico");
					Fk_id_empresa = rs.getInt("fk_id_empresa");
					areas = rs.getString("areas");
					situacao = rs.getString("situacao");
					maquina = rs.getString("maquina");
					peca = rs.getString("peca");
					solicitante = rs.getString("solicitante");
					fk_servico_usuario = rs.getInt("fk_servico_usuario");
					data_emissao = rs.getString("data_emissao");
					desc_solicitacao = rs.getString("desc_solicitacao");
					titulo = rs.getString("titulo");
					entregue = rs.getString("entregue");
					num_solicitacao = rs.getString("num_solicitacao");
					valor_material = rs.getFloat("valor_material");
					observacao = rs.getString("observacao");
					porcentagem = rs.getInt("porcentagem");
					pedido = rs.getString("pedido");
					aval = rs.getBoolean("aval");
					dados.setQt_desc(rs.getInt("qt_desc"));
					dados.setDesc_dados(rs.getString("descricao"));
					dados.setFk_id_solicitacao(rs.getInt("fk_id_solicitacao"));
					dados.setSituacao(rs.getString("sol_situacao"));
					dados.setCodg(rs.getInt("codg"));
					dados.setValor(rs.getFloat("valor"));
					dados.setItem(rs.getInt("item"));
					dados.setH_extra(rs.getBoolean("h_extra"));

					desc_dados = rs.getString("descricao");
					Qt_desc = rs.getInt("qt_desc");
					fk_id_solicitacao = rs.getInt("fk_id_solicitacao");
					sol_situacao = rs.getString("sol_situacao");
					codg = rs.getInt("codg");
					valor = rs.getFloat("valor");
					item = rs.getInt("item");
					h_extra = rs.getBoolean("h_extra");
					listdados.add(dados);
				}

				val = rs.getInt("id_sol_servico");
				num++;
			}
			return  (List<Servico>)Solicitacao;

		} catch (SQLException e) {
			e.printStackTrace();
		}
		return null;

	}


}

