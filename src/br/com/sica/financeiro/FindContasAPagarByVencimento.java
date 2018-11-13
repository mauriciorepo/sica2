package br.com.sica.financeiro;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import br.com.sica.connection.IPool;
import br.com.sica.suprimentos.Fornecedor;
import br.com.sica.suprimentos.IFindFornecedor;

public class FindContasAPagarByVencimento implements IFindContasAPagar<ContasAPagarGrid> {
    private IPool pool;
	public FindContasAPagarByVencimento(IPool pool) {
		this.pool=pool;
	}
	@Override
	public List<ContasAPagarGrid> find(Object entidade) {

		PreparedStatement stmt =null;
		ResultSet rs=null;
		
		Connection con=pool.getConnection();
		ContasAPagar cont=(ContasAPagar)entidade;
		
		try {
			
			
			stmt=con.prepareStatement("select sum(baixa.valor) as pago ,f.razaosocial ,f.fantasia," +
					"d.fornecedores_idfornecedores, d.num_nota, d.tipodocumento , d.valortotal, p.vencimento ," +
					" p.numparcela, p.valor , p.despesas_id_despesa, p.meiopagamento , p.contasbancarias_idcontasbancarias," +
					" p.idparcelasapagar from casman.fornecedores as f join casman.despesas as d " +
					"on f.idfornecedores=d.fornecedores_idfornecedores join casman.parcelasapagar as p " +
					"on d.id_despesa=p.despesas_id_despesa   join casman.baixa_despesas as baixa on p.idparcelasapagar=baixa.parcelasapagar_idparcelasapagar" +
					" where  d.filiais_idfiliais=?      group by p.idparcelasapagar,p.numparcela having pago <> p.valor"+
                                       " union "+
                    "select 0.0 as pago ,f.razaosocial ,f.fantasia,d.fornecedores_idfornecedores, " +
                    "d.num_nota, d.tipodocumento , d.valortotal, p.vencimento , p.numparcela, p.valor , p.despesas_id_despesa," +
                    " p.meiopagamento , p.contasbancarias_idcontasbancarias, p.idparcelasapagar from  casman.fornecedores as f " +
                    "join casman.despesas as d on f.idfornecedores=d.fornecedores_idfornecedores join casman.parcelasapagar as p " +
                    "on d.id_despesa=p.despesas_id_despesa   join casman.baixa_despesas as baixa  " +
                    "where  d.filiais_idfiliais=? and    " +
                    "p.idparcelasapagar not in( SELECT b.parcelasapagar_idparcelasapagar as parcelas " +
                    "FROM casman.baixa_despesas as b , casman.parcelasapagar as p " +
                    "where b.parcelasapagar_idparcelasapagar=p.idparcelasapagar and ((b.valor < p.valor) or (b.valor = p.valor)  ) ) group by p.idparcelasapagar ,p.numparcela");
			stmt.setInt(1, cont.getFiliais_idfiliais());
			stmt.setInt(2, cont.getFiliais_idfiliais());
			rs=stmt.executeQuery();
			
			
			List<ContasAPagarGrid> list=new ArrayList<ContasAPagarGrid>();
			ContasAPagarGrid conta=new ContasAPagarGrid();
			
			while(rs.next()){
	             conta=new ContasAPagarGrid();
				conta.setFornecedores_idfornecedores(rs.getInt("fornecedores_idfornecedores"));
				conta.setTipodocumento(rs.getString("tipodocumento"));
				conta.setNum_nota(rs.getString("num_nota"));
				conta.setValortotal(rs.getFloat("valortotal"));
				conta.setVencimento(rs.getString("vencimento"));
				conta.setNumparcela(rs.getInt("numparcela"));
				conta.setValor(rs.getFloat("valor"));
				conta.setDespesas_id_despesa(rs.getInt("despesas_id_despesa"));
				conta.setMeiopagamento(rs.getString("meiopagamento"));
				conta.setFantasia(rs.getString("fantasia"));
				conta.setRazaosocial(rs.getString("razaosocial"));
				conta.setIdparcelasapagar(rs.getInt("idparcelasapagar"));
				conta.setPago(rs.getFloat("pago"));
				
				list.add(conta);
				
				
				
			}
			 stmt.close();
	       	    pool.liberarConnection(con);
			return list;
			
		} catch (SQLException e) {
			// TODO: handle exception
		}
		
		return null;
	}

	

}
