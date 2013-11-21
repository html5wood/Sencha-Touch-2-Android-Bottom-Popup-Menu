Ext.define('SenchaDemo.view.PopupMenu',{  
    extend: 'Ext.Container',  
    xtype: 'popupbox',
    config:{
		itemId: 'popupMenu',
        bottom:0,
        height: '20%',  
        width: '100%',
		cls: 'removeBorder',
        showAnimation: { 
			type: 'slide', 
			easing: 'ease-out',
			direction: 'up', 
			duration: 300
		},
		hideAnimation: { 
			type: 'slideOut', 
			easing: 'ease-out',
			direction: 'down',
			duration: 400
		},		
        layout:'vbox',
        defaults:{
            flex: 1,
        },
        items:[  
            {
                xtype: 'panel',
                layout:'hbox',
                defaults:{
                    flex: 1,
                },
                items: [{
					xtype: 'panel',
					cls: 'segment',
					items:[{
						xtype: 'button',
						iconCls: 'action',
						iconmask: true,
						text: 'action',
						cls: 'menuButtons',
						handler: function(){
							Ext.ComponentQuery.query('#popupMenu')[0].hide();
						}
					}]
                    
                }, {
					xtype: 'panel',
					cls: 'segment',
					items:[{
						xtype: 'button',
						iconCls: 'info',
						iconmask: true,
						text: 'info',
						cls: 'menuButtons',
						handler: function(){
							Ext.ComponentQuery.query('#popupMenu')[0].hide();
						}
					}]
                    
                }]
            },{
                xtype: 'panel',
                layout:'hbox',
				style: 'border-top:1px solid',
                defaults:{
                    flex: 1,
                },
                items: [{
					xtype: 'panel',
					cls: 'segment',
					items:[{
						xtype: 'button',
						iconCls: 'settings',
						iconmask: true,
						text: 'settings',
						cls: 'menuButtons',
						handler: function(){
							Ext.ComponentQuery.query('#popupMenu')[0].hide();
						}
					}]
                    
                }, {
					xtype: 'panel',
					cls: 'segment',
					items:[{
						xtype: 'button',
						iconCls: 'search',
						iconmask: true,
						text: 'search',
						cls: 'menuButtons',
						handler: function(){
							Ext.ComponentQuery.query('#popupMenu')[0].hide();
						}
					}]
                    
                },{
					xtype: 'panel',
					cls: 'segment',
					items:[{
						xtype: 'button',
						iconCls: 'refresh',
						iconmask: true,
						text: 'refresh',
						cls: 'menuButtons',
						handler: function(){
							Ext.ComponentQuery.query('#popupMenu')[0].hide();
						}
					}]
                    
                }]
            }
            
        ]  
    }  
});  