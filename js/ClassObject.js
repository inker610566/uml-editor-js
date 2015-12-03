var ClassObject = function(sx, sy)
{
    this.x = sx;
    this.y = sy;
    var do_nothing = function(){};
    this.UIReflectors = {
        FocusIt: do_nothing
    }
};
