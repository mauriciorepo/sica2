Ext.define('App.model.Usuario',{

	extend:'Ext.data.Model',
	fields:[
	
 	  {name:'idusuario' ,type:'int'},
 	  {name:'nome' ,type:'string'},
 	  {name:'login' ,type:'string'},
 	  {name:'senha' ,type:'string'},
 	  {name:'ativo' ,type:'string'}
 	  
	],
	
	validations:[
	   {type:'presence',field:'senha'},
	   {type:'presence',field:'login'},
	   {type:'inclusion' ,field:'ativo', list:['S','N'] }
	]
	
});