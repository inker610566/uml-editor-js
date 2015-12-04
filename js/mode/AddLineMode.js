var AddLineMode = function(model)
{
    var _startDragging = null,
        _stopDragging = null,
        _startPort = 5,
        _draggingLine = null;
    function CancelDraggingLine()
    {
        _draggingLine.UIReflectors.Destroy();
        _startDragging.UIReflectors.UnFocus();
        _startPort = 5;
        _startDragging = _draggingLine = null;
    }
    this.MouseDownObject = function(_class, x, y)
    {
        if(_startDragging != null)
        {
            _startDragging.UIReflectors.UnFocus();
            _stopDragging.UIReflectors.UnFocus();
            _startDragging = _stopDragging = null;
        }
        _startDragging = _class;
        _startDragging.UIReflectors.Focus();
        // find start port
        _startPort = _class.CheckInPort(x, y);
        // assert port_no != 5
        var port_loc = _class.PortLoc(_startPort);
        _draggingLine = new LineObject(
            port_loc[0], port_loc[1], x, y
        );
        model.Events.OnNewLine(_draggingLine);
    };
    this.MouseUpObject = function(_class, x, y)
    {
        if(_draggingLine != null)
        {
            // assert _startDragging != null
            if(_startDragging != _class)
            {
                _stopDragging = _class;
                var port_no = _class.CheckInPort(x, y);
                // assert port_no != 5
                var port_loc = _class.PortLoc(port_no);
                _draggingLine.endpoints[1] = port_loc;
                _draggingLine.UIReflectors.ChangeXY(
                    _draggingLine.endpoints
                );
                _draggingLine.epObject[0] = _startDragging;
                _draggingLine.epObject[1] = _stopDragging;
                _startDragging.AddLineToPort(_startPort, _draggingLine);
                _stopDragging.AddLineToPort(port_no, _draggingLine);
                _stopDragging.UIReflectors.Focus();
                _draggingLine.UIReflectors.Focus();
                _draggingLine = null;
            }
            else if(_draggingLine != null)
                CancelDraggingLine();
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
            CancelDraggingLine();
    };
    this.MouseDownCanvas = function(x, y)
    {
    };
    this.MouseUpCanvas = function(x, y)
    {
        if(_draggingLine != null)
            CancelDraggingLine();
    };
    this.EnterMode = function()
    {
    };
    this.LeaveMode = function()
    {
        if(_draggingLine != null)
            CancelDraggingLine();
        else if(_startDragging != null)
        {
            _startDragging.UIReflectors.UnFocus();
            _stopDragging.UIReflectors.UnFocus();
        }
    };
};
