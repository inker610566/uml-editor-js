var UMLEditorModel = function(
    OnNewClass
)
{
    var that = this;
    var do_nothing = function(){};
    // Model call these to do changes in UI
    this.UIReflectors = {
        ChangeButtonState: {
            ChangeSelectButton: do_nothing,
            ChangeAddClassButton: do_nothing,
            ChangeAddLineButton: do_nothing
        }
    };
    function ClickButton(id)
    {
        for(var key in Button)
            if(key != id)
                this.ButtonUpdaters[key](false);
        this.ButtonUpdaters[id](true);
    };
    // @param   which ClassModel is clicked
    this.MouseDownClass = function(_class)
    {
    };
    this.MouseUpClass = function()
    {
    };
    this.MouseMove = function()
    {
    };
    this.MouseLeave = function()
    {
    };
    var ClickButton = function(rname)
    {
        var cbs = this.UIReflectors.ChangeButtonState;
        for(var attr_name in cbs)
            if(attr_name != rname)
                cbs[attr_name](false);
        cbs[rname](true);
    }
    this.ClickSelectButton = function()
    {
        ClickButton.call(this, "ChangeSelectButton");
    };
    this.ClickAddClassButton = function()
    {
        ClickButton.call(this, "ChangeAddClassButton");
    };
    this.ClickAddLineButton = function()
    {
        ClickButton.call(this, "ChangeAddLineButton");
    };
};
