
      // auto generated
      //var self;

      // class constructor:
      function QStackedLayout() {
        

        // should be QStackedLayout_BaseJs.call(this, engine):
        //QStackedLayout.prototype = new QStackedLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QStackedLayout.getIdStatic()))) {

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
            qWarning("QStackedLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStackedLayout_Wrapper(
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

      

        //copyProperties(this, wrapper, QStackedLayout);
  }

  
  else 
  
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QStackedLayout_Wrapper(
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

      

        //copyProperties(this, wrapper, QStackedLayout);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QStackedLayout_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QStackedLayout);
  }

  
  else {
    
        print("QStackedLayout(): wrong number / type of arguments");
      
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

      //QStackedLayout.prototype = new QStackedLayout_BaseJs(engine);
      //QStackedLayout.prototype = new QStackedLayout_Wrapper(engine);
      QStackedLayout.prototype = new Object();


      QStackedLayout.prototype.toString = function() {
          //return "QStackedLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QStackedLayout [JS]";
        };
      QStackedLayout.getObjectType = function() {
        return RJSType_QStackedLayout.getIdStatic();
      };

      QStackedLayout.prototype.getObjectType = function() {
        return RJSType_QStackedLayout.getIdStatic();
      };

      QStackedLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QStackedLayout.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayoutItem.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayout.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: StackingMode
QStackedLayout.StackOne = QStackedLayout_Wrapper.StackOne;
QStackedLayout.StackAll = QStackedLayout_Wrapper.StackAll;


      // functions:
      
        // function 
        QStackedLayout.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.findChild = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.children = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.setParent = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.property = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.parent = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.minimumHeightForWidth = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.minimumHeightForWidth");
          
              return this.__PROXY__.minimumHeightForWidth(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.spacerItem = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.spacerItem");
          
              return this.__PROXY__.spacerItem(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.alignment = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.setSpacing = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.setSpacing");
          
              return this.__PROXY__.setSpacing(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.setSizeConstraint = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.setSizeConstraint");
          
              return this.__PROXY__.setSizeConstraint(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.sizeConstraint = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.sizeConstraint");
          
              return this.__PROXY__.sizeConstraint(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.setMenuBar = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.setMenuBar");
          
              return this.__PROXY__.setMenuBar(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.menuBar = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.menuBar");
          
              return this.__PROXY__.menuBar(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.invalidate = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.invalidate");
          
              return this.__PROXY__.invalidate(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.geometry = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.geometry");
          
              return this.__PROXY__.geometry(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.activate = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.activate");
          
              return this.__PROXY__.activate(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.update = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.removeWidget = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.removeWidget");
          
              return this.__PROXY__.removeWidget(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.removeItem = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.expandingDirections = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.expandingDirections");
          
              return this.__PROXY__.expandingDirections(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.maximumSize = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.maximumSize");
          
              return this.__PROXY__.maximumSize(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.indexOf = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.indexOf");
          
              return this.__PROXY__.indexOf(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.controlTypes = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.controlTypes");
          
              return this.__PROXY__.controlTypes(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.totalHeightForWidth = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.totalHeightForWidth");
          
              return this.__PROXY__.totalHeightForWidth(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.totalMinimumSize = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.totalMinimumSize");
          
              return this.__PROXY__.totalMinimumSize(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.totalMaximumSize = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.totalMaximumSize");
          
              return this.__PROXY__.totalMaximumSize(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.totalSizeHint = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.totalSizeHint");
          
              return this.__PROXY__.totalSizeHint(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.layout = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.widgetEvent = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.widgetEvent");
          
              return this.__PROXY__.widgetEvent(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.childEvent = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.childEvent");
          
              return this.__PROXY__.childEvent(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.addChildLayout = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.addChildLayout");
          
              return this.__PROXY__.addChildLayout(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.addChildWidget = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.addChildWidget");
          
              return this.__PROXY__.addChildWidget(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.adoptLayout = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.adoptLayout");
          
              return this.__PROXY__.adoptLayout(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.alignmentRect = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.alignmentRect");
          
              return this.__PROXY__.alignmentRect(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.addWidget = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.addWidget");
          
              return this.__PROXY__.addWidget(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.insertWidget = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.insertWidget");
          
              return this.__PROXY__.insertWidget(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.currentWidget = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.currentWidget");
          
              return this.__PROXY__.currentWidget(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.widget = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.count = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.count");
          
              return this.__PROXY__.count(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.setStackingMode = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.setStackingMode");
          
              return this.__PROXY__.setStackingMode(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.addItem = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.sizeHint = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.sizeHint");
          
              return this.__PROXY__.sizeHint(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.minimumSize = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.minimumSize");
          
              return this.__PROXY__.minimumSize(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.itemAt = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.itemAt");
          
              return this.__PROXY__.itemAt(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.takeAt = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.takeAt");
          
              return this.__PROXY__.takeAt(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.setCurrentIndex = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.setCurrentIndex");
          
              return this.__PROXY__.setCurrentIndex(...args);
            
        };
        
        // function 
        QStackedLayout.prototype.setCurrentWidget = function(...args) 
          
        {
          //print("JS: QStackedLayout.prototype.setCurrentWidget");
          
              return this.__PROXY__.setCurrentWidget(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QStackedLayout.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedLayout.prototype, 'spacing', {
              get: function() {
                  
                      return this.__PROXY__.spacing;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSpacing(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedLayout.prototype, 'currentIndex', {
              get: function() {
                  
                      return this.__PROXY__.currentIndex;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setCurrentIndex(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QStackedLayout.prototype, 'stackingMode', {
              get: function() {
                  
                      return this.__PROXY__.stackingMode;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setStackingMode(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
        Object.defineProperty(QStackedLayout.prototype, 'widgetRemoved', {
            get: function() { return this.__PROXY__.widgetRemoved; },
            configurable: true
        });
        
          Object.defineProperty(QStackedLayout.prototype, 'widgetRemoved(int)', {
              get: function() { return this.__PROXY__.widgetRemoved; },
              configurable: true
          });
        
        Object.defineProperty(QStackedLayout.prototype, 'currentChanged', {
            get: function() { return this.__PROXY__.currentChanged; },
            configurable: true
        });
        
          Object.defineProperty(QStackedLayout.prototype, 'currentChanged(int)', {
              get: function() { return this.__PROXY__.currentChanged; },
              configurable: true
          });
        QStackedLayout.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QStackedLayout.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QStackedLayout.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QStackedLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QStackedLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QStackedLayout.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      