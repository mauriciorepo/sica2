package br.com.sica.suprimentos;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.jdom2.Document;
import org.jdom2.Element;
import org.jdom2.JDOMException;
import org.jdom2.Namespace;
import org.jdom2.input.SAXBuilder;


public class PopulaFornecedorFileUpload {

	
	 public  Fornecedor uploadFiles(String command ){
		  // System.out.println(command);
		   Document document=null;
		  //String com=<nfeProc versao="2.00" xmlns="http://www.portalfiscal.inf.br/nfe"><NFe xmlns="http://www.portalfiscal.inf.br/nfe"><infNFe versao="2.00" Id="NFe26121110786028000150550000001742581823388736"><ide><cUF>26</cUF><cNF>82338873</cNF><natOp>VENDA MERC. ADQ/REC.TERC. C/SUBS.TRIB.</natOp><indPag>1</indPag><mod>55</mod><serie>0</serie><nNF>174258</nNF><dEmi>2012-11-28</dEmi><tpNF>1</tpNF><cMunFG>2611606</cMunFG><tpImp>1</tpImp><tpEmis>1</tpEmis><cDV>6</cDV><tpAmb>1</tpAmb><finNFe>1</finNFe><procEmi>3</procEmi><verProc>2.0.8</verProc></ide><emit><CNPJ>10786028000150</CNPJ><xNome>IMEL MATERIAL ELETRICO LTDA.</xNome><xFant>IMEL</xFant><enderEmit><xLgr>PRACA DAS CINCO PONTAS, 104-Lj. 104</xLgr><nro>0</nro><xBairro>SAO JOSE</xBairro><cMun>2611606</cMun><xMun>RECIFE</xMun><UF>PE</UF><CEP>50020500</CEP><cPais>1058</cPais><xPais>BRASIL</xPais><fone>8133202130</fone></enderEmit><IE>000126454</IE><CRT>3</CRT></emit><dest><CNPJ>10579663000166</CNPJ><xNome>CENTRAL DE SERVICOS LTDA</xNome><enderDest><xLgr>RUA PEDRO BORBA</xLgr><nro>13</nro><xBairro>JARDIM SANTO</xBairro><cMun>2602902</cMun><xMun>CABO DE SANTO AGOSTINHO</xMun><UF>PE</UF><CEP>54515070</CEP><cPais>1058</cPais><xPais>BRASIL</xPais><fone>35210146</fone></enderDest><IE>ISENTO</IE></dest><det nItem="1"><prod><cProd>10136</cProd><cEAN>7891435052206</cEAN><xProd>LIZFLEX-CAIXA 2 POSTOS - 57303/002</xProd><NCM>39259090</NCM><CFOP>5102</CFOP><uCom>UNID</uCom><qCom>10.0000</qCom><vUnCom>4.3000</vUnCom><vProd>43.00</vProd><cEANTrib>7891435052206</cEANTrib><uTrib>UNID</uTrib><qTrib>10.0000</qTrib><vUnTrib>4.3000</vUnTrib><indTot>1</indTot></prod><imposto><ICMS><ICMS00><orig>0</orig><CST>00</CST><modBC>3</modBC><vBC>43.00</vBC><pICMS>17.00</pICMS><vICMS>7.31</vICMS></ICMS00></ICMS><PIS><PISAliq><CST>01</CST><vBC>0.00</vBC><pPIS>0.00</pPIS><vPIS>0.00</vPIS></PISAliq></PIS><COFINS><COFINSAliq><CST>01</CST><vBC>0.00</vBC><pCOFINS>0.00</pCOFINS><vCOFINS>0.00</vCOFINS></COFINSAliq></COFINS></imposto></det><det nItem="2"><prod><cProd>09073</cProd><cEAN>7891435042863</cEAN><xProd>LIZ-57115/031-MODULO TOMADA NBR 10A</xProd><NCM>85366910</NCM><CFOP>5405</CFOP><uCom>UNID</uCom><qCom>20.0000</qCom><vUnCom>3.4000</vUnCom><vProd>68.00</vProd><cEANTrib>7891435042863</cEANTrib><uTrib>UNID</uTrib><qTrib>20.0000</qTrib><vUnTrib>3.4000</vUnTrib><indTot>1</indTot></prod><imposto><ICMS><ICMS60><orig>0</orig><CST>60</CST><vBCSTRet>0.00</vBCSTRet><vICMSSTRet>0.00</vICMSSTRet></ICMS60></ICMS><PIS><PISAliq><CST>01</CST><vBC>0.00</vBC><pPIS>0.00</pPIS><vPIS>0.00</vPIS></PISAliq></PIS><COFINS><COFINSAliq><CST>01</CST><vBC>0.00</vBC><pCOFINS>0.00</pCOFINS><vCOFINS>0.00</vCOFINS></COFINSAliq></COFINS></imposto></det><det nItem="3"><prod><cProd>09061</cProd><cEAN>7891435043198</cEAN><xProd>LIZ-57106/006-PLACA 4X2 2P SEPARAD.</xProd><NCM>39259090</NCM><CFOP>5102</CFOP><uCom>UNID</uCom><qCom>1.0000</qCom><vUnCom>4.1000</vUnCom><vProd>4.10</vProd><cEANTrib>7891435043198</cEANTrib><uTrib>UNID</uTrib><qTrib>1.0000</qTrib><vUnTrib>4.1000</vUnTrib><indTot>1</indTot></prod><imposto><ICMS><ICMS00><orig>0</orig><CST>00</CST><modBC>3</modBC><vBC>4.10</vBC><pICMS>17.00</pICMS><vICMS>0.70</vICMS></ICMS00></ICMS><PIS><PISAliq><CST>01</CST><vBC>0.00</vBC><pPIS>0.00</pPIS><vPIS>0.00</vPIS></PISAliq></PIS><COFINS><COFINSAliq><CST>01</CST><vBC>0.00</vBC><pCOFINS>0.00</pCOFINS><vCOFINS>0.00</vCOFINS></COFINSAliq></COFINS></imposto></det><det nItem="4"><prod><cProd>09077</cProd><cEAN>7891435042924</cEAN><xProd>LIZ-57115/055-MODULO TOM.RJ45 CAT 5</xProd><NCM>85177099</NCM><CFOP>5405</CFOP><uCom>UNID</uCom><qCom>2.0000</qCom><vUnCom>13.9500</vUnCom><vProd>27.90</vProd><cEANTrib>7891435042924</cEANTrib><uTrib>UNID</uTrib><qTrib>2.0000</qTrib><vUnTrib>13.9500</vUnTrib><indTot>1</indTot></prod><imposto><ICMS><ICMS60><orig>0</orig><CST>60</CST><vBCSTRet>0.00</vBCSTRet><vICMSSTRet>0.00</vICMSSTRet></ICMS60></ICMS><PIS><PISAliq><CST>01</CST><vBC>0.00</vBC><pPIS>0.00</pPIS><vPIS>0.00</vPIS></PISAliq></PIS><COFINS><COFINSAliq><CST>01</CST><vBC>0.00</vBC><pCOFINS>0.00</pCOFINS><vCOFINS>0.00</vCOFINS></COFINSAliq></COFINS></imposto><infAdProd>J.LEITE</infAdProd></det><total><ICMSTot><vBC>47.10</vBC><vICMS>8.01</vICMS><vBCST>0.00</vBCST><vST>0.00</vST><vProd>143.00</vProd><vFrete>0.00</vFrete><vSeg>0.00</vSeg><vDesc>0.00</vDesc><vII>0.00</vII><vIPI>0.00</vIPI><vPIS>0.00</vPIS><vCOFINS>0.00</vCOFINS><vOutro>0.00</vOutro><vNF>143.00</vNF></ICMSTot></total><transp><modFrete>9</modFrete></transp><cobr><fat><nFat>174258</nFat><vOrig>143.00</vOrig><vLiq>143.00</vLiq></fat><dup><nDup>174258-01</nDup><dVenc>2012-12-19</dVenc><vDup>143.00</vDup></dup></cobr><infAdic><obsCont xCampo="INFO1"><xTexto>LJ:00 LE: PD:143915 VD:17 PORT:CA000000000 RG:00 PP:P TV:P</xTexto></obsCont><obsCont xCampo="INFO2"><xTexto>CL:12192 TR:22 USU:LUCIANA</xTexto></obsCont></infAdic></infNFe><Signature xmlns="http://www.w3.org/2000/09/xmldsig#"><SignedInfo><CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/><SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/><Reference URI="#NFe26121110786028000150550000001742581823388736"><Transforms><Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/><Transform Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/></Transforms><DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><DigestValue>4W0N4zzJkdgDMgr2JpOY/kZJ63E=</DigestValue></Reference></SignedInfo><SignatureValue>B9QieVq+Cy6akczJ3p6mkn22aznrSXSo3d4UJstTk/p74X7vz3clZaU96wS9pQ7i0cEp64YFW3M76x3Jo3HvdimYmC0FjyNTfrnACHZPCNpnAgtwmXjuad2wDrOYyDpRYlWBO3a1xGxLDfJKOLeqM4fo2pqiPNk55QeiI69LwejE2RBnpWQ8PbloIGlsmAqGi7+2AoFDrM4S0thNTalJu4AGeh6dWoj0MojYPQGtQoReda9cUL8fVT7u00w1tnc4GSWY6yJSsTiOCanbevcm0fPFnAc7f6+xO8NhtBFlgvulmB8dTMqiV5xRTP60TAAPK923OrO/8ii4RfOcA1IM2A==</SignatureValue><KeyInfo><X509Data><X509Certificate>MIIIYjCCBkqgAwIBAgIQBuE5vBq15hqMRx4l12Nj+DANBgkqhkiG9w0BAQsFADBzMQswCQYDVQQGEwJCUjETMBEGA1UEChMKSUNQLUJyYXNpbDEtMCsGA1UECxMkQ2VydGlzaWduIENlcnRpZmljYWRvcmEgRGlnaXRhbCBTLkEuMSAwHgYDVQQDExdBQyBJbnN0aXR1dG8gRmVuYWNvbiBHMjAeFw0xMjA0MDIwMDAwMDBaFw0xMzA0MDEyMzU5NTlaMIHhMQswCQYDVQQGEwJCUjETMBEGA1UEChQKSUNQLUJyYXNpbDEtMCsGA1UECxQkQXV0ZW50aWNhZG8gcG9yIEFSIEluc3RpdHV0byBGZW5hY29uMRswGQYDVQQLFBJBc3NpbmF0dXJhIFRpcG8gQTExFTATBgNVBAsUDElEIC0gMzAwMTUxNDEkMCIGA1UEAxMbSU1FTCBNQVRFUklBTCBFTEVUUklDTyBMVERBMTQwMgYJKoZIhvcNAQkBFiVhbGV4YW5kcmVAaW1lbG1hdGVyaWFsZWxldHJpY28uY29tLmJyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnrMirtAOTi35D6AoTsNbLPYx605mktwsuh1A0JIoxS/Boh3cMExvPj/VMLXvJu51OfzSIU5lkCV2dttjlryarxk/0JiT5b2jBYT3ldtZTX37Awm2FGfoy95MXoShGr6QMpJVVd6r0kTP0J/bVOMa2LG98CrXAnKMrZ8RTYsIM+0C536m/fiB50J3GtsxMcg69NmAfj/XC4yTpya7hOTWqKSycPZPN9KJH1OHxeXc4RpjxcIWKU4VbVEKO6VVM98mwga0n71cuaIlWlHEz+yDBfRooHulBl1byUL/9/mG1D0KLjaFcepGtu5D5o+Af2qdS8r5Jeubrek10vYruVj7mwIDAQABo4IDgTCCA30wgcwGA1UdEQSBxDCBwaA4BgVgTAEDBKAvBC0yNzA2MTk3MjcwNjIyMDg2NDcyMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDCgKgYFYEwBAwKgIQQfQUxFWEFORFJFIEFVR1VTVE8gU0hJU0hJRE8gR09FU6AZBgVgTAEDA6AQBA4xMDc4NjAyODAwMDE1MKAXBgVgTAEDB6AOBAwwMDAwMDAwMDAwMDCBJWFsZXhhbmRyZUBpbWVsbWF0ZXJpYWxlbGV0cmljby5jb20uYnIwCQYDVR0TBAIwADAfBgNVHSMEGDAWgBT7M75zvfLXcFNbovCQ1Ffq/obMhjAOBgNVHQ8BAf8EBAMCBeAwgYgGA1UdIASBgDB+MHwGBmBMAQIBITByMHAGCCsGAQUFBwIBFmRodHRwOi8vaWNwLWJyYXNpbC5hY2ZlbmFjb24uY29tLmJyL3JlcG9zaXRvcmlvL2RwYy9BQy1JbnN0aXR1dG8tRmVuYWNvbi9EUENfQUMgSW5zdGl0dXRvIEZlbmFjb24ucGRmMIIBIgYDVR0fBIIBGTCCARUwW6BZoFeGVWh0dHA6Ly9pY3AtYnJhc2lsLmFjZmVuYWNvbi5jb20uYnIvcmVwb3NpdG9yaW8vbGNyL0FDSW5zdGl0dXRvRmVuYWNvbkcyL0xhdGVzdENSTC5jcmwwWqBYoFaGVGh0dHA6Ly9pY3AtYnJhc2lsLm91dHJhbGNyLmNvbS5ici9yZXBvc2l0b3Jpby9sY3IvQUNJbnN0aXR1dG9GZW5hY29uRzIvTGF0ZXN0Q1JMLmNybDBaoFigVoZUaHR0cDovL3JlcG9zaXRvcmlvLmljcGJyYXNpbC5nb3YuYnIvbGNyL0NlcnRpc2lnbi9BQ0luc3RpdHV0b0ZlbmFjb25HMi9MYXRlc3RDUkwuY3JsMB0GA1UdJQQWMBQGCCsGAQUFBwMCBggrBgEFBQcDBDCBnwYIKwYBBQUHAQEEgZIwgY8wYwYIKwYBBQUHMAKGV2h0dHA6Ly9pY3AtYnJhc2lsLmFjZmVuYWNvbi5jb20uYnIvcmVwb3NpdG9yaW8vY2VydGlmaWNhZG9zL0FDX0luc3RpdHV0b19GZW5hY29uX0cyLnA3YzAoBggrBgEFBQcwAYYcaHR0cDovL29jc3AuY2VydGlzaWduLmNvbS5icjANBgkqhkiG9w0BAQsFAAOCAgEAil0mx/HBVVKkrnXn0GV4xgrtaJCD01Bu035eIgU4Evxl+i7G4l+UPLIPPfM94aQkLtQYguTut80yH3GzEnqoXm/Inaha72VYRfG6SUyNni5ElBwDf+Sfhm/X9tA6mP0dgj8Axl5h3BhHmNhGvBLDZ40scHIxaamRMmy91LF8PgJtwoNtteTSgX8NRZrh4XNgYVVTKoyfezoox4FfBO5lb1pv2dlT25+NiJZiZpKffn4+3FgOGxOOSlOO2XRaeL3HOm00MAJD7psim+hikxbsI/3x/G5E34jDf2+EiryUjV/xKAndL8wlxc3TiTZsPp6Bv7CU7ReGGCAaGOfGV8fkIca5rbgpHWNEzxC/ngF5TZE2WtyFg5c78V5Pnm47I9KboaPEC3vpPaB3DoujNn7bxCsqLdIZ+Pzyvnbp2oWEVjeoVrtij0Y0xGuxvfAblve8BJNTfNarV/RYtiyl6Zy8sccCehxhDySjSlqjEBevBAB8wVP8hd6MvkAbRAoRBgHi9csAurbjA/sYgmqdRdEbqRdzGb8TLvtt9vCKB/gqHh98NP0lOj5omCRSNn8kkwBuPXbSaM2x/wHaVHbwnfIKZhgL6OEFw2vDgx0LX7guNZe97743eS/cAwHO1HDBesyEHjWzMGqAk5Sss5DEWLQ2UrbSVB8f627/QDKBDWUENys=</X509Certificate></X509Data></KeyInfo></Signature></NFe><protNFe xmlns="http://www.portalfiscal.inf.br/nfe" versao="2.00"><infProt Id="NFe1"><tpAmb>1</tpAmb><verAplic>NFEPE_P_04.00.00.017</verAplic><chNFe>26121110786028000150550000001742581823388736</chNFe><dhRecbto>2012-11-28T16:41:54</dhRecbto><nProt>126120051155489</nProt><digVal>4W0N4zzJkdgDMgr2JpOY/kZJ63E=</digVal><cStat>100</cStat><xMotivo>Autorizado o uso da NF-e</xMotivo></infProt></protNFe></nfeProc>';
		   String data = "<root><row><column name='username' length='6'>admin</column>"
		        + "<column name='password' length='1'>p</column></row><row>"
		        + "<column name='username' length='6'>j</column>"
		        + "<column name='password' length='8'>q</column></row></root>";
		   SAXBuilder builder=new SAXBuilder();
		   try {
			   System.out.println(command.getBytes("UTF-8"));
			   InputStream stream = new ByteArrayInputStream(command.getBytes("UTF-8"));
			  
				 document =(Document)  builder.build(stream);
				Element rootNode = document.getRootElement();
				Namespace ns = Namespace.getNamespace("http://www.portalfiscal.inf.br/nfe");
				
				Element nfeElement=null;
			    for(Element e : rootNode.getChildren()){  
			        
			        if(e.getName().equals("NFe")){  
			        
			          nfeElement = e;  
			          
			        }  
			        
			      }  
				  
				Element infNFe =(Element) nfeElement.getChild("infNFe",ns);  
				Element emit = infNFe.getChild("emit",ns);  
				Element enderEmit=(Element)emit.getChild("enderEmit", ns);
				Element det=(Element) infNFe.getChild("det", ns);
				Element imposto=(Element) det.getChild("imposto",ns);
				Element icms= (Element) imposto.getChild("ICMS", ns);
				Element icms00=(Element) icms.getChild("ICMS00", ns);
				//Element pis=(Element) imposto.getChild("pis", ns);
				//Element PISAliq= (Element) pis.getChild("PISAliq", ns);
				//Element confins= (Element) imposto.getChild("CONFINS", ns);
				//Element confisAliq=(Element) confins.getChild("CONFINSAliq", ns);
				//Element 
				
				
				Fornecedor fornecedor=new Fornecedor();
				fornecedor.setCnpj(emit.getChildText("CNPJ", ns));
				fornecedor.setRazaosocial(emit.getChildText("xNome",ns));
				fornecedor.setFantasia(emit.getChildText("xFant", ns));
				fornecedor.setLogradouro(enderEmit.getChildText("xLgr", ns));
				fornecedor.setNumero(enderEmit.getChildText("nro", ns));
				fornecedor.setBairro(enderEmit.getChildText("xBairro", ns));
				//fornecedor.setIbge(enderEmit.getChild("cMun", ns));
				fornecedor.setCidade(enderEmit.getChildText("xMun", ns));
				fornecedor.setCep(enderEmit.getChildText("CEP", ns));
				fornecedor.setUf(enderEmit.getChildText("CEP", ns));
				fornecedor.setTelefone(enderEmit.getChildText("fone", ns));
				fornecedor.setIe(emit.getChildText("IE", ns));
				fornecedor.setIm(emit.getChildText("IM", ns));
				fornecedor.setHomepage(enderEmit.getChildText("xCpl", ns));
				//enderEmit.
				//fornecedor.setRetconfins(Float.parseFloat(confisAliq.getChildText("pCONFINS", ns)));
				//fornecedor.setRetpis(Float.parseFloat(PISAliq.getChildText("pPIS", ns)));
				
				/*for (int i = 0; i < emit.size(); i++) {
					 
					   Element node = (Element) emit.get(i);
			 
					   System.out.println("First Name : " + node.getChildText("CNPJ"));
					   System.out.println("Last Name : " + node.getChildText("xNone"));
					   System.out.println("Fantaisa : " + node.getChildText("xFant"));
					   //System.out.println("Salary : " + node.getChildText("salary"));
			 
					}*/
				//Element emit = infNFe.getChild("emit");  
				//String idnfe=emit.getAttributeValue("cUF");
				//List element = Nfe.getChildren();
				//String xNome =  emit.getChild("xNome");
				//System.out.println(fornecedor);
				
			    //despesa.setFornecedor(rootNode)
				//rootNode
				return fornecedor;
		} catch (IOException e) {
			e.printStackTrace();
			return null;
			// TODO: handle exception
		}catch ( JDOMException e){
			System.out.println(e.getMessage());
			System.out.println(e.getCause());
			System.out.println(e.getStackTrace());
		}
		return null;
		   
	 }
	 
}

