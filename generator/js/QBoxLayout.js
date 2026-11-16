
      // auto generated
      //var self;

      // class constructor:
      function QBoxLayout() {
        

        // should be QBoxLayout_BaseJs.call(this, engine):
        //QBoxLayout.prototype = new QBoxLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QBoxLayout.getIdStatic()))) {

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
            qWarning("QBoxLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 1 &&
          arguments.length <= 2) {
    
            self = this;
            wrapper = new QBoxLayout_Wrapper(
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

      

        //copyProperties(this, wrapper, QBoxLayout);
  }

  
  else {
    
        print("QBoxLayout(): wrong number / type of arguments");
      
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

      //QBoxLayout.prototype = new QBoxLayout_BaseJs(engine);
      //QBoxLayout.prototype = new QBoxLayout_Wrapper(engine);
      QBoxLayout.prototype = new Object();


      QBoxLayout.prototype.toString = function() {
          //return "QBoxLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QBoxLayout [JS]";
        };
      QBoxLayout.getObjectType = function() {
        return RJSType_QBoxLayout.getIdStatic();
      };

      QBoxLayout.prototype.getObjectType = function() {
        return RJSType_QBoxLayout.getIdStatic();
      };

      QBoxLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QBoxLayout.getIdStatic()) {
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
      
  // enum: Direction
QBoxLayout.LeftToRight = QBoxLayout_Wrapper.LeftToRight;
QBoxLayout.RightToLeft = QBoxLayout_Wrapper.RightToLeft;
QBoxLayout.TopToBottom = QBoxLayout_Wrapper.TopToBottom;
QBoxLayout.BottomToTop = QBoxLayout_Wrapper.BottomToTop;
QBoxLayout.Down = QBoxLayout_Wrapper.Down;
QBoxLayout.Up = QBoxLayout_Wrapper.Up;


      // functions:
      
        // function 
        QBoxLayout.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.findChild = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.children = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.setParent = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.property = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.parent = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.widget = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.spacerItem = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.spacerItem");
          
              return this.__PROXY__.spacerItem(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.alignment = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.setSizeConstraint = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.setSizeConstraint");
          
              return this.__PROXY__.setSizeConstraint(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.sizeConstraint = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.sizeConstraint");
          
              return this.__PROXY__.sizeConstraint(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.setMenuBar = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.setMenuBar");
          
              return this.__PROXY__.setMenuBar(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.menuBar = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.menuBar");
          
              return this.__PROXY__.menuBar(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.geometry = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.geometry");
          
              return this.__PROXY__.geometry(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.activate = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.activate");
          
              return this.__PROXY__.activate(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.update = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.removeWidget = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.removeWidget");
          
              return this.__PROXY__.removeWidget(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.removeItem = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.indexOf = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.indexOf");
          
              return this.__PROXY__.indexOf(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.controlTypes = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.controlTypes");
          
              return this.__PROXY__.controlTypes(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.totalHeightForWidth = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.totalHeightForWidth");
          
              return this.__PROXY__.totalHeightForWidth(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.totalMinimumSize = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.totalMinimumSize");
          
              return this.__PROXY__.totalMinimumSize(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.totalMaximumSize = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.totalMaximumSize");
          
              return this.__PROXY__.totalMaximumSize(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.totalSizeHint = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.totalSizeHint");
          
              return this.__PROXY__.totalSizeHint(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.layout = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.widgetEvent = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.widgetEvent");
          
              return this.__PROXY__.widgetEvent(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.childEvent = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.childEvent");
          
              return this.__PROXY__.childEvent(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.addChildLayout = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.addChildLayout");
          
              return this.__PROXY__.addChildLayout(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.addChildWidget = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.addChildWidget");
          
              return this.__PROXY__.addChildWidget(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.adoptLayout = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.adoptLayout");
          
              return this.__PROXY__.adoptLayout(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.alignmentRect = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.alignmentRect");
          
              return this.__PROXY__.alignmentRect(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.Q_DECLARE_PRIVATE = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.Q_DECLARE_PRIVATE");
          
              return this.__PROXY__.Q_DECLARE_PRIVATE(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.direction = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.direction");
          
              return this.__PROXY__.direction(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.setDirection = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.setDirection");
          
              return this.__PROXY__.setDirection(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.addSpacing = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.addSpacing");
          
              return this.__PROXY__.addSpacing(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.addStretch = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.addStretch");
          
              return this.__PROXY__.addStretch(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.addSpacerItem = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.addSpacerItem");
          
              return this.__PROXY__.addSpacerItem(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.addWidget = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.addWidget");
          
              return this.__PROXY__.addWidget(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.addLayout = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.addLayout");
          
              return this.__PROXY__.addLayout(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.addStrut = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.addStrut");
          
              return this.__PROXY__.addStrut(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.addItem = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.addItem");
          
              return this.__PROXY__.addItem(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.insertSpacing = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.insertSpacing");
          
              return this.__PROXY__.insertSpacing(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.insertStretch = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.insertStretch");
          
              return this.__PROXY__.insertStretch(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.insertSpacerItem = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.insertSpacerItem");
          
              return this.__PROXY__.insertSpacerItem(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.insertWidget = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.insertWidget");
          
              return this.__PROXY__.insertWidget(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.insertLayout = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.insertLayout");
          
              return this.__PROXY__.insertLayout(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.insertItem = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.insertItem");
          
              return this.__PROXY__.insertItem(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.setSpacing = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.setSpacing");
          
              return this.__PROXY__.setSpacing(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.setStretchFactor = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.setStretchFactor");
          
              return this.__PROXY__.setStretchFactor(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.setStretch = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.setStretch");
          
              return this.__PROXY__.setStretch(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.stretch = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.stretch");
          
              return this.__PROXY__.stretch(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.sizeHint = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.sizeHint");
          
              return this.__PROXY__.sizeHint(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.minimumSize = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.minimumSize");
          
              return this.__PROXY__.minimumSize(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.maximumSize = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.maximumSize");
          
              return this.__PROXY__.maximumSize(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.minimumHeightForWidth = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.minimumHeightForWidth");
          
              return this.__PROXY__.minimumHeightForWidth(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.expandingDirections = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.expandingDirections");
          
              return this.__PROXY__.expandingDirections(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.invalidate = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.invalidate");
          
              return this.__PROXY__.invalidate(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.itemAt = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.itemAt");
          
              return this.__PROXY__.itemAt(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.takeAt = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.takeAt");
          
              return this.__PROXY__.takeAt(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.count = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.count");
          
              return this.__PROXY__.count(...args);
            
        };
        
        // function 
        QBoxLayout.prototype.setGeometry = function(...args) 
          
        {
          //print("JS: QBoxLayout.prototype.setGeometry");
          
              return this.__PROXY__.setGeometry(...args);
            
        };
        

      // static functions:
      
          Object.defineProperty(QBoxLayout.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QBoxLayout.prototype, 'spacing', {
              get: function() {
                  
                      return this.__PROXY__.spacing;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSpacing(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QBoxLayout.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QBoxLayout.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QBoxLayout.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QBoxLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QBoxLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QBoxLayout.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      