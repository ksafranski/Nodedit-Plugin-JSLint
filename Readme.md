# Nodedit JSLint Plugin

This plugin allows you to configure and run JSLint against files in your editor directly inside of the IDE.

## Installation

Copy contents of folder into Nodedit's `/plugins` folder and ensure the folder is named **jslint**. Then open the `/plugins/plugins.json` 
file and add the Key-Value pair like the following:

```
{
    ...
    "JSLint": "jslint"
    ...
}
```

*Note: ensure the value `jslint` is lowercase*