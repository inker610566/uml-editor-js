var View = {
    // only need to track current max number
    g_zIndex: 2, 
    /*** Toolbox ***/
    CreateSelectNode: function(){
        var np = document.createElement('input');
        np.type = 'button';
        np.value = 'Select';
        return np;
    },
    CreateAddClassNode: function(){
        var np = document.createElement('input');
        np.type = 'button';
        np.value = 'Add Class';
        return np;
    },
    CreateAddLineNode: function(){
        var np = document.createElement('input');
        np.type = 'button';
        np.value = 'Add Line';
        return np;
    },
    CreateCanvasNode: function(){
        var div = document.createElement('div');
        div.style.position = 'relative';
        div.style.background = 'pink';
        div.style.width  = 500;
        div.style.height = 500;
        div.style.overflow = 'hidden';
        return div;
    },
    ActiveButton: function(button){
        button.style.color = 'black';
        button.style.fontWeight = 'bold';
        return button;
    },
    InactiveButton: function(button){
        button.style.color = 'gray';
        button.style.fontWeight = 'normal';
        return button;
    },
    /*** Object Node ***/
    ClassNode: {
        Create: function(x, y)
        {
            var w = 50, h = 50;
            var div = document.createElement('div');
            // div.style.background = 'white';
            div.style.width = w;
            div.style.height = h;
            div.style.border = "1px solid black";
            div.style.position = 'absolute';
            div.style.left = x;
            div.style.top = y;
            div.style.zIndex = ++View.g_zIndex;
            var wrapper = document.createElement('div');
            wrapper.className = 'wrapper';
            wrapper.style.position = 'relative';
            wrapper.style.width = w;
            wrapper.style.height = h;
            div.appendChild(wrapper);

            var canvas = document.createElement('canvas');
            canvas.width  = w;
            canvas.height = h;
            View.ClassNode.FillBackground(canvas);
            wrapper.appendChild(canvas);

            return div;
        },
        Focus: function(div)
        {
            var w = parseInt(div.style.width),
                h = parseInt(div.style.height);
            var pw = 10, ph = 10;
            View.FocusObjectNode(div);
            var can = div.getElementsByTagName('canvas')[0];
            View.ClassNode.DrawCross(can);
            var pxs = [(w-pw)/2,    -pw/2, (w-pw)/2, w-(pw/2)];
            var pys = [   -ph/2, (h-ph)/2, h-(ph/2), (h-ph)/2];
            
            for(var i = 0 ; i < pxs.length ; i ++)
                div.getElementsByClassName('wrapper')[0]
                    .appendChild(View.CreatePortNode(pxs[i], pys[i]));
        },
        UnFocus: function(div)
        {
            var w = parseInt(div.style.width),
                h = parseInt(div.style.height);
            var pw = 10, ph = 10;
            var can = div.getElementsByTagName('canvas')[0];
            View.ClassNode.FillBackground(can);
            var ports = div.getElementsByClassName('port');
            while(ports.length)
                ports[0].remove();
        },
        FillBackground: function(canvas)
        {
            var ctx = canvas.getContext("2d");
            ctx.fillStyle = "#FFFFFF";
            ctx.rect(0,0,canvas.width, canvas.height);
            ctx.fill();
        },
        DrawCross: function(canvas)
        {
            var ctx = canvas.getContext("2d");
            // draw
            function DrawLine(x1, y1, x2, y2)
            {
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
            DrawLine(0, 0, canvas.width, canvas.height);
            DrawLine(0, canvas.width, canvas.height, 0);
        }
    },
    LineNode: {
        Create: function(x1, y1, x2, y2)
        {
            var div = document.createElement('div');
            div.style.background = '#666';
            div.style.boxShadow = '0 0 20px #444';
            div.style.zIndex = ++View.g_zIndex;
            var len = Math.hypot(x2-x1, y2-y1)
            div.style.width  = len;
            div.style.height = 1;
            div.style.position = 'absolute';
            div.style.left = x1;
            div.style.top  = y1;
            div.style.transformOrigin = '0 50%';
            var deg = Math.acos((x2-x1)/len);
            if(y2<y1) deg = -deg;
            div.style.transform = "rotate("+deg+"rad)";
            return div;
        }
    },
    CreatePortNode: function(x, y)
    {
        var div = document.createElement('div');
        div.className = 'port';
        div.style.background = 'black';
        div.style.width  = 10;
        div.style.height = 10;
        div.style.position = 'absolute';
        div.style.left = x;
        div.style.top  = y;
        return div;
    },
    FocusObjectNode: function(div)
    {
        div.style.zIndex = ++View.g_zIndex;
    },
    ChangeObjectNodeXY: function(div, x, y)
    {
        div.style.left = x;
        div.style.top  = y;
    },
    ChangeLineNodeXY: function(div, endpoints)
    {
        var x1 = endpoints[0][0],
            y1 = endpoints[0][1],
            x2 = endpoints[1][0],
            y2 = endpoints[1][1];

        div.style.left = x1;
        div.style.top  = y1;
        var len = Math.hypot(x2-x1, y2-y1);
        div.style.width  = len;
        var deg = Math.acos((x2-x1)/len);
        if(y2<y1) deg = -deg;
        div.style.transform = "rotate("+deg+"rad)";
    }
};

