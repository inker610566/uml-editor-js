var UMLEditorModel = function(
    OnNewClass
)
{
    var do_nothing = function(){};
    // Model call these to do changes in UI
    this.UIReflectors = {
        ChangeButtonState: {
            ChangeSelectButton: do_nothing,
            ChangeAddClassButton: do_nothing,
            ChangeAddLineButton: do_nothing
        }
    };
    // Register Event to catch model change
    this.Events = {
        OnNewClass: do_nothing // (ClassModel, x, y)->()
    };

    var _addClassMode = new AddClassMode(this);
    var _currentMode = new DefaultMode(this);

    function ClickButton(id)
    {
        for(var key in Button)
            if(key != id)
                this.ButtonUpdaters[key](false);
        this.ButtonUpdaters[id](true);
    };
    // @param   which ClassModel is clicked
    this.MouseDownClass = function(_class, x, y)
    {
        _currentMode.MouseDownCanvas(_class, x, y);
    };
    this.MouseUpClass = function(_class, x, y)
    {
        _currentMode.MouseUpClass(_class, x, y);
    };
    this.MouseMove = function(x, y)
    {
        _currentMode.MouseMove(x, y);
    };
    this.MouseLeaveCanvas = function(x, y)
    {
        _currentMode.MouseLeaveCanvas(x, y);
    };
    this.MouseDownCanvas = function(x, y)
    {
        _currentMode.MouseDownCanvas(x, y);
    };
    this.MouseUpCanvas = function(x, y)
    {
        _currentMode.MouseUpCanvas(x, y);
    };

    // Toolbox
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
        _currentMode = _addClassMode;
    };
    this.ClickAddLineButton = function()
    {
        ClickButton.call(this, "ChangeAddLineButton");
    };
};
