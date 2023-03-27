const { default: mongoose } = require("mongoose");
// const autoIncrement = require('')
module.exports = mongoose => {
    const schema = mongoose.Schema({
        id: Number,
        name: String,
        currentClass: Number,
        division: String
    }, {
        timestamps: true
    });
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    })
    const Students = mongoose.model("Students", schema);
    return Students;
}


/**
 * node --> mongoose <-- mongodb
 *          fetch / axios
 * 
 */