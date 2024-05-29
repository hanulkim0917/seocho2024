globalThis.name = 'GLOBAL';
this.name = 'MODULE'

const obj = {
    name: 'OBJ',
    f1: function () {
        console.log('f1=', this.name);
    },
    f2: () => {
        console.log('f2=', this.name);
    },
    f3() {
        console.log('f3=', this.name);
    }
};

obj.f1();
obj.f2();
obj.f3();

