var View = {
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
        div.style.background = 'pink';
        div.style.width  = 500;
        div.style.height = 500;
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
    }
};
