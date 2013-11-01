var user = {
    name: 'niexin',
    func: function() {
        console.log(this.name);
    }
};

var foo = {
    name: 'foobar'
};

foo.func = user.func;
foo.func();

// bind to user context
foo.func1 = user.func.bind(user);
foo.func1();

// bind to foo context
func = user.func.bind(foo);
func();

func2 = func;
func2();

// bind variable list
var person = {
    name: 'niexin',
    says: function(act, obj) {
        console.log(this.name + ' ' + act + ' ' + obj);
    }
};

person.says('loves', 'yuyu');

nieLoves = person.says.bind(person, 'loves');
nieLoves('you');
