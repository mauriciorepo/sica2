package br.com.sica.dwr;

 import java.util.Enumeration;

import org.directwebremoting.WebContext;
import org.directwebremoting.WebContextFactory;

 public class SessionFacade
   implements Session
 {
   private final WebContext wc;
 
   public SessionFacade()
   {
     this.wc = WebContextFactory.get();
   }
 
   public Object getAttribute(String attribute) {
     return this.wc.getHttpServletRequest().getSession().getAttribute(attribute);
   }
 
   public Enumeration getAttributeNames() {
     return this.wc.getHttpServletRequest().getSession().getAttributeNames();
   }
 
   public long getCreationTime() {
    return this.wc.getHttpServletRequest().getSession().getCreationTime();
   }
 
   public String getId() {
     return this.wc.getHttpServletRequest().getSession().getId();
  }
 
   public long getLastAccessedTime() {
    return this.wc.getHttpServletRequest().getSession().getLastAccessedTime();
  }
 
  public int getMaxInactiveInterval() {
     return this.wc.getHttpServletRequest().getSession().getMaxInactiveInterval();
   }
 
   public void invalidate() {
     this.wc.getHttpServletRequest().getSession().invalidate();
   }
 
   public boolean isNew() {
     return this.wc.getHttpServletRequest().getSession().isNew();
   }
 
  public void removeAttribute(String arg0) {
     this.wc.getHttpServletRequest().getSession().removeAttribute(arg0);
   }
 
   public void setAttribute(String arg0, Object arg1) {
     this.wc.getHttpServletRequest().getSession().setAttribute(arg0, arg1);
  }
 
   public void setMaxInactiveInterval(int arg0) {
     this.wc.getHttpServletRequest().getSession().setMaxInactiveInterval(arg0);
   }
 }


