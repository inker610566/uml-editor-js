var LineObject = function(sx1, sy1, sx2, sy2)
{
    this.endpoints = [[sx1, sy1], [sx2, sy2]];
    var do_nothing = function(){};
    this.UIReflectors = {
        ChangeXY: do_nothing // (endpoints) -> ()
    };
    this.length = function()
    {
        return Math.hypot(
            this.endpoints[0][0]-this.endpoints[1][0],
            this.endpoints[0][1]-this.endpoints[1][1]
        );
    };
};
