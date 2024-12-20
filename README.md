# yUML diagrammer
Allows the creation of offline UML diagrams based on the [yUML Syntax](http://yuml.me/).

<a href="https://www.npmjs.com/package/yuml-diagram"><img alt="NPM Status" src="https://img.shields.io/npm/v/yuml-diagram.svg?style=flat"></a>
[![github](https://img.shields.io/github/stars/jaime-olivares/yuml-diagram.svg)]()
[![Build Status](https://dev.azure.com/jaime-olivares-f/yuml-diagram/_apis/build/status/jaime-olivares.yuml-diagram?branchName=master)](https://dev.azure.com/jaime-olivares-f/yuml-diagram/_build/latest?definitionId=2&branchName=master)

![Example](example.png)

## Features
* Currently, the following diagram types are supported: 
  + Class
  + Activity 
  + Use-case
  + State
  + Deployment
  + Package
  + Sequence
* Additional directives for altering diagram type and orientation
* Embedded rendering engine: **No need to call an external web service**

## yUML syntax
Please refer to the [wiki page](https://github.com/jaime-olivares/yuml-diagram/wiki)

## Installation
This library is published as a npm package [here](https://www.npmjs.com/package/yuml-diagram). For installing use:
````bash
npm install yuml-diagram
````

## Usage example
````javascript
const yuml_diagram = require('yuml-diagram');

var yuml = new yuml_diagram();
var svgLightBg = yuml.processYumlDocument(yumlText, false);
var svgDarkBg = yuml.processYumlDocument(yumlText, true);
````

Try a live example with **`RunKit`**: https://runkit.com/embed/r21r931hzoqm

## Browserified distribution

For using this library in a browser application, include the script at [/dist/yuml-diagram.min.js](https://github.com/jaime-olivares/yuml-diagram/blob/master/dist/yuml-diagram.min.js) in your project.

The following example shows how to use it:

````html
<html>
    <head>
        <script src="yuml-diagram.min.js"></script>
        <script>
            function loadSvg()
            {
                var yumlText = 
                    `// {type:class}
                    [A]->[B]`;

                // Generate the diagram
                var yuml  = new yuml_diagram();
                var svg = yuml.processYumlDocument(yumlText, false);

                document.body.innerHTML = svg;
            }
        </script>
    </head>
    <body onload="loadSvg();">        
    </body>
</html>

````

## Contributing
For pull requests, please read [CONTRIBUTING.md](https://github.com/jaime-olivares/yuml-diagram/blob/master/CONTRIBUTING.md)

Have a nice diagram to show? Please send it for publishing here!

## Credits
* Syntax and some examples taken from [yuml.me](http://yuml.me/diagram/scruffy/class/samples)
* This package embeds a Javascript port of [Dot/Graphviz](http://www.graphviz.org/) called [viz.js](https://github.com/mdaines/viz.js)
* The yuml-to-dot translator is loosely based on a Python project called [scruffy](https://github.com/aivarsk/scruffy)
* The new sequence diagram is based on [this github fork](https://github.com/sharvil/node-sequence-diagram)

## Sequence diagram Event Storming and CQRS modelling support
Adds support to Sequence diagram for [Event Storming](https://www.eventstorming.com) and [CQRS](https://10consulting.com/presentations/alchemy-conf-2021/) process modelling.
```html
// {type:sequence}

// [Actor {:ac}]
// [Aggregate {:ag}]
// [Command {:co}]
// [Event {:ev}]
// [EventHandler {:eh}]
// [External System {:es}]
// [Policy {:po}]
// [Read Model{rm}]

// Map Eventstorming colours
//
// {:ac} - actor
// {:ag} - aggregate
// {:co} - command
// {:ev} - event
// {:eh} - event handler
// {:es} - external system
// {:po} - policy
// {:rm} - view


[Auction Scheduler{:es}]End Auction->[Auction{:ag}] 
[Auction]Auction Ended>[Auction Summary{:rm}]
[Auction]Auction Won>[Auction Summary]
[Auction]Auction Won>[Auction Winner Notifier{:es}]
[Auction]Auction Ended>[Item Selling Process{:eh}]
[Item Selling Process]Mark as Sold>[Item{:ag}]
[Item Selling Process]Mark as UnSold>[Item]
[Item]Item Sold>[Item Summary{:rm}]
[Item]Item UnSold>[Item Summary]
[Item]Item Sold>[Sold Item Notifier{:es}]
[Item]Item UnSold>[UnSold Item Notifier{:es}]
```
![Example Auction](auction.png)