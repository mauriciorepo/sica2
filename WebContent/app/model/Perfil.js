Ext.define('App.model.Perfil',{

	extend:'Ext.data.Model',
	fields:[
		 {name:'idperfil',type:'int'},
		 {name:'cadastrocliente',type:'string'},
		 {name:'atualizacliente',type:'string'},
		 {name:'deletecliente',type:'string'},
		 {name:'cadastrousuario',type:'string'},
		 {name:'atualizausuario',type:'string'},
		 {name:'deleteusuario',type:'string'},
		 {name:'cadastrovenda',type:'string'},
		 {name:'atualizavenda',type:'string'},
		 {name:'cadastropreco',type:'string'},
		 {name:'atualizapreco',type:'string'},
		 {name:'deletepreco',type:'string'},
		 {name:'cadastrocartao',type:'string'},
		 {name:'atualizacartao',type:'string'},
		 {name:'deletecartao',type:'string'},
		 {name:'cadastromovimento',type:'string'},
		 {name:'atualizamovimento',type:'string'},
		 {name:'deletemovimento',type:'string'}
		 
		],
		
		validations:[
		
		{type:'precense',field:'cadastrocliente'},
		{type:'precense',field:'atualizacliente'},
		{type:'precense',field:'deletecliente'},
		{type:'precense',field:'cadastrousuario'},
		{type:'precense',field:'atualizausuario'},
		{type:'precense',field:'deleteusuario'},
		{type:'precense',field:'cadastrovenda'},
		{type:'precense',field:'atualizavenda'},
		{type:'precense',field:'cadastropreco'},
		{type:'precense',field:'atualizapreco'},
		{type:'precense',field:'deletepreco'},
		{type:'precense',field:'cadastrocartao'},
		{type:'precense',field:'atualizacartao'},
		{type:'precense',field:'deletecartao'},
		{type:'precense',field:'cadastromovimento'},
		{type:'precense',field:'atualizamovimento'},
		{type:'precense',field:'deletemovimento'},
		
			
				{type:'length',field:'cadastrocliente',min:1,max:1},
		{type:'length',field:'atualizacliente',min:1,max:1},
		{type:'length',field:'deletecliente',min:1,max:1},
		{type:'length',field:'cadastrousuario',min:1,max:1},
		{type:'length',field:'atualizausuario',min:1,max:1},
		{type:'length',field:'deleteusuario',min:1,max:1},
		{type:'length',field:'cadastrovenda',min:1,max:1},
		{type:'length',field:'atualizavenda',min:1,max:1},
		{type:'length',field:'cadastropreco',min:1,max:1},
		{type:'length',field:'atualizapreco',min:1,max:1},
		{type:'length',field:'deletepreco',min:1,max:1},
		{type:'length',field:'cadastrocartao',min:1,max:1},
		{type:'length',field:'atualizacartao',min:1,max:1},
		{type:'length',field:'deletecartao',min:1,max:1},
		{type:'length',field:'cadastromovimento',min:1,max:1},
		{type:'length',field:'atualizamovimento',min:1,max:1},
		{type:'length',field:'deletemovimento',min:1,max:1}
		]
		
})