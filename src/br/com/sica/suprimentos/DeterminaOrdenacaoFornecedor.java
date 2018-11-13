package br.com.sica.suprimentos;

import java.util.List;

public class DeterminaOrdenacaoFornecedor {

	private IFindFornecedor find;
	
	public  DeterminaOrdenacaoFornecedor(IFindFornecedor find) {
		this.find=find;
	}
	
	public void trocaFind(IFindFornecedor find){
		
		this.find=find;
	}
	
	public List<Fornecedor> find(Fornecedor fornecedor){
		
		return find.findFornecedor(fornecedor);
	}
	
	
}
