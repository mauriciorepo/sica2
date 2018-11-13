package br.com.sica.budget;

import java.sql.BatchUpdateException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import sun.print.resources.serviceui;

import br.com.sica.budget.*;
//import com.sica.email.SolicitacaoServicoListener;
import br.com.sica.connection.ConectaBanco;
 
 public class SolicitacaoServicoDAO implements ISolicitacaoServicoDAO
 {
   private static final ConectaBanco conecta = new ConectaBanco();
   //Subject
   ///private static SolicitacaoServicoListener listener;
    
   /*public void setSolicitacaoServicoListener(SolicitacaoServicoListener listener) {
		this.listener = listener;
	}*/

public static String AvalRel(Servico serv) throws Throwable
   {
     PreparedStatement stmt = null;
     String string;
     try
     {
       stmt = conecta.getConnection().prepareStatement("update solicitacao_servico set aval=? where id_sol_servico=?");
       stmt.setBoolean(1, serv.isAval());
       stmt.setInt(2, serv.getId_sol_servico());
 
       stmt.executeUpdate();
 
       conecta.commit();
       stmt.close();
     conecta.closeConnection();
     }
     catch (Exception e) {
       conecta.rollback();
       stmt.close();
       conecta.closeConnection();
     }
     finally {
       stmt.close();
     }conecta.closeConnection();
 
     return "fail";
   }
 
   public static String AtualizaServico(Servico serv)
     throws Throwable
   {
    PreparedStatement stmt = null;
     PreparedStatement stmtCount = null;
     ResultSet rs = null;
     ResultSet resultCount = null;
     PreparedStatement state = null;
     String data = serv.getData_emissao();
     int ano = Integer.parseInt(data.substring(2, 3));
     int ano2 = Integer.parseInt(data.substring(3, 4));
     int mes = Integer.parseInt(data.substring(4, 5));
     int mes2 = Integer.parseInt(data.substring(5, 6));
     int dia = Integer.parseInt(data.substring(6, 7));
     int dia2 = Integer.parseInt(data.substring(7, 8));
     String valor = ""+serv.getValor_material();
     valor = valor.replace(",", ".");
     float valor_material = Float.parseFloat(valor);
     int num3 = ano + ano2;
    int num2 = mes + mes2;
     int num1 = dia + dia2;
 
     int totalPersist = 0;
     try
     {
       stmt = conecta.getConnection().prepareStatement("update solicitacao_servico set  areas= ? ,maquina= ? ,peca= ? , solicitante= ? , data_emissao = ? , desc_solicitacao= ? , titulo= ? , situacao= ? , entregue= ? , observacao= ? , valor_material= ?  ,pedido= ? where num_solicitacao=?");
 
       stmt.setString(1, serv.getAreas());
       stmt.setString(2, serv.getMaquina());
       stmt.setString(3, serv.getPeca());
       stmt.setString(4, serv.getSolicitante());
       stmt.setString(5, serv.getData_emissao());
       stmt.setString(6, serv.getDesc_solicitacao());
       stmt.setString(7, serv.getTitulo());
       stmt.setString(8, serv.getSituacao());
       stmt.setString(9, serv.getEntregue());
       stmt.setString(10, serv.getObservacao());
       stmt.setFloat(11, valor_material);
 
       stmt.setString(12, serv.getPedido());
       stmt.setString(13, serv.getNum_solicitacao());
 
       stmt.executeUpdate();
 
       stmtCount = conecta.getConnection().prepareStatement("select count(*) as num from dados_solicitacao where FK_id_solicitacao= ?");
       stmtCount.setInt(1, serv.getId_sol_servico());
       resultCount = stmtCount.executeQuery();
       int tam = 0;
       if (resultCount.next()) {
         tam = resultCount.getInt("num");
       }
 
       List list = serv.getListServicos();
       int contlist = 0;
      contlist = list.size();
 
       boolean persist = false;
       boolean persistEmpty = false;
       boolean persistFail = false;

       if (tam == contlist)
       {
         state = conecta.getConnection().prepareStatement("update dados_solicitacao set descricao= ?  , valor= ? , codg=? ,situacao= ? ,qt_desc= ? ,h_extra= ? where FK_id_solicitacao= ? and item= ? ");
         for (int i = 0; i < list.size(); i++)
         {
           state.setString(1, ((Dados_Solicitacao)list.get(i)).getDesc_dados());
           state.setFloat(2, ((Dados_Solicitacao)list.get(i)).getValor());
           state.setInt(3, ((Dados_Solicitacao)list.get(i)).getCodg());
           state.setString(4, ((Dados_Solicitacao)list.get(i)).getSituacao());
           state.setInt(5, ((Dados_Solicitacao)list.get(i)).getQt_desc());
           state.setBoolean(6, ((Dados_Solicitacao)list.get(i)).isH_extra());
           state.setInt(7, serv.getId_sol_servico());
           state.setInt(8, ((Dados_Solicitacao)list.get(i)).getItem());
 
           state.addBatch();
         }
 
         int[] Persitcount = state.executeBatch();
 
         for (int i = 1; i < Persitcount.length; i++)
         {
           if (Persitcount[i] == 1)
           {
             totalPersist++;
 
             persist = true;
          }
           else if (Persitcount[i] == -2)
           {
            persistEmpty = true;
           } else {
            if (Persitcount[i] != -3)
               continue;
             persistFail = true;
           }
 
        }
 
         if ((persistEmpty) || (persistFail)) {
           conecta.rollback();
         }
         else
         {
           conecta.commit();
         }
 
       }
 
       if (tam < contlist)
       {
         state = conecta.getConnection().prepareStatement("update dados_solicitacao set descricao= ?  , valor= ? , codg=? ,situacao= ? ,qt_desc= ? ,h_extra= ? where FK_id_solicitacao= ? and item= ? ");
        for (int j = 0; j < tam; j++)
         {
           state.setString(1, ((Dados_Solicitacao)list.get(j)).getDesc_dados());
           state.setFloat(2, ((Dados_Solicitacao)list.get(j)).getValor());
           state.setInt(3, ((Dados_Solicitacao)list.get(j)).getCodg());
           state.setString(4, ((Dados_Solicitacao)list.get(j)).getSituacao());
           state.setInt(5, ((Dados_Solicitacao)list.get(j)).getQt_desc());
           state.setBoolean(6, ((Dados_Solicitacao)list.get(j)).isH_extra());
           state.setInt(7, serv.getId_sol_servico());
           state.setInt(8, ((Dados_Solicitacao)list.get(j)).getItem());
 
           state.addBatch();
         }
 
         
         int[] Persitcount = state.executeBatch();
 
         for (int i = 1; i < Persitcount.length; i++)
         {
           if (Persitcount[i] == 1)
           {
             totalPersist++;
 
             persist = true;
           }
           else if (Persitcount[i] == -2)
           {
            persistEmpty = true;
           } else {
             if (Persitcount[i] != -3)
              continue;
            persistFail = true;
         }
 
         }
 
         if ((persistEmpty) || (persistFail)) {
           conecta.rollback();
           conecta.closeConnection();
         }
         else
         {
           
        	stmt = conecta.getConnection().prepareStatement("insert into dados_solicitacao (FK_id_solicitacao,descricao,valor,codg,situacao,qt_desc,h_extra,item,solicitacao_servico_id_sol_servico) values(?,?,?,?,?,?,?,?,?)");
        	          for (int i = tam; i < contlist; i++)
        	          {
        	        	  stmt.setInt(1, serv.getId_sol_servico());
        	        	  stmt.setString(2, ((Dados_Solicitacao)list.get(i)).getDesc_dados());
        	        	  stmt.setFloat(3, ((Dados_Solicitacao)list.get(i)).getValor());
        	        	  stmt.setInt(4, ((Dados_Solicitacao)list.get(i)).getCodg());
        	        	  stmt.setString(5, ((Dados_Solicitacao)list.get(i)).getSituacao());
        	        	  stmt.setInt(6, ((Dados_Solicitacao)list.get(i)).getQt_desc());
        	        	  stmt.setBoolean(7, ((Dados_Solicitacao)list.get(i)).isH_extra());
        	        	  stmt.setInt(8, ((Dados_Solicitacao)list.get(i)).getItem());
        	        	  stmt.setInt(9, serv.getId_sol_servico());
        	        	  stmt.executeUpdate();
        	          }
        	 
           conecta.commit();
         }
 
 
      }
 
       if (tam > contlist)
       {
         int cont = 0;
         int val = 0;
         int tot = tam - contlist;
         state = conecta.getConnection().prepareStatement("delete from dados_solicitacao where FK_id_solicitacao =? and item=? ");
         for (int j = 0; j < tot; j++) {
           val = tam - cont;
 
           state.setInt(1, serv.getId_sol_servico());
           state.setInt(2, val);
 
           state.addBatch();
           cont++;
         }
 
         int[] Persitcount2 = state.executeBatch();
 
         for (int j = 1; j < Persitcount2.length; j++)
         {
           if (Persitcount2[j] == 1)
           {
             totalPersist++;
 
             persist = true;
           }
           else if (Persitcount2[j] == -2)
           {
             persistEmpty = true;
           } else {
            if (Persitcount2[j] != -3)
              continue;
             persistFail = true;
           }
 
         }
 
         if ((persistEmpty) || (persistFail)) {
           conecta.rollback();
           conecta.closeConnection();
         }
         else
         {
           state = conecta.getConnection().prepareStatement("update dados_solicitacao set descricao= ?  , valor= ? , codg=? ,situacao= ? ,qt_desc= ? ,h_extra= ? where FK_id_solicitacao= ? and item= ? ");
           for (int i = 0; i < list.size(); i++)
           {
             state.setString(1, ((Dados_Solicitacao)list.get(i)).getDesc_dados());
             state.setFloat(2, ((Dados_Solicitacao)list.get(i)).getValor());
             state.setInt(3, ((Dados_Solicitacao)list.get(i)).getCodg());
             state.setString(4, ((Dados_Solicitacao)list.get(i)).getSituacao());
             state.setInt(5, ((Dados_Solicitacao)list.get(i)).getQt_desc());
             state.setBoolean(6, ((Dados_Solicitacao)list.get(i)).isH_extra());
             state.setInt(7, serv.getId_sol_servico());
             state.setInt(8, ((Dados_Solicitacao)list.get(i)).getItem());
 
             state.executeUpdate();
           }
 
           conecta.commit();
         }
 
       }
 
       stmt.clearBatch();
       state.clearBatch();
       return "foi";
     }
     catch (BatchUpdateException e) {
       stmt.clearBatch();
       state.clearBatch();
      //System.err.println(e);
      stmt.close();
      conecta.closeConnection();
      String str1 = e.getMessage();
      return str1;
     }
     catch (Exception e)
     {
       conecta.rollback();
       stmt.clearBatch();
       state.clearBatch();

       stmt.close();
     conecta.closeConnection();
      String str1 = e.getMessage();
       return str1;
     } finally {
       stmt.clearBatch();
       state.clearBatch();
    // conecta.rollback();
      // conecta.closeConnection();
      stmt.close();
     }
  }
/*     */ 
/*     */   public static String CadastraSolicitacaoServ(Servico serv) throws Throwable
/*     */   {
/* 318 */     PreparedStatement stmt = null;
/* 319 */     PreparedStatement stmtCount = null;
/* 320 */     ResultSet rs = null;
/* 321 */     ResultSet resultCount = null;
/* 322 */     PreparedStatement state = null;
/* 323 */     String data = serv.getData_emissao();
/* 324 */     int ano = Integer.parseInt(data.substring(2, 3));
/* 325 */     int ano2 = Integer.parseInt(data.substring(3, 4));
/* 326 */     int mes = Integer.parseInt(data.substring(4, 5));
/* 327 */     int mes2 = Integer.parseInt(data.substring(5, 6));
/* 328 */     int dia = Integer.parseInt(data.substring(6, 7));
/* 329 */     int dia2 = Integer.parseInt(data.substring(7, 8));
/* 330 */     String valor =""+serv.getValor_material();
/* 331 */     valor = valor.replace(",", ".");
/* 332 */     float valor_material = Float.parseFloat(valor);
/* 333 */     int num3 = ano + ano2;
/* 334 */     int num2 = mes + mes2;
/* 335 */     int num1 = dia + dia2;
/*     */ 
/* 337 */     int totalPersist = 0;
/*     */     try
/*     */     {
/* 341 */       stmtCount = conecta.getConnection().prepareStatement("SELECT * FROM casman.solicitacao_servico where FK_id_empresa= ? order by id_sol_servico desc limit 1; ");
/* 342 */       stmtCount.setInt(1, serv.getFk_id_empresa());
/* 343 */       resultCount = stmtCount.executeQuery();
/*     */ 
/* 346 */       if (resultCount.next()) {
/* 347 */         String num = resultCount.getString("num_solicitacao");
/* 348 */         Date dat = new Date();
/* 349 */         SimpleDateFormat formatador = new SimpleDateFormat("yy");
/* 350 */         String ano1 = formatador.format(dat);
/* 351 */         String an = ""+formatador;
/* 352 */         String num_sol = "";
/* 353 */         int tam = num.length();
/* 354 */         String id = num.substring(0, 3);
/* 355 */         int incremento = Integer.parseInt(num.substring(3, tam - 2));
/* 356 */         incremento++;
/* 357 */         String inc = ""+incremento;
/* 358 */         String valano = num.substring(tam - 2, tam);
/* 359 */         if (!ano1.equalsIgnoreCase(valano)) {
/* 360 */           num_sol = id + "1" + ano1;
/* 361 */           serv.setNum_solicitacao(num_sol);
/*     */         } else {
/* 363 */           num_sol = id + inc + valano;
/* 364 */           serv.setNum_solicitacao(num_sol);
/*     */         }
/*     */       } else {
/* 366 */         Date dat = new Date();
/* 367 */         String id =""+serv.getFk_id_empresa();
/*     */ 
/* 369 */         SimpleDateFormat formatador = new SimpleDateFormat("yy");
/* 370 */         String ano1 = formatador.format(dat);
/* 371 */         int tam = id.length();
/* 372 */         String numid = "";
/* 373 */         if (tam == 1) {
/* 374 */           numid = "00" + id + "1" + ano1;
/*     */         }
/* 376 */         if (tam == 2) {
/* 377 */           numid = "0" + id + "1" + ano1;
/*     */         }
/* 379 */         if (tam == 3) {
/* 380 */           numid = id + "1" + ano1;
/*     */         }
/* 382 */         serv.setNum_solicitacao(numid);
/*     */       }
/*     */ 
/* 385 */       stmt = conecta.getConnection().prepareStatement("insert into solicitacao_servico (fk_id_empresa,areas,maquina,peca,solicitante,data_emissao,desc_solicitacao,FK_servico_usuario,titulo,situacao,entregue,num_solicitacao,observacao,valor_material,pedido,aval) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 1);
/* 386 */       Boolean aval = Boolean.valueOf(false);
/* 387 */       stmt.setInt(1, serv.getFk_id_empresa());
/* 388 */       stmt.setString(2, serv.getAreas());
/* 389 */       stmt.setString(3, serv.getMaquina());
/* 390 */       stmt.setString(4, serv.getPeca());
/* 391 */       stmt.setString(5, serv.getSolicitante());
/* 392 */       stmt.setString(6, serv.getData_emissao());
/* 393 */       stmt.setString(7, serv.getDesc_solicitacao());
/* 394 */       stmt.setInt(8, serv.getFK_servico_usuario());
/* 395 */       stmt.setString(9, serv.getTitulo());
/* 396 */       stmt.setString(10, serv.getSituacao());
/* 397 */       stmt.setString(11, serv.getEntregue());
/* 398 */       stmt.setString(12, serv.getNum_solicitacao());
/* 399 */       stmt.setString(13, serv.getObservacao());
/* 400 */       stmt.setFloat(14, valor_material);
/*     */ 
/* 402 */       stmt.setString(15, serv.getPedido());
/* 403 */       stmt.setBoolean(16, aval.booleanValue());
/*     */ 
/* 405 */       stmt.executeUpdate();
/* 406 */       rs = stmt.getGeneratedKeys();
/* 407 */       rs.next();
/*     */ 
/* 409 */       int id_sol = rs.getInt(1);
/* 410 */       if (id_sol != 0)
/*     */       {
/* 412 */         boolean persist = false;
/* 413 */         boolean persistEmpty = false;
/* 414 */         boolean persistFail = false;
/*     */ 
/* 416 */         List list = serv.getListServicos();
/* 417 */         state = conecta.getConnection().prepareStatement("insert into dados_solicitacao (FK_id_solicitacao,descricao,valor,codg,situacao,qt_desc,h_extra,item,solicitacao_servico_id_sol_servico) values(?,?,?,?,?,?,?,?,?)");
/* 418 */         for (int i = 0; i < list.size(); i++)
/*     */         {
/* 420 */           state.setInt(1, id_sol);
/* 421 */           state.setString(2, ((Dados_Solicitacao)list.get(i)).getDesc_dados());
/* 422 */           state.setFloat(3, ((Dados_Solicitacao)list.get(i)).getValor());
/* 423 */           state.setInt(4, ((Dados_Solicitacao)list.get(i)).getCodg());
/* 424 */           state.setString(5, ((Dados_Solicitacao)list.get(i)).getSituacao());
/* 425 */           state.setInt(6, ((Dados_Solicitacao)list.get(i)).getQt_desc());
/* 426 */           state.setBoolean(7, ((Dados_Solicitacao)list.get(i)).isH_extra());
/* 427 */           state.setInt(8, ((Dados_Solicitacao)list.get(i)).getItem());
/*     */           state.setInt(9, id_sol);
/* 429 */           state.addBatch();
/*     */         }
/*     */ 
/* 432 */         int[] Persitcount = state.executeBatch();
/* 433 */         for (int i = 1; i < Persitcount.length; i++)
/*     */         {
/* 435 */           if (Persitcount[i] == 1)
/*     */           {
/* 437 */             totalPersist++;
/*     */ 
/* 439 */             persist = true;
/*     */           }
/* 441 */           else if (Persitcount[i] == -2)
/*     */           {
/* 443 */             persistEmpty = true;
/*     */           } else {
/* 445 */             if (Persitcount[i] != -3)
/*     */               continue;
/* 447 */             persistFail = true;
/*     */           }
/*     */ 
/*     */         }
/*     */ 
/* 452 */         if ((persistEmpty) || (persistFail)) {
/* 453 */           conecta.rollback();
/* 454 */           conecta.closeConnection();
/*     */         }
/*     */         else {
/* 457 */           conecta.commit();
/*     */           //
                    
//listener.cadastrouServico(serv);
                   }
/*     */     
/*     */       }
/*     */ 
/* 462 */       stmt.clearBatch();
/* 463 */       state.clearBatch();
/*     */       return "foi";
/*     */     }
/*     */     catch (BatchUpdateException e) {
/* 468 */       stmt.clearBatch();
/* 469 */       state.clearBatch();
/* 470 */       //System.err.println(e);
/* 471 */       String str1 = e.getMessage();
/*     */       return str1;
/*     */     }
/*     */     catch (Exception e)
/*     */     {
/* 475 */       stmt.clearBatch();
/* 476 */       state.clearBatch();
/* 477 */       conecta.rollback();
/*     */ 
/* 479 */       stmt.close();
/* 480 */       conecta.closeConnection();
/* 481 */       String str1 = e.getMessage();
/*     */       return str1;
/*     */     } finally {
/* 483 */       stmt.clearBatch();
/* 484 */       state.clearBatch();
/* 485 */     }
/*     */   }
     
public   List<Servico> FindSolicitacao(Servico serv)

{

	PreparedStatement stmt = null; 
	ResultSet rs = null;

	try {



		List<Servico> Solicitacao = new ArrayList<Servico>();

		stmt = conecta.getConnection().prepareStatement("SELECT s.id_sol_servico , s.porcentagem  ,s.solicitante ,s.aval ,s.fk_id_empresa , s.areas ,s.data_emissao, s.titulo,s.situacao,s.maquina,s.peca,s.entregue,s.num_solicitacao , s.desc_solicitacao,d.situacao as sol_situacao, d.descricao,d.codg , s.fk_servico_usuario , d.fk_id_solicitacao,d.valor, d.qt_desc,d.item, s.valor_material,s.pedido ,s.observacao,d.h_extra from solicitacao_servico as s , dados_solicitacao as d where s.data_emissao > '2012-12-31' and s.fk_id_empresa=? and s.id_sol_servico = d.fk_id_solicitacao order by d.fk_id_solicitacao ");

		stmt.setInt(1, serv.getFk_id_empresa());
		rs = stmt.executeQuery();

		PopulaListServico listServico=new PopulaListServico();
		Solicitacao=listServico.populaListServico((com.mysql.jdbc.ResultSet) rs);

		conecta.closeConnection();
		stmt.close();
		return Solicitacao;
	} catch (Exception e) {
		conecta.closeConnection();


	}
              
	return null;
	     

 }
}
