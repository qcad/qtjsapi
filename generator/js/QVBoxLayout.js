
      // auto generated
      //var self;

      // class constructor:
      function QVBoxLayout() {
        

        // should be QVBoxLayout_BaseJs.call(this, engine):
        //QVBoxLayout.prototype = new QVBoxLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QVBoxLayout.getIdStatic()))) {

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
            qWarning("QVBoxLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QVBoxLayout_Wrapper(
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

      

        //copyProperties(this, wrapper, QVBoxLayout);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QVBoxLayout_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QVBoxLayout);
  }

  
  else {
    
        print("QVBoxLayout(): wrong number / type of arguments");
      
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

      //QVBoxLayout.prototype = new QVBoxLayout_BaseJs(engine);
      //QVBoxLayout.prototype = new QVBoxLayout_Wrapper(engine);
      QVBoxLayout.prototype = new Object();


      QVBoxLayout.prototype.toString = function() {
          //return "QVBoxLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QVBoxLayout [JS]";
        };
      QVBoxLayout.getObjectType = function() {
        return RJSType_QVBoxLayout.getIdStatic();
      };

      QVBoxLayout.prototype.getObjectType = function() {
        return RJSType_QVBoxLayout.getIdStatic();
      };

      QVBoxLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QVBoxLayout.getIdStatic()) {
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
        
          if (t===RJSType_QBoxLayout.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      
  // enum: Direction
QVBoxLayout.LeftToRight = QVBoxLayout_Wrapper.LeftToRight;
QVBoxLayout.RightToLeft = QVBoxLayout_Wrapper.RightToLeft;
QVBoxLayout.TopToBottom = QVBoxLayout_Wrapper.TopToBottom;
QVBoxLayout.BottomToTop = QVBoxLayout_Wrapper.BottomToTop;
QVBoxLayout.Down = QVBoxLayout_Wrapper.Down;
QVBoxLayout.Up = QVBoxLayout_Wrapper.Up;


      // functions:
      
        // function 
        QVBoxLayout.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.findChild = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.children = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.setParent = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.property = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.parent = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.widget = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.spacerItem = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.spacerItem");
          
              return this.__PROXY__.spacerItem(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.alignment = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.setSizeConstraint = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.setSizeConstraint");
          
              return this.__PROXY__.setSizeConstraint(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.sizeConstraint = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.sizeConstraint");
          
              return this.__PROXY__.sizeConstraint(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.setMenuBar = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.setMenuBar");
          
              return this.__PROXY__.setMenuBar(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.menuBar = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.menuBar");
          
              return this.__PROXY__.menuBar(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.geometry = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.geometry");
          
              return this.__PROXY__.geometry(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.activate = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.activate");
          
              return this.__PROXY__.activate(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.update = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.removeWidget = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.removeWidget");
          
              return this.__PROXY__.removeWidget(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.removeItem = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.indexOf = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.indexOf");
          
              return this.__PROXY__.indexOf(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.controlTypes = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.controlTypes");
          
              return this.__PROXY__.controlTypes(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.totalHeightForWidth = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.totalHeightForWidth");
          
              return this.__PROXY__.totalHeightForWidth(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.totalMinimumSize = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.totalMinimumSize");
          
              return this.__PROXY__.totalMinimumSize(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.totalMaximumSize = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.totalMaximumSize");
          
              return this.__PROXY__.totalMaximumSize(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.totalSizeHint = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.totalSizeHint");
          
              return this.__PROXY__.totalSizeHint(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.layout = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.widgetEvent = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.widgetEvent");
          
              return this.__PROXY__.widgetEvent(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.childEvent = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.childEvent");
          
              return this.__PROXY__.childEvent(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.addChildLayout = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.addChildLayout");
          
              return this.__PROXY__.addChildLayout(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.addChildWidget = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.addChildWidget");
          
              return this.__PROXY__.addChildWidget(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.adoptLayout = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.adoptLayout");
          
              return this.__PROXY__.adoptLayout(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.alignmentRect = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.alignmentRect");
          
              return this.__PROXY__.alignmentRect(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.Q_DECLARE_PRIVATE = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.Q_DECLARE_PRIVATE");
          
              return this.__PROXY__.Q_DECLARE_PRIVATE(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.direction = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.direction");
          
              return this.__PROXY__.direction(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.setDirection = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.setDirection");
          
              return this.__PROXY__.setDirection(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.addSpacing = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.addSpacing");
          
              return this.__PROXY__.addSpacing(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.addStretch = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.addStretch");
          
              return this.__PROXY__.addStretch(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.addSpacerItem = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.addSpacerItem");
          
              return this.__PROXY__.addSpacerItem(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.addWidget = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.addWidget");
          
              return this.__PROXY__.addWidget(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.addLayout = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.addLayout");
          
              return this.__PROXY__.addLayout(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.addStrut = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.addStrut");
          
              return this.__PROXY__.addStrut(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.addItem = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.insertSpacing = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.insertSpacing");
          
              return this.__PROXY__.insertSpacing(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.insertStretch = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.insertStretch");
          
              return this.__PROXY__.insertStretch(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.insertSpacerItem = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.insertSpacerItem");
          
              return this.__PROXY__.insertSpacerItem(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.insertWidget = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.insertWidget");
          
              return this.__PROXY__.insertWidget(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.insertLayout = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.insertLayout");
          
              return this.__PROXY__.insertLayout(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.insertItem = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.insertItem");
          
              return this.__PROXY__.insertItem(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.setSpacing = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.setSpacing");
          
              return this.__PROXY__.setSpacing(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.setStretchFactor = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.setStretchFactor");
          
              return this.__PROXY__.setStretchFactor(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.setStretch = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.setStretch");
          
              return this.__PROXY__.setStretch(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.stretch = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.stretch");
          
              return this.__PROXY__.stretch(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.sizeHint = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.sizeHint");
          
              return this.__PROXY__.sizeHint(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.minimumSize = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.minimumSize");
          
              return this.__PROXY__.minimumSize(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.maximumSize = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.maximumSize");
          
              return this.__PROXY__.maximumSize(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.minimumHeightForWidth = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.minimumHeightForWidth");
          
              return this.__PROXY__.minimumHeightForWidth(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.expandingDirections = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.expandingDirections");
          
              return this.__PROXY__.expandingDirections(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.invalidate = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.invalidate");
          
              return this.__PROXY__.invalidate(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.itemAt = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.itemAt");
          
              return this.__PROXY__.itemAt(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.takeAt = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.takeAt");
          
              return this.__PROXY__.takeAt(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.count = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.count");
          
              return this.__PROXY__.count(...args);
            
        };
        
        // function 
        QVBoxLayout.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QVBoxLayout.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QVBoxLayout.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QVBoxLayout.prototype, 'spacing', {
              get: function() {
                  
                      return this.__PROXY__.spacing;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSpacing(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QVBoxLayout.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QVBoxLayout.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QVBoxLayout.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QVBoxLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QVBoxLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QVBoxLayout.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      