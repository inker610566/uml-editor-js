var AddLineMode = function(model)
{
    var _startDragging = null,
        _draggingLine = null;
    this.MouseDownObject = function(_class, x, y)
    {
        if(_startDragging != null)
        {
            // assert false
        }
        else
        {
            _startDragging = _class;
            _class.UIReflectors.Focus();
            // find start port
            var port_no = _class.CheckInPort(x, y);
            // assert port_no != 5
            var port_loc = _class.PortLoc(port_no);
            _draggingLine = new LineObject(
                port_loc[0], port_loc[1], x, y
            );
            model.Events.OnNewLine(_draggingLine);
        }
    };
    this.MouseUpObject = function(_class, x, y)
    {
        if(_draggingLine != null)
        {
            // assert _startDragging != null
            if(_startDragging != _class)
            {
                var port_no = _class.CheckInPort(x, y);
                // assert port_no != 5
                var port_loc = _class.PortLoc(port_no);
                _draggingLine.endpoints[1] = port_loc;
                _draggingLine.UIReflectors.ChangeXY(
                    _draggingLine.endpoints
                );
                _startDragging = _draggingLine = null;
            }
            else if(_draggingLine != null)
            {
                _draggingLine.UIReflectors.Destroy();
                _startDragging = _draggingLine = null;
            }
        }
    };
    this.MouseMoveCanvas = function(x, y)
    {
        if(_draggingLine != null)
        {
            _draggingLine.endpoints[1][0] = x;
            _draggingLine.endpoints[1][1] = y;
            _draggingLine.UIReflectors.ChangeXY(
                _draggingLine.endpoints
            );
        }
    };
    this.MouseLeaveCanvas = function(x, y)
    {
        if(_draggingLine != null)
        {
            _draggingLine.UIReflectors.Destroy();
            _startDragging = _draggingLine = null;
        }
    };
    this.MouseDownCanvas = function(x, y)
    {
    };
    this.MouseUpCanvas = function(x, y)
    {
        if(_draggingLine != null)
        {
            _draggingLine.UIReflectors.Destroy();
            _startDragging = _draggingLine = null;
        }
    };
    this.EnterMode = function()
    {
    };
    this.LeaveMode = function()
    {
        if(_draggingLine != null)
        {
            _draggingLine.UIReflectors.Destroy();
            _startDragging = _draggingLine = null;
        }
    };
};
