package br.com.sica.financeiro;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import br.com.sica.connection.IDAO;
import br.com.sica.connection.IPool;

public class CentrodeResultadosDAO implements IDAO<CentrodeResultados> {

	private IPool pool;

	public CentrodeResultadosDAO(IPool pool) {
		this.pool = pool;

	}

	@Override
	public Object cadastrar(CentrodeResultados entidade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object update(CentrodeResultados entidade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object excluir(CentrodeResultados entidade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<CentrodeResultados> find(CentrodeResultados entidade) {
		PreparedStatement stmt = null;
		ResultSet rs = null;
		Connection con = pool.getConnection();
		CentrodeResultados centro = entidade;
		List<CentrodeResultados> listaCentro;
		
		try {
			stmt = con.prepareStatement("select idcentrodecusto,centro,subtipo,observacao from centrodecusto ");

			
			rs = stmt.executeQuery();
			listaCentro = new ArrayList<CentrodeResultados>();
			while (rs.next()) {
				centro = new CentrodeResultados();
				centro.setCentro(rs.getString("centro"));
				centro.setIdcentrodecusto(rs.getInt("idcentrodecusto"));
				centro.setObservacao(rs.getString("observacao"));
				centro.setSubtipo(rs.getString("subtipo"));
				
				listaCentro.add(centro);

				// return "existe";
			}
			return listaCentro;
		} catch (Exception e) {
			// TODO: handle exception
		}
		List<CentrodeResultados> list = new ArrayList<CentrodeResultados>();
		return list;

	}
	

}
