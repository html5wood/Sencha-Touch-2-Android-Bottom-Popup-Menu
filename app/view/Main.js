Ext.define('SenchaDemo.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    fullscreen:true,
    id: 'mainId',
	requires: ['Ext.SegmentedButton', 'Ext.TitleBar'],
    config: {
        layout: {
            type: 'hbox',
            align: 'center',
            pack: 'center'
        },
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Android Menu Popup Demo',
                items:[{
                    xtype: 'button',
                    text: 'Tutorial',
                    ui: 'back',
                    handler: function(){
                        window.location.href = 'http://html5wood.com/android-bottom-popup-menu-with-sencha-touch-2/';
                    }
                }]
            },
            {
                xtype: 'segmentedbutton',
                allowDepress: false,
                items: [{ 
                    text: 'Show',  
                    handler: function() {
						Ext.Viewport.add(Ext.ComponentQuery.query('#popupMenu')[0]);
                        Ext.ComponentQuery.query('#popupMenu')[0].show();
                    } 
                },{
                    text: 'Hide', 
                    handler: function() { 
                        Ext.ComponentQuery.query('#popupMenu')[0].hide();
                    } 
                }]
                
            }
        ],
        listeners:{
            activate: function(){
                Ext.widget('popupbox');
            }
        }
    }
});
