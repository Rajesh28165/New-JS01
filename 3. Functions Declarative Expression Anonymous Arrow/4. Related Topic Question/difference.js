const func1 = {
    x:5,
    res1: () => {
        console.log(this.x);
    }
};

func1.res1();

const func2={
    x:10,
    res2: function() {
        console.log(this.x);
    }
};
func2.res2();