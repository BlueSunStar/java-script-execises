/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * outputs a random map to the screen
 */

function createRandomBinaryArray(length){
    // empty array (array is roughtly a list)
    
    var output = []; // creates an array variable in javascript
    for (var ii = 0; ii < length; ii++){
            output.push(Math.floor(Math.random() * 2)); //get the lowest number in a set range, then output it into an array. "push is the javascript equivalent of "add" in a java arraylist
        }
        console.log(output);
        return output;
}

createRandomBinaryArray();

// creates a height and weight field, then sets those proprties on the object through a setter function
function Field (h, w) {
    this.height = h;
    this.width = w;
    this.generate(); //function is decalred here, but not defined
}



Field.prototype = {
    generate: function () { //generate function is defined here. 
        var output = []; //creates an array variable 
        var counter = 0;
        while (counter < this.height){
            output[counter] = createRandomBinaryArray(this.width); 
            counter++;
        }
        this.field = output;
        //console.log(output);
    },
    print: function (){
        //the map method takes a function and maps it onto every element os an array
        var printable = this.field.map(function(row){
            return row.join('');
        }).join('\n').replace(/0/g, ".").replace(/1/g, "%");
        console.log(printable);
    }
    };

var myField = new Field(10, 10);
myField.print();

/*
 * In java, this would look something like this:
 * 
 * public class Field
 * 
 * private int height;
 * private int weight;
 * 
 * 
 * public int getHeight(){
 * return height
 * }
 * 
 * public int getWeight(){
 * return weight
 * }
 * 
 * public int setWeight(){
 * return this.weight
 * }
 * public int setHeight()
 * return this.height
 * }
 * 
 * 
 * public static int generateArea(){
 * return height * weight;
 * }
 * 
 */



