const obj = {
    name: "JavaScript",
    getName:function() {
        console.log(this.name);
    },
    getBound:function() {
        return this.getName.bind(this);
    }
};

obj.getName();

const result = obj.getBound();
result();