
const yuml_diagram = require('../index.js');
const fs = require('fs');

var yumlText =
    ` // {type:sequence}
    [User{:ac}]RegisterUserCredential>[Party{:ag}] 
    [Party{:ag}]
    [Party{:rm}]
    [Credential{:rm}]
    [Credential{:ag}]UserRegistered>)[Credential{:rm}]
    [Credential{:ag}]UserRegistered>)[Credential{:pm}]
    [Credential{:pm}]RegisterParty>[Party{:ag}]
    [Party{:ag}]PartyRegistered>)[Party{:rm}]
    [Credential{:pm}]SendVerifyUserInstructions>[Mailer{:sy}]
    [Mailer{:sy}]VerifyUserInstructions.>[User{:ac}]
    [User{:ac}]VerifyUser>[Credential{:ag}] 
    [Credential{:ag}]UserVerified>[Credential{:rm}]
`;

var yuml = new yuml_diagram();
var svg = yuml.processYumlDocument(yumlText, false);

fs.writeFileSync("./test.yuml.svg", svg);
