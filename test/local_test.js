
const yuml_diagram = require('../index.js');
const fs = require('fs');

var yumlText =
    ` // {type:sequence}
    [:Computer{:ag}]async test>>[:Server{bg:yellow}]
    [:Computer{:ag}]sync test>[:Server]
    [:Computer{:ag}]sync test>[:Computer{:rm}]
`;

var yuml = new yuml_diagram();
var svg = yuml.processYumlDocument(yumlText, false);

fs.writeFileSync("./test.yuml.svg", svg);
