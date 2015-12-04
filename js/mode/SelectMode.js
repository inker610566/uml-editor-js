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
        // focus lines
        for(var i = 0 ; i < 4 ; i ++)
        {
            var ploc = _draggingObject.PortLoc(i);
            for(var j = 0, ps = _draggingObject.ports[i];
                    j < ps.length ; j ++)
            {
                if(ps[j].epObject[0] == _draggingObject)
                {
                    ps[j].endpoints[0][0] = ploc[0];
                    ps[j].endpoints[0][1] = ploc[1];
                }
                else
                {
                    ps[j].endpoints[1][0] = ploc[0];
                    ps[j].endpoints[1][1] = ploc[1];
                }
                ps[j].UIReflectors.ChangeXY(ps[j].endpoints);
            }
        }
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
        // focus all lines
        for(var i = 0 ; i < 4 ; i ++)
            for(var j = 0, ps = _class.ports[i];
                    j < ps.length ; j ++)
                ps[j].UIReflectors.Focus();
    };
    this.MouseUpObject = function(_class, x, y)
    {
        _draggingObject = null;
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
