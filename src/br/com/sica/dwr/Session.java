package br.com.sica.dwr;

import java.util.Enumeration;

public abstract interface Session
{
  public abstract Object getAttribute(String paramString);

  public abstract Enumeration getAttributeNames();

  public abstract long getCreationTime();

  public abstract String getId();

  public abstract long getLastAccessedTime();

  public abstract int getMaxInactiveInterval();

  public abstract void invalidate();

  public abstract boolean isNew();

  public abstract void removeAttribute(String paramString);

  public abstract void setAttribute(String paramString, Object paramObject);

  public abstract void setMaxInactiveInterval(int paramInt);
}

