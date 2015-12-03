var UMLEditorModel = function()
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
        OnNewClass: do_nothing, // (ClassObject)->()
        OnNewLine:  do_nothing // (LineObject)->()
    };

    var _addClassMode = new AddClassMode(this),
        _addLineMode  = new AddLineMode(this);
        _selectMode   = new SelectMode(this);
    var _currentMode  = new DefaultMode(this);
    // Mode
    function EnterMode(mode)
    {
        if(mode != _currentMode)
        {
            _currentMode.LeaveMode();
            mode.EnterMode();
            _currentMode = mode;
        }
    }

    function ClickButton(id)
    {
        for(var key in Button)
            if(key != id)
                this.ButtonUpdaters[key](false);
        this.ButtonUpdaters[id](true);
    };
    // @param   which ClassModel is clicked
    this.MouseDownObject = function(_class, x, y)
    {
        _currentMode.MouseDownObject(_class, x, y);
    };
    this.MouseUpObject = function(_class, x, y)
    {
        _currentMode.MouseUpObject(_class, x, y);
    };
    this.MouseMoveCanvas = function(x, y)
    {
        _currentMode.MouseMoveCanvas(x, y);
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
        EnterMode(_selectMode);
    };
    this.ClickAddClassButton = function()
    {
        ClickButton.call(this, "ChangeAddClassButton");
        EnterMode(_addClassMode);
    };
    this.ClickAddLineButton = function()
    {
        ClickButton.call(this, "ChangeAddLineButton");
        EnterMode(_addLineMode);
    };
};
