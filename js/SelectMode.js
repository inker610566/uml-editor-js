var SelectMode = function(model)
{
    var _draggingObject = null,
        // object xy - mouse xy
        // relative to canvas
        _dragStartDX, _dragStartDY;

    var _FocusObject = null;

    function MoveDragObject(toX, toY)
    {
        // assert(_draggingObject != null)
        _draggingObject.x = toX;
        _draggingObject.y = toY;
        _draggingObject.UIReflectors.ChangeXY(
            _draggingObject.x,
            _draggingObject.y
        );
    }
    // @param   which ClassModel is clicked
    this.MouseDownObject = function(_class, x, y)
    {
        if(_FocusObject != null)
            _FocusObject.UIReflectors.UnFocus();
        _class.UIReflectors.Focus();
        _FocusObject = _draggingObject = _class;
        _dragStartDX = -x;
        _dragStartDY = -y;
    };
    this.MouseUpObject = function(_class, x, y)
    {
        _draggingObject = null;
    };
    this.MouseMoveObject = function(_class, x, y)
    {
        if(_draggingObject != null)
        {
            MoveDragObject(
                x+_class.x+_dragStartDX,
                y+_class.y+_dragStartDY
            );
        }
    };
    this.MouseMoveCanvas = function(x, y)
    {
        if(_draggingObject != null)
        {
            MoveDragObject(
                x+_dragStartDX,
                y+_dragStartDY
            );
        }
    };
    this.MouseLeaveCanvas = function(x, y)
    {
        _draggingObject = null;
    };
    this.MouseDownCanvas = function(x, y)
    {
    };
    this.MouseUpCanvas = function(x, y)
    {
    };
    this.EnterMode = function()
    {
    };
    this.LeaveMode = function()
    {
        if(_FocusObject != null)
            _FocusObject.UIReflectors.UnFocus();
    };
};
