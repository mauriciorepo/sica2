package br.com.sica.financeiro;

import java.util.List;

public interface IFindContasAPagar<T> {
	
	public List<T> find(Object entidade);

}
