var ClassObject = function(sx, sy)
{
    this.x = sx;
    this.y = sy;
    var do_nothing = function(){};
    this.UIReflectors = {
        ChangeXY: do_nothing, // (x, y) -> ()
        Focus: do_nothing,
        UnFocus: do_nothing
    }
};
