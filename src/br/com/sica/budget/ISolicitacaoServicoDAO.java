package br.com.sica.budget;

import java.util.List;



public interface ISolicitacaoServicoDAO {

	public List<Servico> FindSolicitacao(Servico servico);
}
