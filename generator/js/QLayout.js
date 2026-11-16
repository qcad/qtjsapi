
      // auto generated
      //var self;

      // class constructor:
      function QLayout() {
        

        // should be QLayout_BaseJs.call(this, engine):
        //QLayout.prototype = new QLayout_BaseJs(engine);

        var wrapper;

        // creating JS class for existing wrapper:
        if (arguments.length===3 && arguments[0]==="__GOT_WRAPPER__") {

          if (arguments[2]!==undefined 
            && (arguments[2]===null || 
            (typeof(arguments[2].getWrappedType)==="function" && 
            arguments[2].getWrappedType()===RJSType_QLayout.getIdStatic()))) {

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
            qWarning("QLayout.js: Constructor called with __GOT_WRAPPER__, but no valid wrapper provided: " + arguments[2]);
            console.trace();
          }

        }
        else {
          
      if (arguments.length >= 0 &&
          arguments.length <= 1) {
    
            self = this;
            wrapper = new QLayout_Wrapper(
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

      

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout(): wrong number / type of arguments");
      
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

      //QLayout.prototype = new QLayout_BaseJs(engine);
      //QLayout.prototype = new QLayout_Wrapper(engine);
      QLayout.prototype = new Object();


      QLayout.prototype.toString = function() {
          //return "QLayout [JS] [0x" + this.getAddress().toString(16) + "]";
          return "QLayout [JS]";
        };
      QLayout.getObjectType = function() {
        return RJSType_QLayout.getIdStatic();
      };

      QLayout.prototype.getObjectType = function() {
        return RJSType_QLayout.getIdStatic();
      };

      QLayout.prototype.isOfObjectType = function(t) {
        if (t===RJSType_QLayout.getIdStatic()) {
          return true;
        }

        
          if (t===RJSType_QObject.getIdStatic()) {
            return true;
          }
        
          if (t===RJSType_QLayoutItem.getIdStatic()) {
            return true;
          }
        

        return false;


        
      };

      // enum values:
      

      // functions:
      
        // function 
        QLayout.prototype.setObjectName = function(...args) 
          
        {
          //print("JS: QLayout.prototype.setObjectName");
          
              return this.__PROXY__.setObjectName(...args);
            
        };
        
        // function 
        QLayout.prototype.isWidgetType = function(...args) 
          
        {
          //print("JS: QLayout.prototype.isWidgetType");
          
              return this.__PROXY__.isWidgetType(...args);
            
        };
        
        // function 
        QLayout.prototype.isWindowType = function(...args) 
          
        {
          //print("JS: QLayout.prototype.isWindowType");
          
              return this.__PROXY__.isWindowType(...args);
            
        };
        
        // function 
        QLayout.prototype.signalsBlocked = function(...args) 
          
        {
          //print("JS: QLayout.prototype.signalsBlocked");
          
              return this.__PROXY__.signalsBlocked(...args);
            
        };
        
        // function 
        QLayout.prototype.blockSignals = function(...args) 
          
        {
          //print("JS: QLayout.prototype.blockSignals");
          
              return this.__PROXY__.blockSignals(...args);
            
        };
        
        // function 
        QLayout.prototype.findChild = function(...args) 
          
        {
          //print("JS: QLayout.prototype.findChild");
          
              return this.__PROXY__.findChild(...args);
            
        };
        
        // function 
        QLayout.prototype.children = function(...args) 
          
        {
          //print("JS: QLayout.prototype.children");
          
              return this.__PROXY__.children(...args);
            
        };
        
        // function 
        QLayout.prototype.setParent = function(...args) 
          
        {
          //print("JS: QLayout.prototype.setParent");
          
              return this.__PROXY__.setParent(...args);
            
        };
        
        // function 
        QLayout.prototype.installEventFilter = function(...args) 
          
        {
          //print("JS: QLayout.prototype.installEventFilter");
          
              return this.__PROXY__.installEventFilter(...args);
            
        };
        
        // function 
        QLayout.prototype.removeEventFilter = function(...args) 
          
        {
          //print("JS: QLayout.prototype.removeEventFilter");
          
              return this.__PROXY__.removeEventFilter(...args);
            
        };
        
        // function 
        QLayout.prototype.dumpObjectTree = function(...args) 
          
        {
          //print("JS: QLayout.prototype.dumpObjectTree");
          
              return this.__PROXY__.dumpObjectTree(...args);
            
        };
        
        // function 
        QLayout.prototype.dumpObjectInfo = function(...args) 
          
        {
          //print("JS: QLayout.prototype.dumpObjectInfo");
          
              return this.__PROXY__.dumpObjectInfo(...args);
            
        };
        
        // function 
        QLayout.prototype.setProperty = function(...args) 
          
        {
          //print("JS: QLayout.prototype.setProperty");
          
              return this.__PROXY__.setProperty(...args);
            
        };
        
        // function 
        QLayout.prototype.property = function(...args) 
          
        {
          //print("JS: QLayout.prototype.property");
          
              return this.__PROXY__.property(...args);
            
        };
        
        // function 
        QLayout.prototype.dynamicPropertyNames = function(...args) 
          
        {
          //print("JS: QLayout.prototype.dynamicPropertyNames");
          
              return this.__PROXY__.dynamicPropertyNames(...args);
            
        };
        
        // function 
        QLayout.prototype.parent = function(...args) 
          
        {
          //print("JS: QLayout.prototype.parent");
          
              return this.__PROXY__.parent(...args);
            
        };
        
        // function 
        QLayout.prototype.deleteLater = function(...args) 
          
        {
          //print("JS: QLayout.prototype.deleteLater");
          
              return this.__PROXY__.deleteLater(...args);
            
        };
        
      // function 
      QLayout.prototype.sizeHint = function() 
        
      {
        //print("JS: QLayout.prototype.sizeHint");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.sizeHint(
                // call highest level JS implementation:
                //return this.sizeHintBase(
                
                    return this.__PROXY__.sizeHintSuper(
                  
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.sizeHint(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QLayout.prototype.hasHeightForWidth = function(...args) 
          
        {
          //print("JS: QLayout.prototype.hasHeightForWidth");
          
              return this.__PROXY__.hasHeightForWidth(...args);
            
        };
        
        // function 
        QLayout.prototype.heightForWidth = function(...args) 
          
        {
          //print("JS: QLayout.prototype.heightForWidth");
          
              return this.__PROXY__.heightForWidth(...args);
            
        };
        
        // function 
        QLayout.prototype.minimumHeightForWidth = function(...args) 
          
        {
          //print("JS: QLayout.prototype.minimumHeightForWidth");
          
              return this.__PROXY__.minimumHeightForWidth(...args);
            
        };
        
        // function 
        QLayout.prototype.widget = function(...args) 
          
        {
          //print("JS: QLayout.prototype.widget");
          
              return this.__PROXY__.widget(...args);
            
        };
        
        // function 
        QLayout.prototype.spacerItem = function(...args) 
          
        {
          //print("JS: QLayout.prototype.spacerItem");
          
              return this.__PROXY__.spacerItem(...args);
            
        };
        
        // function 
        QLayout.prototype.alignment = function(...args) 
          
        {
          //print("JS: QLayout.prototype.alignment");
          
              return this.__PROXY__.alignment(...args);
            
        };
        
        // function 
        QLayout.prototype.setSpacing = function(...args) 
          
        {
          //print("JS: QLayout.prototype.setSpacing");
          
              return this.__PROXY__.setSpacing(...args);
            
        };
        
        // function 
        QLayout.prototype.setContentsMargins = function(...args) 
          
        {
          //print("JS: QLayout.prototype.setContentsMargins");
          
              return this.__PROXY__.setContentsMargins(...args);
            
        };
        
        // function 
        QLayout.prototype.contentsMargins = function(...args) 
          
        {
          //print("JS: QLayout.prototype.contentsMargins");
          
              return this.__PROXY__.contentsMargins(...args);
            
        };
        
        // function 
        QLayout.prototype.contentsRect = function(...args) 
          
        {
          //print("JS: QLayout.prototype.contentsRect");
          
              return this.__PROXY__.contentsRect(...args);
            
        };
        
        // function 
        QLayout.prototype.setAlignment = function(...args) 
          
        {
          //print("JS: QLayout.prototype.setAlignment");
          
              return this.__PROXY__.setAlignment(...args);
            
        };
        
        // function 
        QLayout.prototype.setSizeConstraint = function(...args) 
          
        {
          //print("JS: QLayout.prototype.setSizeConstraint");
          
              return this.__PROXY__.setSizeConstraint(...args);
            
        };
        
        // function 
        QLayout.prototype.sizeConstraint = function(...args) 
          
        {
          //print("JS: QLayout.prototype.sizeConstraint");
          
              return this.__PROXY__.sizeConstraint(...args);
            
        };
        
        // function 
        QLayout.prototype.setMenuBar = function(...args) 
          
        {
          //print("JS: QLayout.prototype.setMenuBar");
          
              return this.__PROXY__.setMenuBar(...args);
            
        };
        
        // function 
        QLayout.prototype.menuBar = function(...args) 
          
        {
          //print("JS: QLayout.prototype.menuBar");
          
              return this.__PROXY__.menuBar(...args);
            
        };
        
        // function 
        QLayout.prototype.parentWidget = function(...args) 
          
        {
          //print("JS: QLayout.prototype.parentWidget");
          
              return this.__PROXY__.parentWidget(...args);
            
        };
        
        // function 
        QLayout.prototype.invalidate = function(...args) 
          
        {
          //print("JS: QLayout.prototype.invalidate");
          
              return this.__PROXY__.invalidate(...args);
            
        };
        
        // function 
        QLayout.prototype.geometry = function(...args) 
          
        {
          //print("JS: QLayout.prototype.geometry");
          
              return this.__PROXY__.geometry(...args);
            
        };
        
        // function 
        QLayout.prototype.activate = function(...args) 
          
        {
          //print("JS: QLayout.prototype.activate");
          
              return this.__PROXY__.activate(...args);
            
        };
        
        // function 
        QLayout.prototype.update = function(...args) 
          
        {
          //print("JS: QLayout.prototype.update");
          
              return this.__PROXY__.update(...args);
            
        };
        
        // function 
        QLayout.prototype.addWidget = function(...args) 
          
        {
          //print("JS: QLayout.prototype.addWidget");
          
              return this.__PROXY__.addWidget(...args);
            
        };
        
      // function 
      QLayout.prototype.addItem = function() 
        
      {
        //print("JS: QLayout.prototype.addItem");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.addItem(
                // call highest level JS implementation:
                //return this.addItemBase(
                
                    return this.__PROXY__.addItemSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.addItem(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QLayout.prototype.removeWidget = function(...args) 
          
        {
          //print("JS: QLayout.prototype.removeWidget");
          
              return this.__PROXY__.removeWidget(...args);
            
        };
        
        // function 
        QLayout.prototype.removeItem = function(...args) 
          
        {
          //print("JS: QLayout.prototype.removeItem");
          
              return this.__PROXY__.removeItem(...args);
            
        };
        
        // function 
        QLayout.prototype.expandingDirections = function(...args) 
          
        {
          //print("JS: QLayout.prototype.expandingDirections");
          
              return this.__PROXY__.expandingDirections(...args);
            
        };
        
      // function 
      QLayout.prototype.minimumSize = function() 
        
      {
        //print("JS: QLayout.prototype.minimumSize");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.minimumSize(
                // call highest level JS implementation:
                //return this.minimumSizeBase(
                
                    return this.__PROXY__.minimumSizeSuper(
                  
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.minimumSize(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QLayout.prototype.maximumSize = function(...args) 
          
        {
          //print("JS: QLayout.prototype.maximumSize");
          
              return this.__PROXY__.maximumSize(...args);
            
        };
        
      // function 
      QLayout.prototype.setGeometry = function() 
        
      {
        //print("JS: QLayout.prototype.setGeometry");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.setGeometry(
                // call highest level JS implementation:
                //return this.setGeometryBase(
                
                    return this.__PROXY__.setGeometrySuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.setGeometry(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      QLayout.prototype.itemAt = function() 
        
      {
        //print("JS: QLayout.prototype.itemAt");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.itemAt(
                // call highest level JS implementation:
                //return this.itemAtBase(
                
                    return this.__PROXY__.itemAtSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.itemAt(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
      // function 
      QLayout.prototype.takeAt = function() 
        
      {
        //print("JS: QLayout.prototype.takeAt");
        
      if (arguments.length == 1) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.takeAt(
                // call highest level JS implementation:
                //return this.takeAtBase(
                
                    return this.__PROXY__.takeAtSuper(
                  arguments[0]
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.takeAt(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QLayout.prototype.indexOf = function(...args) 
          
        {
          //print("JS: QLayout.prototype.indexOf");
          
              return this.__PROXY__.indexOf(...args);
            
        };
        
      // function 
      QLayout.prototype.count = function() 
        
      {
        //print("JS: QLayout.prototype.count");
        
      if (arguments.length == 0) {
    
                // calling wrapper:
                self = this;
                //return this.wrapper.count(
                // call highest level JS implementation:
                //return this.countBase(
                
                    return this.__PROXY__.countSuper(
                  
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.count(): wrong number / type of arguments");
      
    console.trace();
  }
  
      };
    
        // function 
        QLayout.prototype.isEmpty = function(...args) 
          
        {
          //print("JS: QLayout.prototype.isEmpty");
          
              return this.__PROXY__.isEmpty(...args);
            
        };
        
        // function 
        QLayout.prototype.controlTypes = function(...args) 
          
        {
          //print("JS: QLayout.prototype.controlTypes");
          
              return this.__PROXY__.controlTypes(...args);
            
        };
        
        // function 
        QLayout.prototype.totalHeightForWidth = function(...args) 
          
        {
          //print("JS: QLayout.prototype.totalHeightForWidth");
          
              return this.__PROXY__.totalHeightForWidth(...args);
            
        };
        
        // function 
        QLayout.prototype.totalMinimumSize = function(...args) 
          
        {
          //print("JS: QLayout.prototype.totalMinimumSize");
          
              return this.__PROXY__.totalMinimumSize(...args);
            
        };
        
        // function 
        QLayout.prototype.totalMaximumSize = function(...args) 
          
        {
          //print("JS: QLayout.prototype.totalMaximumSize");
          
              return this.__PROXY__.totalMaximumSize(...args);
            
        };
        
        // function 
        QLayout.prototype.totalSizeHint = function(...args) 
          
        {
          //print("JS: QLayout.prototype.totalSizeHint");
          
              return this.__PROXY__.totalSizeHint(...args);
            
        };
        
        // function 
        QLayout.prototype.layout = function(...args) 
          
        {
          //print("JS: QLayout.prototype.layout");
          
              return this.__PROXY__.layout(...args);
            
        };
        
        // function 
        QLayout.prototype.setEnabled = function(...args) 
          
        {
          //print("JS: QLayout.prototype.setEnabled");
          
              return this.__PROXY__.setEnabled(...args);
            
        };
        
        // function 
        QLayout.prototype.isEnabled = function(...args) 
          
        {
          //print("JS: QLayout.prototype.isEnabled");
          
              return this.__PROXY__.isEnabled(...args);
            
        };
        
        // function 
        QLayout.prototype.closestAcceptableSize = function(...args) 
          
        {
          //print("JS: QLayout.prototype.closestAcceptableSize");
          
              return this.__PROXY__.closestAcceptableSize(...args);
            
        };
        
        // function 
        QLayout.prototype.widgetEvent = function(...args) 
          
        {
          //print("JS: QLayout.prototype.widgetEvent");
          
              return this.__PROXY__.widgetEvent(...args);
            
        };
        
        // function 
        QLayout.prototype.childEvent = function(...args) 
          
        {
          //print("JS: QLayout.prototype.childEvent");
          
              return this.__PROXY__.childEvent(...args);
            
        };
        
        // function 
        QLayout.prototype.addChildLayout = function(...args) 
          
        {
          //print("JS: QLayout.prototype.addChildLayout");
          
              return this.__PROXY__.addChildLayout(...args);
            
        };
        
        // function 
        QLayout.prototype.addChildWidget = function(...args) 
          
        {
          //print("JS: QLayout.prototype.addChildWidget");
          
              return this.__PROXY__.addChildWidget(...args);
            
        };
        
        // function 
        QLayout.prototype.adoptLayout = function(...args) 
          
        {
          //print("JS: QLayout.prototype.adoptLayout");
          
              return this.__PROXY__.adoptLayout(...args);
            
        };
        
        // function 
        QLayout.prototype.alignmentRect = function(...args) 
          
        {
          //print("JS: QLayout.prototype.alignmentRect");
          
              return this.__PROXY__.alignmentRect(...args);
            
        };
        
        // function 
        QLayout.prototype.activateRecursiveHelper = function(...args) 
          
        {
          //print("JS: QLayout.prototype.activateRecursiveHelper");
          
              return this.__PROXY__.activateRecursiveHelper(...args);
            
        };
        

      // static functions:
      

        // static function 
        QLayout.closestAcceptableSize = function() 
          
        {
          //print("JS: QLayout.closestAcceptableSize");
          
      if (arguments.length == 2) {
    
                // calling static wrapper:
                return QLayout_WrapperSingletonInstance.closestAcceptableSize(
                  arguments[0], arguments[1]
                );
              

        //copyProperties(this, wrapper, QLayout);
  }

  
  else {
    
        print("QLayout.closestAcceptableSize(): wrong number / type of arguments");
      
    console.trace();
  }
  
        };
      

        // static function 
        QLayout.activateRecursiveHelper = function() 
          
        {
          //print("JS: QLayout.activateRecursiveHelper");
          
        };
      
          Object.defineProperty(QLayout.prototype, 'objectName', {
              get: function() {
                  
                      return this.__PROXY__.objectName;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setObjectName(value);
                },
              
              enumerable: true,
              configurable: true
          });
        
          Object.defineProperty(QLayout.prototype, 'spacing', {
              get: function() {
                  
                      return this.__PROXY__.spacing;
                    
              },
              
                set: function(value) {
                    this.__PROXY__.setSpacing(value);
                },
              
              enumerable: true,
              configurable: true
          });
        QLayout.prototype.isNullWrapper = function() {
        return this.__PROXY__.isNullWrapper();
      };
      QLayout.prototype.getAddress = function() {
        return this.__PROXY__.getAddress();
      };
      QLayout.prototype.getWrappedType = function() {
        return this.__PROXY__.getWrappedType();
      };

      

      // constants:
      

      // public static properties without access function:
      

      // copy function:
      //QLayout.prototype.copy = function() {
      //  return this.wrapper.copy();
      //};

      // destroy function:
      //QLayout.prototype.destr = function() {
      //  return this.wrapper.destr();
      //};

      QLayout.prototype.destr = function() {
          return this.__PROXY__.destr();
        };
      