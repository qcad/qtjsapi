
      // auto generated
      //var self;

      // class constructor:
      function QTextDocument() {
        

        // should be QTextDocument_BaseJs.call(this, engine):
        //QTextDocument.prototype = new QTextDocument_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QTextDocument.getIdStatic()))) {

            wrapper = arguments[2];
            if (wrapper!=null) {
              //wrapper.__WRAPPER__ = true;
              Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
            }
            //if (arguments[1]!==true) {
              // only copy properties if this is not an existing wrapper:
              
                  this.__PROXY__ = wrapper;
                
            //}
          }
          else {
            qWarning("QTextDocument.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QTextDocument_Wrapper(
              // RJSApi:
              handler
              , arguments[0], arguments[1]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextDocument);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QTextDocument_Wrapper(
              // RJSApi:
              handler
              , arguments[0]
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QTextDocument);
  }

  
  else {
    
        print("QTextDocument(): wrong number / type of arguments");
      
    console.trace();
  }
  
        }

        //self = this;
        //if (typeof(this.wrapper)!=="undefined") {
        //  this.wrapper.setEngine(engine);
        //}


        if (typeof(wrapper)!=="undefined") {
          //var localSelf = this;
          //print("QAction self:", localSelf);
          // TODO:
          //this.wrapper.triggered.connect(function(checked) { print("action triggered. self:", localSelf); localSelf.triggeredEmitter(checked); });
          

        }


      }

      //QTextDocument.prototype = new QTextDocument_BaseJs(engine);
      //QTextDocument.prototype = new QTextDocument_Wrapper(engine);
      QTextDocument.prototype = new Object();


      QTextDocument.prototype.toString = function() {
          //return "QTextDocument [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QTextDocument [JS]";
        };
      QTextDocument.getObjectType = function() {
        return RJSType_QTextDocument.getIdStatic();
      };

      QTextDocument.prototype.getObjectType = function() {
        return RJSType_QTextDocument.getIdStatic();
      };

      QTextDocument.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QTextDocument.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: MetaInformation
QTextDocument.DocumentTitle = QTextDocument_Wrapper.DocumentTitle;
QTextDocument.DocumentUrl = QTextDocument_Wrapper.DocumentUrl;

  // enum: MarkdownFeature
QTextDocument.MarkdownNoHTML = QTextDocument_Wrapper.MarkdownNoHTML;
QTextDocument.MarkdownDialectCommonMark = QTextDocument_Wrapper.MarkdownDialectCommonMark;
QTextDocument.MarkdownDialectGitHub = QTextDocument_Wrapper.MarkdownDialectGitHub;

  // enum: FindFlag
QTextDocument.FindBackward = QTextDocument_Wrapper.FindBackward;
QTextDocument.FindCaseSensitively = QTextDocument_Wrapper.FindCaseSensitively;
QTextDocument.FindWholeWords = QTextDocument_Wrapper.FindWholeWords;

  // enum: ResourceType
QTextDocument.UnknownResource = QTextDocument_Wrapper.UnknownResource;
QTextDocument.HtmlResource = QTextDocument_Wrapper.HtmlResource;
QTextDocument.ImageResource = QTextDocument_Wrapper.ImageResource;
QTextDocument.StyleSheetResource = QTextDocument_Wrapper.StyleSheetResource;
QTextDocument.MarkdownResource = QTextDocument_Wrapper.MarkdownResource;
QTextDocument.UserResource = QTextDocument_Wrapper.UserResource;

  // enum: Stacks
