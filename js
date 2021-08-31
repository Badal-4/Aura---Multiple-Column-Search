({
    doInit : function(component,event,helper)
    {
        var action = component.get("c.getAcc");
        action.setCallback(this,function(response)
                           {
                               var resp = response.getReturnValue();
                               component.set("v.resultData",resp);
                           });
        $A.enqueueAction(action);
    },
    redirectToSobject : function(component,event)
    {
        var selectedItem = event.currentTarget;
        var recordId = selectedItem.dataset.record;
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            "recordId" : recordId,
            "slideDevName" : "related"
        });
        navEvt.fire();
    },
    handleChange1  : function(component,event,helper)
    {
        var act = component.get("c.searchAccts");
        act.setParams({
            searchKey :  component.find("searchName").get("v.value")
        });
        act.setCallback(this,function(respo)
                        {
                            var res = respo.getReturnValue();
                            component.set("v.resultData",res);
                        });
        $A.enqueueAction(act);
    },
    handleChange2  : function(component,event,helper)
    {
        var act = component.get("c.searchAccByType");
        act.setParams({
            types :  component.find("searchType").get("v.value")
        });
        act.setCallback(this,function(respo)
                        {
                            var res = respo.getReturnValue();
                            component.set("v.resultData",res);
                        });
        $A.enqueueAction(act);
    },
    handleChange3  : function(component,event,helper)
    {
        var act = component.get("c.searchAccByPhone");
        act.setParams({
            phones :  component.find("searchPhone").get("v.value")
        });
        act.setCallback(this,function(respo)
                        {
                            var res = respo.getReturnValue();
                            component.set("v.resultData",res);
                        });
        $A.enqueueAction(act);
    }
})
