var View = {
    // only need to track current max number
    g_zIndex: 2, 
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
    CreateClassNode: function(x, y, z_index)
    {
        var div = document.createElement('div');
        div.style.background = 'white';
        div.style.width  = 50;
        div.style.height = 50;
        div.style.border = "1px solid black";
        div.style.position = 'absolute';
        div.style.zIndex = ++View.g_zIndex;
        div.style.left = x;
        div.style.top = y;
        return div;
    },
    FocusObjectNode: function(div)
    {
        div.style.zIndex = ++View.g_zIndex;
    }
};

