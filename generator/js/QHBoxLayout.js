
      // auto generated
      //var self;

      // class constructor:
      function QHBoxLayout() {
        

        // should be QHBoxLayout_BaseJs.call(this, engine):
        //QHBoxLayout.prototype = new QHBoxLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QHBoxLayout.getIdStatic()))) {

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
            qWarning("QHBoxLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length == 1) {
    
            self = this;
            wrapper = new QHBoxLayout_Wrapper(
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

      

        //copyProperties(this, wrapper, QHBoxLayout);
  }

  
  else 
  
      if (arguments.length == 0) {
    
            self = this;
            wrapper = new QHBoxLayout_Wrapper(
              // RJSApi:
              handler
              
              ////this.setWrapper(this.wrapper);
              //Object.setPrototypeOf(this, wrapper);
            );
            //wrapper.__WRAPPER__ = true;
            Object.defineProperty(wrapper, "__WRAPPER__", { configurable: true, writable: true, value: true });
          
            this.__PROXY__ = wrapper;
          

        //this.setWrapper(this.wrapper);

      

        //copyProperties(this, wrapper, QHBoxLayout);
  }

  
  else {
    
        print("QHBoxLayout(): wrong number / type of arguments");
      
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

      //QHBoxLayout.prototype = new QHBoxLayout_BaseJs(engine);
      //QHBoxLayout.prototype = new QHBoxLayout_Wrapper(engine);
      QHBoxLayout.prototype = new Object();


      QHBoxLayout.prototype.toString = function() {
          //return "QHBoxLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QHBoxLayout [JS]";
        };
      QHBoxLayout.getObjectType = function() {
        return RJSType_QHBoxLayout.getIdStatic();
      };

      QHBoxLayout.prototype.getObjectType = function() {
        return RJSType_QHBoxLayout.getIdStatic();
      };

      QHBoxLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QHBoxLayout.getIdStatic()) {
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
QHBoxLayout.LeftToRight = QHBoxLayout_Wrapper.LeftToRight;
QHBoxLayout.RightToLeft = QHBoxLayout_Wrapper.RightToLeft;
QHBoxLayout.TopToBottom = QHBoxLayout_Wrapper.TopToBottom;
QHBoxLayout.BottomToTop = QHBoxLayout_Wrapper.BottomToTop;
QHBoxLayout.Down = QHBoxLayout_Wrapper.Down;
QHBoxLayout.Up = QHBoxLayout_Wrapper.Up;


      // functions:
      
        // function 
        QHBoxLayout.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.findChild = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.children = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.setParent = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.property = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.parent = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.widget = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.spacerItem = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.spacerItem");
          
              return this.__PROXY__.spacerItem(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.alignment = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.setSizeConstraint = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.setSizeConstraint");
          
              return this.__PROXY__.setSizeConstraint(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.sizeConstraint = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.sizeConstraint");
          
              return this.__PROXY__.sizeConstraint(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.setMenuBar = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.setMenuBar");
          
              return this.__PROXY__.setMenuBar(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.menuBar = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.menuBar");
          
              return this.__PROXY__.menuBar(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.geometry = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.geometry");
          
              return this.__PROXY__.geometry(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.activate = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.activate");
          
              return this.__PROXY__.activate(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.update = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.removeWidget = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.removeWidget");
          
              return this.__PROXY__.removeWidget(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.removeItem = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.indexOf = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.indexOf");
          
              return this.__PROXY__.indexOf(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.controlTypes = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.controlTypes");
          
              return this.__PROXY__.controlTypes(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.totalHeightForWidth = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.totalHeightForWidth");
          
              return this.__PROXY__.totalHeightForWidth(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.totalMinimumSize = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.totalMinimumSize");
          
              return this.__PROXY__.totalMinimumSize(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.totalMaximumSize = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.totalMaximumSize");
          
              return this.__PROXY__.totalMaximumSize(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.totalSizeHint = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.totalSizeHint");
          
              return this.__PROXY__.totalSizeHint(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.layout = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.widgetEvent = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.widgetEvent");
          
              return this.__PROXY__.widgetEvent(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.childEvent = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.childEvent");
          
              return this.__PROXY__.childEvent(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.addChildLayout = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.addChildLayout");
          
              return this.__PROXY__.addChildLayout(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.addChildWidget = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.addChildWidget");
          
              return this.__PROXY__.addChildWidget(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.adoptLayout = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.adoptLayout");
          
              return this.__PROXY__.adoptLayout(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.alignmentRect = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.alignmentRect");
          
              return this.__PROXY__.alignmentRect(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.Q_DECLARE_PRIVATE = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.Q_DECLARE_PRIVATE");
          
              return this.__PROXY__.Q_DECLARE_PRIVATE(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.direction = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.direction");
          
              return this.__PROXY__.direction(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.setDirection = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.setDirection");
          
              return this.__PROXY__.setDirection(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.addSpacing = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.addSpacing");
          
              return this.__PROXY__.addSpacing(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.addStretch = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.addStretch");
          
              return this.__PROXY__.addStretch(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.addSpacerItem = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.addSpacerItem");
          
              return this.__PROXY__.addSpacerItem(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.addWidget = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.addWidget");
          
              return this.__PROXY__.addWidget(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.addLayout = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.addLayout");
          
              return this.__PROXY__.addLayout(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.addStrut = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.addStrut");
          
              return this.__PROXY__.addStrut(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.addItem = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.insertSpacing = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.insertSpacing");
          
              return this.__PROXY__.insertSpacing(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.insertStretch = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.insertStretch");
          
              return this.__PROXY__.insertStretch(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.insertSpacerItem = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.insertSpacerItem");
          
              return this.__PROXY__.insertSpacerItem(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.insertWidget = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.insertWidget");
          
              return this.__PROXY__.insertWidget(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.insertLayout = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.insertLayout");
          
              return this.__PROXY__.insertLayout(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.insertItem = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.insertItem");
          
              return this.__PROXY__.insertItem(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.setSpacing = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.setSpacing");
          
              return this.__PROXY__.setSpacing(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.setStretchFactor = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.setStretchFactor");
          
              return this.__PROXY__.setStretchFactor(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.setStretch = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.setStretch");
          
              return this.__PROXY__.setStretch(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.stretch = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.stretch");
          
              return this.__PROXY__.stretch(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.sizeHint = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.sizeHint");
          
              return this.__PROXY__.sizeHint(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.minimumSize = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.minimumSize");
          
              return this.__PROXY__.minimumSize(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.maximumSize = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.maximumSize");
          
              return this.__PROXY__.maximumSize(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.minimumHeightForWidth = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.minimumHeightForWidth");
          
              return this.__PROXY__.minimumHeightForWidth(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.expandingDirections = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.expandingDirections");
          
              return this.__PROXY__.expandingDirections(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.invalidate = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.invalidate");
          
              return this.__PROXY__.invalidate(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.itemAt = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.itemAt");
          
              return this.__PROXY__.itemAt(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.takeAt = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.takeAt");
          
              return this.__PROXY__.takeAt(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.count = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.count");
          
              return this.__PROXY__.count(...args);
            
        };
        
        // function 
        QHBoxLayout.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QHBoxLayout.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QHBoxLayout.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QHBoxLayout.prototype, 'spacing', {
              get: function() {
                  
                      return this.__PROXY__.spacing;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSpacing(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QHBoxLayout.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QHBoxLayout.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QHBoxLayout.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QHBoxLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QHBoxLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QHBoxLayout.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      