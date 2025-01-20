
      // auto generated
      //var self;

      // class constructor:
      function QCompleter() {
        

        // should be QCompleter_BaseJs.call(this, engine):
        //QCompleter.prototype = new QCompleter_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QCompleter.getIdStatic()))) {

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
            qWarning("QCompleter.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QCompleter_Wrapper(
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

      

        //copyProperties(this, wrapper, QCompleter);
  }

  
  else 
  
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QCompleter_Wrapper(
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

      

        //copyProperties(this, wrapper, QCompleter);
  }

  
  else {
    
        print("QCompleter(): wrong number / type of arguments");
      
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

        
              // define property setters/getters:
              Object.defineProperty(this, 'objectName', {
                  get() {
                      
                          return this.__PROXY__.objectName;
                        
                  },
                  
                    set(value) {
                        this.__PROXY__.setObjectName(value);
                    },
                  
                  enumerable: true,
                  configurable: true
              });
            

      }

      //QCompleter.prototype = new QCompleter_BaseJs(engine);
      //QCompleter.prototype = new QCompleter_Wrapper(engine);
      QCompleter.prototype = new Object();

      QCompleter.prototype.toString = function() {
          //return "QCompleter [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QCompleter [JS]";
        };
      QCompleter.getObjectType = function() {
        return RJSType_QCompleter.getIdStatic();
      };

      QCompleter.prototype.getObjectType = function() {
        return RJSType_QCompleter.getIdStatic();
      };

      QCompleter.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QCompleter.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: CompletionMode
QCompleter.PopupCompletion = QCompleter_Wrapper.PopupCompletion;
QCompleter.UnfilteredPopupCompletion = QCompleter_Wrapper.UnfilteredPopupCompletion;
QCompleter.InlineCompletion = QCompleter_Wrapper.InlineCompletion;

  // enum: ModelSorting
QCompleter.UnsortedModel = QCompleter_Wrapper.UnsortedModel;
QCompleter.CaseSensitivelySortedModel = QCompleter_Wrapper.CaseSensitivelySortedModel;
QCompleter.CaseInsensitivelySortedModel = QCompleter_Wrapper.CaseInsensitivelySortedModel;


      // functions:
      
        // function 
        QCompleter.prototype.objectName = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.objectName");
          return this.__PROXY__.objectName(...args);
        };
    
        // function 
        QCompleter.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.setObjectName");
          return this.__PROXY__.setObjectName(...args);
        };
    
        // function 
        QCompleter.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.isWidgetType");
          return this.__PROXY__.isWidgetType(...args);
        };
    
        // function 
        QCompleter.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.isWindowType");
          return this.__PROXY__.isWindowType(...args);
        };
    
        // function 
        QCompleter.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.signalsBlocked");
          return this.__PROXY__.signalsBlocked(...args);
        };
    
        // function 
        QCompleter.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.blockSignals");
          return this.__PROXY__.blockSignals(...args);
        };
    
        // function 
        QCompleter.prototype.findChild = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.findChild");
          return this.__PROXY__.findChild(...args);
        };
    
        // function 
        QCompleter.prototype.children = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.children");
          return this.__PROXY__.children(...args);
        };
    
        // function 
        QCompleter.prototype.setParent = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.setParent");
          return this.__PROXY__.setParent(...args);
        };
    
        // function 
        QCompleter.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.installEventFilter");
          return this.__PROXY__.installEventFilter(...args);
        };
    
        // function 
        QCompleter.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.removeEventFilter");
          return this.__PROXY__.removeEventFilter(...args);
        };
    
        // function 
        QCompleter.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.dumpObjectTree");
          return this.__PROXY__.dumpObjectTree(...args);
        };
    
        // function 
        QCompleter.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.dumpObjectInfo");
          return this.__PROXY__.dumpObjectInfo(...args);
        };
    
        // function 
        QCompleter.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.setProperty");
          return this.__PROXY__.setProperty(...args);
        };
    
        // function 
        QCompleter.prototype.property = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.property");
          return this.__PROXY__.property(...args);
        };
    
        // function 
        QCompleter.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.dynamicPropertyNames");
          return this.__PROXY__.dynamicPropertyNames(...args);
        };
    
        // function 
        QCompleter.prototype.parent = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.parent");
          return this.__PROXY__.parent(...args);
        };
    
        // function 
        QCompleter.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.deleteLater");
          return this.__PROXY__.deleteLater(...args);
        };
    
        // function 
        QCompleter.prototype.setWidget = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.setWidget");
          return this.__PROXY__.setWidget(...args);
        };
    
        // function 
        QCompleter.prototype.widget = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.widget");
          return this.__PROXY__.widget(...args);
        };
    
        // function 
        QCompleter.prototype.setCompletionMode = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.setCompletionMode");
          return this.__PROXY__.setCompletionMode(...args);
        };
    
        // function 
        QCompleter.prototype.completionMode = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.completionMode");
          return this.__PROXY__.completionMode(...args);
        };
    
        // function 
        QCompleter.prototype.setFilterMode = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.setFilterMode");
          return this.__PROXY__.setFilterMode(...args);
        };
    
        // function 
        QCompleter.prototype.filterMode = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.filterMode");
          return this.__PROXY__.filterMode(...args);
        };
    
        // function 
        QCompleter.prototype.setCaseSensitivity = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.setCaseSensitivity");
          return this.__PROXY__.setCaseSensitivity(...args);
        };
    
        // function 
        QCompleter.prototype.caseSensitivity = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.caseSensitivity");
          return this.__PROXY__.caseSensitivity(...args);
        };
    
        // function 
        QCompleter.prototype.setModelSorting = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.setModelSorting");
          return this.__PROXY__.setModelSorting(...args);
        };
    
        // function 
        QCompleter.prototype.modelSorting = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.modelSorting");
          return this.__PROXY__.modelSorting(...args);
        };
    
        // function 
        QCompleter.prototype.setCompletionColumn = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.setCompletionColumn");
          return this.__PROXY__.setCompletionColumn(...args);
        };
    
        // function 
        QCompleter.prototype.completionColumn = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.completionColumn");
          return this.__PROXY__.completionColumn(...args);
        };
    
        // function 
        QCompleter.prototype.setCompletionRole = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.setCompletionRole");
          return this.__PROXY__.setCompletionRole(...args);
        };
    
        // function 
        QCompleter.prototype.completionRole = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.completionRole");
          return this.__PROXY__.completionRole(...args);
        };
    
        // function 
        QCompleter.prototype.wrapAround = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.wrapAround");
          return this.__PROXY__.wrapAround(...args);
        };
    
        // function 
        QCompleter.prototype.maxVisibleItems = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.maxVisibleItems");
          return this.__PROXY__.maxVisibleItems(...args);
        };
    
        // function 
        QCompleter.prototype.setMaxVisibleItems = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.setMaxVisibleItems");
          return this.__PROXY__.setMaxVisibleItems(...args);
        };
    
        // function 
        QCompleter.prototype.completionCount = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.completionCount");
          return this.__PROXY__.completionCount(...args);
        };
    
        // function 
        QCompleter.prototype.setCurrentRow = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.setCurrentRow");
          return this.__PROXY__.setCurrentRow(...args);
        };
    
        // function 
        QCompleter.prototype.currentRow = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.currentRow");
          return this.__PROXY__.currentRow(...args);
        };
    
        // function 
        QCompleter.prototype.currentCompletion = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.currentCompletion");
          return this.__PROXY__.currentCompletion(...args);
        };
    
        // function 
        QCompleter.prototype.completionPrefix = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.completionPrefix");
          return this.__PROXY__.completionPrefix(...args);
        };
    
        // function 
        QCompleter.prototype.setCompletionPrefix = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.setCompletionPrefix");
          return this.__PROXY__.setCompletionPrefix(...args);
        };
    
        // function 
        QCompleter.prototype.complete = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.complete");
          return this.__PROXY__.complete(...args);
        };
    
        // function 
        QCompleter.prototype.setWrapAround = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.setWrapAround");
          return this.__PROXY__.setWrapAround(...args);
        };
    
        // function 
        QCompleter.prototype.splitPath = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.splitPath");
          return this.__PROXY__.splitPath(...args);
        };
    
        // function 
        QCompleter.prototype.eventFilter = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.eventFilter");
          return this.__PROXY__.eventFilter(...args);
        };
    
        // function 
        QCompleter.prototype.event = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.event");
          return this.__PROXY__.event(...args);
        };
    
        // function 
        QCompleter.prototype.activated = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.activated");
          return this.__PROXY__.activated(...args);
        };
    
        // function 
        QCompleter.prototype.highlighted = function(...args) 
          
        {
          //print("JS: QCompleter.prototype.highlighted");
          return this.__PROXY__.highlighted(...args);
        };
    

      // static functions:
      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QCompleter.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QCompleter.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QCompleter.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      