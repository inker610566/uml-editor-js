var SelectMode = function(model)
{
    var _draggingObject = null;
    // @param   which ClassModel is clicked
    this.MouseDownObject = function(_class, x, y)
    {
        _class.UIReflectors.FocusIt();
    };
    this.MouseUpObject = function(_class, x, y)
    {
    };
    this.MouseMoveObject = function(_class, x, y)
    {
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
    };
};
