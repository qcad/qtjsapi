
      // auto generated
      //var self;

      // class constructor:
      function QGridLayout() {
        

        // should be QGridLayout_BaseJs.call(this, engine):
        //QGridLayout.prototype = new QGridLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QGridLayout.getIdStatic()))) {

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
            qWarning("QGridLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QGridLayout_Wrapper(
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

      

        //copyProperties(this, wrapper, QGridLayout);
  }

  
  else {
    
        print("QGridLayout(): wrong number / type of arguments");
      
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

      //QGridLayout.prototype = new QGridLayout_BaseJs(engine);
      //QGridLayout.prototype = new QGridLayout_Wrapper(engine);
      QGridLayout.prototype = new Object();


      QGridLayout.prototype.toString = function() {
          //return "QGridLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QGridLayout [JS]";
        };
      QGridLayout.getObjectType = function() {
        return RJSType_QGridLayout.getIdStatic();
      };

      QGridLayout.prototype.getObjectType = function() {
        return RJSType_QGridLayout.getIdStatic();
      };

      QGridLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QGridLayout.getIdStatic()) {
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
      

      // functions:
      
        // function 
        QGridLayout.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QGridLayout.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QGridLayout.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QGridLayout.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QGridLayout.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QGridLayout.prototype.findChild = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QGridLayout.prototype.children = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setParent = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QGridLayout.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QGridLayout.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QGridLayout.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QGridLayout.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QGridLayout.prototype.property = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QGridLayout.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QGridLayout.prototype.parent = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QGridLayout.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QGridLayout.prototype.widget = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
        
        // function 
        QGridLayout.prototype.spacerItem = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.spacerItem");
          
              return this.__PROXY__.spacerItem(...args);
            
        };
        
        // function 
        QGridLayout.prototype.alignment = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QGridLayout.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QGridLayout.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setSizeConstraint = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setSizeConstraint");
          
              return this.__PROXY__.setSizeConstraint(...args);
            
        };
        
        // function 
        QGridLayout.prototype.sizeConstraint = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.sizeConstraint");
          
              return this.__PROXY__.sizeConstraint(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setMenuBar = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setMenuBar");
          
              return this.__PROXY__.setMenuBar(...args);
            
        };
        
        // function 
        QGridLayout.prototype.menuBar = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.menuBar");
          
              return this.__PROXY__.menuBar(...args);
            
        };
        
        // function 
        QGridLayout.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QGridLayout.prototype.geometry = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.geometry");
          
              return this.__PROXY__.geometry(...args);
            
        };
        
        // function 
        QGridLayout.prototype.activate = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.activate");
          
              return this.__PROXY__.activate(...args);
            
        };
        
        // function 
        QGridLayout.prototype.update = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QGridLayout.prototype.removeWidget = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.removeWidget");
          
              return this.__PROXY__.removeWidget(...args);
            
        };
        
        // function 
        QGridLayout.prototype.removeItem = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
        
        // function 
        QGridLayout.prototype.indexOf = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.indexOf");
          
              return this.__PROXY__.indexOf(...args);
            
        };
        
        // function 
        QGridLayout.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        QGridLayout.prototype.controlTypes = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.controlTypes");
          
              return this.__PROXY__.controlTypes(...args);
            
        };
        
        // function 
        QGridLayout.prototype.totalHeightForWidth = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.totalHeightForWidth");
          
              return this.__PROXY__.totalHeightForWidth(...args);
            
        };
        
        // function 
        QGridLayout.prototype.totalMinimumSize = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.totalMinimumSize");
          
              return this.__PROXY__.totalMinimumSize(...args);
            
        };
        
        // function 
        QGridLayout.prototype.totalMaximumSize = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.totalMaximumSize");
          
              return this.__PROXY__.totalMaximumSize(...args);
            
        };
        
        // function 
        QGridLayout.prototype.totalSizeHint = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.totalSizeHint");
          
              return this.__PROXY__.totalSizeHint(...args);
            
        };
        
        // function 
        QGridLayout.prototype.layout = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QGridLayout.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QGridLayout.prototype.widgetEvent = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.widgetEvent");
          
              return this.__PROXY__.widgetEvent(...args);
            
        };
        
        // function 
        QGridLayout.prototype.childEvent = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.childEvent");
          
              return this.__PROXY__.childEvent(...args);
            
        };
        
        // function 
        QGridLayout.prototype.addChildLayout = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.addChildLayout");
          
              return this.__PROXY__.addChildLayout(...args);
            
        };
        
        // function 
        QGridLayout.prototype.addChildWidget = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.addChildWidget");
          
              return this.__PROXY__.addChildWidget(...args);
            
        };
        
        // function 
        QGridLayout.prototype.adoptLayout = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.adoptLayout");
          
              return this.__PROXY__.adoptLayout(...args);
            
        };
        
        // function 
        QGridLayout.prototype.alignmentRect = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.alignmentRect");
          
              return this.__PROXY__.alignmentRect(...args);
            
        };
        
        // function 
        QGridLayout.prototype.sizeHint = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.sizeHint");
          
              return this.__PROXY__.sizeHint(...args);
            
        };
        
        // function 
        QGridLayout.prototype.minimumSize = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.minimumSize");
          
              return this.__PROXY__.minimumSize(...args);
            
        };
        
        // function 
        QGridLayout.prototype.maximumSize = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.maximumSize");
          
              return this.__PROXY__.maximumSize(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setHorizontalSpacing = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setHorizontalSpacing");
          
              return this.__PROXY__.setHorizontalSpacing(...args);
            
        };
        
        // function 
        QGridLayout.prototype.horizontalSpacing = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.horizontalSpacing");
          
              return this.__PROXY__.horizontalSpacing(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setVerticalSpacing = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setVerticalSpacing");
          
              return this.__PROXY__.setVerticalSpacing(...args);
            
        };
        
        // function 
        QGridLayout.prototype.verticalSpacing = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.verticalSpacing");
          
              return this.__PROXY__.verticalSpacing(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setSpacing = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setSpacing");
          
              return this.__PROXY__.setSpacing(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setRowStretch = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setRowStretch");
          
              return this.__PROXY__.setRowStretch(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setColumnStretch = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setColumnStretch");
          
              return this.__PROXY__.setColumnStretch(...args);
            
        };
        
        // function 
        QGridLayout.prototype.rowStretch = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.rowStretch");
          
              return this.__PROXY__.rowStretch(...args);
            
        };
        
        // function 
        QGridLayout.prototype.columnStretch = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.columnStretch");
          
              return this.__PROXY__.columnStretch(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setRowMinimumHeight = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setRowMinimumHeight");
          
              return this.__PROXY__.setRowMinimumHeight(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setColumnMinimumWidth = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setColumnMinimumWidth");
          
              return this.__PROXY__.setColumnMinimumWidth(...args);
            
        };
        
        // function 
        QGridLayout.prototype.rowMinimumHeight = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.rowMinimumHeight");
          
              return this.__PROXY__.rowMinimumHeight(...args);
            
        };
        
        // function 
        QGridLayout.prototype.columnMinimumWidth = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.columnMinimumWidth");
          
              return this.__PROXY__.columnMinimumWidth(...args);
            
        };
        
        // function 
        QGridLayout.prototype.columnCount = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.columnCount");
          
              return this.__PROXY__.columnCount(...args);
            
        };
        
        // function 
        QGridLayout.prototype.rowCount = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.rowCount");
          
              return this.__PROXY__.rowCount(...args);
            
        };
        
        // function 
        QGridLayout.prototype.cellRect = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.cellRect");
          
              return this.__PROXY__.cellRect(...args);
            
        };
        
        // function 
        QGridLayout.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QGridLayout.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QGridLayout.prototype.minimumHeightForWidth = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.minimumHeightForWidth");
          
              return this.__PROXY__.minimumHeightForWidth(...args);
            
        };
        
        // function 
        QGridLayout.prototype.expandingDirections = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.expandingDirections");
          
              return this.__PROXY__.expandingDirections(...args);
            
        };
        
        // function 
        QGridLayout.prototype.invalidate = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.invalidate");
          
              return this.__PROXY__.invalidate(...args);
            
        };
        
        // function 
        QGridLayout.prototype.addWidget = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.addWidget");
          
              return this.__PROXY__.addWidget(...args);
            
        };
        
        // function 
        QGridLayout.prototype.addLayout = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.addLayout");
          
              return this.__PROXY__.addLayout(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setOriginCorner = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setOriginCorner");
          
              return this.__PROXY__.setOriginCorner(...args);
            
        };
        
        // function 
        QGridLayout.prototype.originCorner = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.originCorner");
          
              return this.__PROXY__.originCorner(...args);
            
        };
        
        // function 
        QGridLayout.prototype.itemAt = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.itemAt");
          
              return this.__PROXY__.itemAt(...args);
            
        };
        
        // function 
        QGridLayout.prototype.itemAtPosition = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.itemAtPosition");
          
              return this.__PROXY__.itemAtPosition(...args);
            
        };
        
        // function 
        QGridLayout.prototype.takeAt = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.takeAt");
          
              return this.__PROXY__.takeAt(...args);
            
        };
        
        // function 
        QGridLayout.prototype.count = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.count");
          
              return this.__PROXY__.count(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        
        // function 
        QGridLayout.prototype.addItem = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
        
        // function 
        QGridLayout.prototype.setDefaultPositioning = function(...args) 
          
        {
          //print("JS: QGridLayout.prototype.setDefaultPositioning");
          
              return this.__PROXY__.setDefaultPositioning(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QGridLayout.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QGridLayout.prototype, 'spacing', {
              get: function() {
                  
                      return this.__PROXY__.spacing;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSpacing(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QGridLayout.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QGridLayout.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QGridLayout.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QGridLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QGridLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QGridLayout.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      