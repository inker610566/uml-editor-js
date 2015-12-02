var AddClassMode = function(model)
{
    // @param   which ClassModel is clicked
    this.MouseDownClass = function(_class, x, y)
    {
    };
    this.MouseUpClass = function(_class, x, y)
    {
        x += _class.x;
        y += _class.y;
        model.Events.OnNewClass(new ClassObject(x, y));
    };
    this.MouseMove = function(x, y)
    {
    };
    this.MouseLeaveCanvas = function(x, y)
    {
    };
    this.MouseDownCanvas = function(x, y)
    {
        model.Events.OnNewClass(new ClassObject(x, y));
    };
    this.MouseUpCanvas = function(x, y)
    {
    };
};
