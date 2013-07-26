/**
 * JSLint plugin for Nodedit
 * @namespace nodedit.plugin.jslint
 */
nodedit.plugin.jslint = {

    // Define template(s)
    templates: {
        dialog: 'dialog.tpl'
    },
    
    // Define icon associated with plugin
    icon: 'icon-ok-sign',
    
    // Define any dependencies
    dependencies: [
        'deps/jslint.js',
        'deps/jslint_labels.js',
        'deps/jslint.css'
    ],
    
    /**
     * Checks active editor for compatibility and retruns content
     * @method nodedit.plugin.jslint.checkEditor
     * @returns {bool|string} Either returns the code or false if editor not .js
     */
    getEditor: function () {
        
        var id = nodedit.tabs.getActive(),
            ext = '';
        
        if (nodedit.editor.instances.hasOwnProperty(id)) {
            ext = nodedit.filemanager.getFileExtension(nodedit.editor.instances[id].path);
        }

        // Check extension
        if (ext==='js') {
            return nodedit.editor.getContent(id);
        } else {
            nodedit.message.error('Please open a .js file in the editor');
            return false;
        }
    },
    
    /**
     * Runs lint on the code
     * @method nodedit.plugin.jslint.runLint
     * @param {string} code The code to be checked
     * @param {object} options The options for the lint process
     */
    runLint: function (code, options) {
        var data, errors, report, properties_report;
            
        // Lint code
        JSLINT(code, options);
            
        data = JSLINT.data();
        errors = JSLINT.error_report(data);
        report = JSLINT.report(data);
        properties_report = JSLINT.properties_report(JSLINT.property);
        
        // Output report
        $('#jslint-output').html(errors); 
        // Trim leading whitespace on <pre> elements
        $('#jslint-output pre').each(function(){
           $(this).html($(this).html().trim());
        });
    },
    
    /**
     * Define handling of open from plugin menu
     * @method nodedit.plugin.example.onMenu
     */
    onMenu: function () {
        var _this = this,
            // Get code, returns false if no vaible editor instance
            code = _this.getEditor(),
            // Get config from store or load defaults
            options = {
                ass       : true,
                bitwise   : true,
                browser   : true,
                closure   : true,
                continue  : true,
                couch     : true,
                debug     : true,
                devel     : true,
                eqeq      : true,
                es5       : true,
                evil      : true,
                forin     : true,
                indent    :   10,
                maxerr    : 1000,
                maxlen    :  256,
                newcap    : true,
                node      : true,
                nomen     : true,
                passfail  : true,
                plusplus  : true,
                properties: true,
                regexp    : true,
                rhino     : true,
                unparam   : true,
                sloppy    : true,
                stupid    : true,
                sub       : true,
                todo      : true,
                vars      : true,
                white     : true
            };
            
        if ( nodedit.store('jslint_config') !== null ) {
            options = JSON.parse(nodedit.store('jslint_config'));
        }
        
        if (code) {
            nodedit.modal.open(800,'JSLint',_this.templates.dialog, options, function() {
                _this.runLint(code, options);
                $('#run-lint').on('click', function (e) {
                    e.preventDefault();
                    // Compile options
                    $('#jslint-config select').each(function () {
                        if ($(this).find("option:selected").val()==='false') {
                            options[$(this).attr('name')] = false;
                        } else {
                            options[$(this).attr('name')] = true;
                        }
                    });
                    
                    options.indent = 10;
                    options.maxerr = 1000;
                    options.maxlen = 256;
                    
                    // Store config
                    nodedit.store('jslint_config', options);
                    // Run Lint
                    _this.runLint(code, options);
                });
            });
        }
    }
  
};