var AddLineMode = function(model)
{
    var _selecting = null,
        _draggingLine = null;
    this.MouseDownObject = function(_class, x, y)
    {
    };
    this.MouseUpObject = function(_class, x, y)
    {
        x += _class.x;
        y += _class.y;
    };
    this.MouseMoveCanvas = function(x, y)
    {
        line.endpoints[1][0] = x;
        line.endpoints[1][1] = y;
        line.UIReflectors.ChangeXY(line.endpoints);
    };
    this.MouseLeaveCanvas = function(x, y)
    {
    };
    this.MouseDownCanvas = function(x, y)
    {
    };
    this.MouseUpCanvas = function(x, y)
    {
    };
    var line = new LineObject(100, 100, 200, 200);
    this.EnterMode = function()
    {
        model.Events.OnNewLine(line);
    };
    this.LeaveMode = function()
    {
    };
};
