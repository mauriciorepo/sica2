package br.com.sica.security;

import java.util.List;

public interface IFindUsuarioDAO<T> {

	public List<T> find(Object entidade);
}