QTextDocument.UndoStack = QTextDocument_Wrapper.UndoStack;
QTextDocument.RedoStack = QTextDocument_Wrapper.RedoStack;
QTextDocument.UndoAndRedoStacks = QTextDocument_Wrapper.UndoAndRedoStacks;


      // functions:
      
        // function 
        QTextDocument.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
    
        // function 
        QTextDocument.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
    
        // function 
        QTextDocument.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
    
        // function 
        QTextDocument.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
    
        // function 
        QTextDocument.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
    
        // function 
        QTextDocument.prototype.findChild = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
    
        // function 
        QTextDocument.prototype.children = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setParent = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
    
        // function 
        QTextDocument.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
    
        // function 
        QTextDocument.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
    
        // function 
        QTextDocument.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
    
        // function 
        QTextDocument.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
    
        // function 
        QTextDocument.prototype.property = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
    
        // function 
        QTextDocument.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
    
        // function 
        QTextDocument.prototype.parent = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
    
        // function 
        QTextDocument.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
    
        // function 
        QTextDocument.prototype.clone = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.clone");
          
              return this.__PROXY__.clone(...args);
            
        };
    
        // function 
        QTextDocument.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
    
        // function 
        QTextDocument.prototype.clear = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.clear");
          
              return this.__PROXY__.clear(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setUndoRedoEnabled = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setUndoRedoEnabled");
          
              return this.__PROXY__.setUndoRedoEnabled(...args);
            
        };
    
        // function 
        QTextDocument.prototype.isUndoRedoEnabled = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.isUndoRedoEnabled");
          
              return this.__PROXY__.isUndoRedoEnabled(...args);
            
        };
    
        // function 
        QTextDocument.prototype.isUndoAvailable = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.isUndoAvailable");
          
              return this.__PROXY__.isUndoAvailable(...args);
            
        };
    
        // function 
        QTextDocument.prototype.isRedoAvailable = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.isRedoAvailable");
          
              return this.__PROXY__.isRedoAvailable(...args);
            
        };
    
        // function 
        QTextDocument.prototype.availableUndoSteps = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.availableUndoSteps");
          
              return this.__PROXY__.availableUndoSteps(...args);
            
        };
    
        // function 
        QTextDocument.prototype.availableRedoSteps = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.availableRedoSteps");
          
              return this.__PROXY__.availableRedoSteps(...args);
            
        };
    
        // function 
        QTextDocument.prototype.revision = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.revision");
          
              return this.__PROXY__.revision(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setMetaInformation = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setMetaInformation");
          
              return this.__PROXY__.setMetaInformation(...args);
            
        };
    
        // function 
        QTextDocument.prototype.metaInformation = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.metaInformation");
          
              return this.__PROXY__.metaInformation(...args);
            
        };
    
        // function 
        QTextDocument.prototype.toHtml = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.toHtml");
          
              return this.__PROXY__.toHtml(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setHtml = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setHtml");
          
              return this.__PROXY__.setHtml(...args);
            
        };
    
        // function 
        QTextDocument.prototype.toMarkdown = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.toMarkdown");
          
              return this.__PROXY__.toMarkdown(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setMarkdown = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setMarkdown");
          
              return this.__PROXY__.setMarkdown(...args);
            
        };
    
        // function 
        QTextDocument.prototype.toRawText = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.toRawText");
          
              return this.__PROXY__.toRawText(...args);
            
        };
    
        // function 
        QTextDocument.prototype.toPlainText = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.toPlainText");
          
              return this.__PROXY__.toPlainText(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setPlainText = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setPlainText");
          
              return this.__PROXY__.setPlainText(...args);
            
        };
    
        // function 
        QTextDocument.prototype.characterAt = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.characterAt");
          
              return this.__PROXY__.characterAt(...args);
            
        };
    
        // function 
        QTextDocument.prototype.find = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.find");
          
              return this.__PROXY__.find(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setPageSize = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setPageSize");
          
              return this.__PROXY__.setPageSize(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setDefaultFont = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setDefaultFont");
          
              return this.__PROXY__.setDefaultFont(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setSuperScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setSuperScriptBaseline");
          
              return this.__PROXY__.setSuperScriptBaseline(...args);
            
        };
    
        // function 
        QTextDocument.prototype.superScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.superScriptBaseline");
          
              return this.__PROXY__.superScriptBaseline(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setSubScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setSubScriptBaseline");
          
              return this.__PROXY__.setSubScriptBaseline(...args);
            
        };
    
        // function 
        QTextDocument.prototype.subScriptBaseline = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.subScriptBaseline");
          
              return this.__PROXY__.subScriptBaseline(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setBaselineOffset = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setBaselineOffset");
          
              return this.__PROXY__.setBaselineOffset(...args);
            
        };
    
        // function 
        QTextDocument.prototype.baselineOffset = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.baselineOffset");
          
              return this.__PROXY__.baselineOffset(...args);
            
        };
    
        // function 
        QTextDocument.prototype.pageCount = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.pageCount");
          
              return this.__PROXY__.pageCount(...args);
            
        };
    
        // function 
        QTextDocument.prototype.isModified = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.isModified");
          
              return this.__PROXY__.isModified(...args);
            
        };
    
        // function 
        QTextDocument.prototype.print = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.print");
          
              return this.__PROXY__.print(...args);
            
        };
    
        // function 
        QTextDocument.prototype.resource = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.resource");
          
              return this.__PROXY__.resource(...args);
            
        };
    
        // function 
        QTextDocument.prototype.addResource = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.addResource");
          
              return this.__PROXY__.addResource(...args);
            
        };
    
        // function 
        QTextDocument.prototype.allFormats = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.allFormats");
          
              return this.__PROXY__.allFormats(...args);
            
        };
    
        // function 
        QTextDocument.prototype.markContentsDirty = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.markContentsDirty");
          
              return this.__PROXY__.markContentsDirty(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setUseDesignMetrics = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setUseDesignMetrics");
          
              return this.__PROXY__.setUseDesignMetrics(...args);
            
        };
    
        // function 
        QTextDocument.prototype.drawContents = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.drawContents");
          
              return this.__PROXY__.drawContents(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setTextWidth = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setTextWidth");
          
              return this.__PROXY__.setTextWidth(...args);
            
        };
    
        // function 
        QTextDocument.prototype.idealWidth = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.idealWidth");
          
              return this.__PROXY__.idealWidth(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setIndentWidth = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setIndentWidth");
          
              return this.__PROXY__.setIndentWidth(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setDocumentMargin = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setDocumentMargin");
          
              return this.__PROXY__.setDocumentMargin(...args);
            
        };
    
        // function 
        QTextDocument.prototype.adjustSize = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.adjustSize");
          
              return this.__PROXY__.adjustSize(...args);
            
        };
    
        // function 
        QTextDocument.prototype.lineCount = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.lineCount");
          
              return this.__PROXY__.lineCount(...args);
            
        };
    
        // function 
        QTextDocument.prototype.characterCount = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.characterCount");
          
              return this.__PROXY__.characterCount(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setDefaultStyleSheet = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setDefaultStyleSheet");
          
              return this.__PROXY__.setDefaultStyleSheet(...args);
            
        };
    
        // function 
        QTextDocument.prototype.clearUndoRedoStacks = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.clearUndoRedoStacks");
          
              return this.__PROXY__.clearUndoRedoStacks(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setMaximumBlockCount = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setMaximumBlockCount");
          
              return this.__PROXY__.setMaximumBlockCount(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setBaseUrl = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setBaseUrl");
          
              return this.__PROXY__.setBaseUrl(...args);
            
        };
    
        // function 
        QTextDocument.prototype.defaultCursorMoveStyle = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.defaultCursorMoveStyle");
          
              return this.__PROXY__.defaultCursorMoveStyle(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setDefaultCursorMoveStyle = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setDefaultCursorMoveStyle");
          
              return this.__PROXY__.setDefaultCursorMoveStyle(...args);
            
        };
    
        // function 
        QTextDocument.prototype.undo = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.undo");
          
              return this.__PROXY__.undo(...args);
            
        };
    
        // function 
        QTextDocument.prototype.redo = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.redo");
          
              return this.__PROXY__.redo(...args);
            
        };
    
        // function 
        QTextDocument.prototype.setModified = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.setModified");
          
              return this.__PROXY__.setModified(...args);
            
        };
    
        // function 
        QTextDocument.prototype.createObject = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.createObject");
          
              return this.__PROXY__.createObject(...args);
            
        };
    
        // function 
        QTextDocument.prototype.loadResource = function(...args) 
          
        {
          //print("JS: QTextDocument.prototype.loadResource");
          
              return this.__PROXY__.loadResource(...args);
            
        };
    

      // static functions:
      
          Object.defineProperty(QTextDocument.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextDocument.prototype, 'modified', {
              get: function() {
                  
                      return this.__PROXY__.isModified();
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setModified(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextDocument.prototype, 'pageSize', {
              get: function() {
                  
                      return this.__PROXY__.pageSize;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setPageSize(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextDocument.prototype, 'defaultFont', {
              get: function() {
                  
                      return this.__PROXY__.defaultFont;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultFont(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextDocument.prototype, 'useDesignMetrics', {
              get: function() {
                  
                      return this.__PROXY__.useDesignMetrics;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setUseDesignMetrics(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextDocument.prototype, 'size', {
              get: function() {
                  
                      return this.__PROXY__.size;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextDocument.prototype, 'textWidth', {
              get: function() {
                  
                      return this.__PROXY__.textWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setTextWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextDocument.prototype, 'blockCount', {
              get: function() {
                  
                      return this.__PROXY__.blockCount;
                    
              },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextDocument.prototype, 'indentWidth', {
              get: function() {
                  
                      return this.__PROXY__.indentWidth;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setIndentWidth(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextDocument.prototype, 'defaultStyleSheet', {
              get: function() {
                  
                      return this.__PROXY__.defaultStyleSheet;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDefaultStyleSheet(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextDocument.prototype, 'maximumBlockCount', {
              get: function() {
                  
                      return this.__PROXY__.maximumBlockCount;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setMaximumBlockCount(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextDocument.prototype, 'documentMargin', {
              get: function() {
                  
                      return this.__PROXY__.documentMargin;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setDocumentMargin(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QTextDocument.prototype, 'baseUrl', {
              get: function() {
                  
                      return this.__PROXY__.baseUrl;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setBaseUrl(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QTextDocument.prototype, 'contentsChange', {
            get: function() { return this.__PROXY__.contentsChange; },
            configurable: true
        });
        
          Object.defineProperty(QTextDocument.prototype, 'contentsChange(int,int,int)', {
              get: function() { return this.__PROXY__.contentsChange; },
              configurable: true
          });
        
        Object.defineProperty(QTextDocument.prototype, 'contentsChanged', {
            get: function() { return this.__PROXY__.contentsChanged; },
            configurable: true
        });
        
        Object.defineProperty(QTextDocument.prototype, 'undoAvailable', {
            get: function() { return this.__PROXY__.undoAvailable; },
            configurable: true
        });
        
          Object.defineProperty(QTextDocument.prototype, 'undoAvailable(bool)', {
              get: function() { return this.__PROXY__.undoAvailable; },
              configurable: true
          });
        
        Object.defineProperty(QTextDocument.prototype, 'redoAvailable', {
            get: function() { return this.__PROXY__.redoAvailable; },
            configurable: true
        });
        
          Object.defineProperty(QTextDocument.prototype, 'redoAvailable(bool)', {
              get: function() { return this.__PROXY__.redoAvailable; },
              configurable: true
          });
        
        Object.defineProperty(QTextDocument.prototype, 'undoCommandAdded', {
            get: function() { return this.__PROXY__.undoCommandAdded; },
            configurable: true
        });
        
        Object.defineProperty(QTextDocument.prototype, 'modificationChanged', {
            get: function() { return this.__PROXY__.modificationChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTextDocument.prototype, 'modificationChanged(bool)', {
              get: function() { return this.__PROXY__.modificationChanged; },
              configurable: true
          });
        
        Object.defineProperty(QTextDocument.prototype, 'cursorPositionChanged', {
            get: function() { return this.__PROXY__.cursorPositionChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTextDocument.prototype, 'cursorPositionChanged(QTextCursor)', {
              get: function() { return this.__PROXY__.cursorPositionChanged; },
              configurable: true
          });
        
        Object.defineProperty(QTextDocument.prototype, 'blockCountChanged', {
            get: function() { return this.__PROXY__.blockCountChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTextDocument.prototype, 'blockCountChanged(int)', {
              get: function() { return this.__PROXY__.blockCountChanged; },
              configurable: true
          });
        
        Object.defineProperty(QTextDocument.prototype, 'baseUrlChanged', {
            get: function() { return this.__PROXY__.baseUrlChanged; },
            configurable: true
        });
        
          Object.defineProperty(QTextDocument.prototype, 'baseUrlChanged(QUrl)', {
              get: function() { return this.__PROXY__.baseUrlChanged; },
              configurable: true
          });
        
        Object.defineProperty(QTextDocument.prototype, 'documentLayoutChanged', {
            get: function() { return this.__PROXY__.documentLayoutChanged; },
            configurable: true
        });
        QTextDocument.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QTextDocument.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QTextDocument.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QTextDocument.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QTextDocument.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QTextDocument.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      