var AddClassMode = function(model)
{
    // @param   which ClassModel is clicked
    this.MouseDownObject = function(_class, x, y)
    {
    };
    this.MouseUpObject = function(_class, x, y)
    {
        x += _class.x;
        y += _class.y;
        model.Events.OnNewClass(new ClassObject(x, y));
    };
    this.MouseMoveCanvas = function(x, y)
    {
    };
    this.MouseLeaveCanvas = function(x, y)
    {
    };
    this.MouseDownCanvas = function(x, y)
    {
    };
    this.MouseUpCanvas = function(x, y)
    {
        model.Events.OnNewClass(new ClassObject(x, y));
    };
    this.EnterMode = function()
    {
    };
    this.LeaveMode = function()
    {
    };
};
