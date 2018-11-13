Ext.define('App.model.Preco',{

	extend:'Ext.data.Model',
	fields:[
	
 	  {name:'idpreco' ,type:'int'},
 	  {name:'precobase' ,type:'string'},
 	  {name:'operador' ,type:'string'},
 	  {name:'reajuste' ,type:'float'},
 	  {name:'minutos' ,type:'int'},
 	  {name:'valor' ,type:'float'},
 	  {name:'minutos2' ,type:'int'},
 	  {name:'valorestada' ,type:'float'},
 	  {name:'minutosestada' ,type:'int'},
 	  {name:'flagestada' ,type:'string'},
 	  {name:'ativo' ,type:'string'},
 	  {name:'horasegundainicio' ,type:'string'},
 	  {name:'senha' ,type:'string'},
 	  {name:'ativo' ,type:'string'}
 	  
	],
	
	validations:[
	   {type:'presence',field:'senha'},
	   {type:'presence',field:'login'},
	   {type:'inclusion' ,field:'ativo', list:['S','N'] }
	]
	
});