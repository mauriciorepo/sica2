package br.com.sica.connection;

import java.sql.Connection;
import java.sql.SQLException;

public interface IPool {

    public abstract void setDataSource(IDataSource ds);

    public abstract Connection getConnection();

    public void liberarConnection(Connection con);
     public void rollback()throws SQLException;
     public void commit(Connection con)throws SQLException;
     public void AutoCommit(boolean bol)throws SQLException;
}
