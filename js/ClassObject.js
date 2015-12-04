var ClassObject = function(sx, sy)
{
    this.x = sx;
    this.y = sy;
    var ports = [[], [], [], []];
    var do_nothing = function(){};
    this.UIReflectors = {
        ChangeXY: do_nothing, // (x, y) -> ()
        Focus: do_nothing,
        UnFocus: do_nothing
    };
    var w = 50, h = 50;
    function InPort0(x, y) { return -y >= Math.abs( x); }
    function InPort1(x, y) { return -x >= Math.abs( y); }
    function InPort2(x, y) { return  y >= Math.abs( x); }
    function InPort3(x, y) { return  x >= Math.abs( y); }
    var port_offset = [[0, -h/2],[-w/2, 0],[0, h/2],[w/2, 0]];
    var port_check = [InPort0, InPort1, InPort2, InPort3];
    // return 5 if not in any port else port no
    this.CheckInPort = function(x, y)
    {
        x -= w/2;
        y -= h/2;
        for(var i = 0 ; i < 4 ; i ++)
            if(port_check[i](x, y))
                return i;
        return 5;
    };
    this.PortLoc = function(no)
    {
        return [this.x+w/2+port_offset[no][0],
                this.y+h/2+port_offset[no][1]];
    }
    this.AddLineToPort = function(no, line)
    {
        ports[no].push(line);
    }
};
