package br.com.sica.financeiro;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import br.com.sica.connection.IDAO;
import br.com.sica.connection.IPool;

public class PlanodeContasDAO implements IDAO<PlanodeContas> {
	private IPool pool;

	public PlanodeContasDAO(IPool pool) {
		this.pool = pool;

	}

	@Override
	public Object cadastrar(PlanodeContas entidade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object update(PlanodeContas entidade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Object excluir(PlanodeContas entidade) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<PlanodeContas> find(PlanodeContas entidade) {

		PreparedStatement stmt = null;
		ResultSet rs = null;
		Connection con = pool.getConnection();
		PlanodeContas planoconta = entidade;
		// String val=ContaBancaria.CONTABANCARIA_I;
		List<PlanodeContas> listaConta;
		// TODO Auto-generated method stub

		try {
			stmt = con.prepareStatement("select idplanodecontas,nome,subtipo,tipo from planodecontas where tipo=? order by subtipo , tipo");

			stmt.setString(1, planoconta.getTipo());

			rs = stmt.executeQuery();
			listaConta = new ArrayList<PlanodeContas>();
			while (rs.next()) {
				planoconta = new PlanodeContas();
				planoconta.setNome(rs.getString("nome"));
				
				planoconta.setSubtipo(rs.getString("subtipo"));
				planoconta.setTipo(rs.getString("tipo"));
				planoconta.setIdplanodecontas(rs.getInt("idplanodecontas"));
				listaConta.add(planoconta);

				// return "existe";
			}
			return listaConta;
		} catch (Exception e) {
			// TODO: handle exception
		}
		List<PlanodeContas> list = new ArrayList<PlanodeContas>();
		return list;

	}

}
