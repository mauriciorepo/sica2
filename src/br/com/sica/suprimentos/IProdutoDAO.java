package br.com.sica.suprimentos;

import java.util.List;

public interface IProdutoDAO {
	public String cadastrarGrupo(Grupo grupo);
	
	public String cadastrarClasse(Classe classe);
	
	public List<Grupo> findGrupo(Object obj);
	
	public List<Classe> findClasse(Object obj);
	
	public String updateGrupo(Grupo grupo);
	
	public String updateClasse(Classe classe);

}
