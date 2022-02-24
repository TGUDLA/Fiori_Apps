sap.ui.define([
    'nvidia/sd/sales/controller/BaseController',
    'sap/m/MessageBox',
    'sap/m/MessageToast'
], function(BaseController, MessageBox, MessageToast) {
    'use strict';
    return BaseController.extend("nvidia.sd.sales.controller.View2",{
        onInit: function () {
            
        },
        onBack: function(){
            //Step 1: Get the control object of parent Container
            var oAppCon = this.getView().getParent();
            //Step 2: Mother is responsible for nav, App Con to API
            oAppCon.to("idView1");

        },
        confirmOrder: function(){
            MessageBox.confirm("Would you like to order?",{
                onClose: function(state){
                    if(state === "OK"){
                        MessageToast.show("Order XXXX has been placed successfully! 😂");
                    }else{
                        MessageBox.error("Ola! You have just hurt me 😜");
                    }
                }
            });
        },
        onPrintAll: function(oEvent){
            var oBtn = oEvent.getSource();
            debugger;
            var oCombox = this.getView().byId("idMultiC");
            var aItems = oCombox.getSelectedItems();
            for (let index = 0; index < aItems.length; index++) {
                var itm = aItems[index];
                console.log(itm.getText());
            };
        }

    });
});