package br.com.sica.connection;

import java.util.List;

public interface IDAO<T> {

    public Object cadastrar(T entidade);

    public Object update(T entidade);

    public Object excluir(T entidade);

    public List<T> find(T entidade);

}
