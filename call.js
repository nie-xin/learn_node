var user = {
    name: 'niexin',
    display: function(words) {
        console.log(this.name + ' say ' + words);
    }
};

var foo = {
    name: 'foobar'
};

user.display.call(foo, 'hello');
