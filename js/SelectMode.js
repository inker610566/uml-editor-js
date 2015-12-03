var SelectMode = function(model)
{
    // @param   which ClassModel is clicked
    this.MouseDownClass = function(_class, x, y)
    {
        _class.UIReflectors.FocusIt();
    };
    this.MouseUpClass = function(_class, x, y)
    {
    };
    this.MouseMove = function(x, y)
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
