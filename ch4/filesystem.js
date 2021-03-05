//file paths
const { fstat } = require('fs');
const path = require('path');
path.normalize("../one////two/./three.html");
// ../one/two/three.html

path.join("../", "one", "two", "three.html");
// ../one/two/three.html

path.dirname("../one/two/three.html");
// ../one/two

path.basename("../one/two/three.html");
// three.html

path.basename("../one/two/three.html", ".html");
//three

var pstring = "../one/two/three.html";
path.extname(pstring);
//html

path.relative(
    "/one/two/three/four",
    "/one/two/thumb/war"
);
//../../thumb/war

path.resolve('/one/two', '/three/four');
// /three/four

path.resolve('/one/two/three', '../', 'four', '../../five');
// /one/five



//fs.open
// fstat.open('path.js', 'r', (err, fileDescriptor) => {
//     console.log(fileDescriptor);
// });

//fs.rename(oldname, newname, callback);

